import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { projectService } from '../services/projectService';
import { Database } from '../types/supabase';
import { supabase } from '../utils/supabase';
import { RealtimeChannel } from '@supabase/supabase-js';

type Project = Database['public']['Tables']['projects']['Row'];

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  error: string | null;
  createProject: (data: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => Promise<Project>;
  updateProject: (id: string, data: Partial<Project>) => Promise<Project>;
  deleteProject: (id: string) => Promise<void>;
  refreshProjects: () => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const [realtimeChannel, setRealtimeChannel] = useState<RealtimeChannel | null>(null);

  const refreshProjects = useCallback(async () => {
    if (!user) {
      setProjects([]);
      return;
    }

    try {
      const userTeams = await supabase
        .from('team_members')
        .select('team_id')
        .eq('user_id', user.id);

      if (userTeams.error) throw userTeams.error;

      const teamIds = userTeams.data.map(tm => tm.team_id);
      
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .in('team_id', teamIds)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (err) {
      console.error('Error refreshing projects:', err);
      setError(err instanceof Error ? err.message : 'Failed to refresh projects');
    }
  }, [user]);

  // 실시간 구독 설정
  useEffect(() => {
    if (!user) return;

    // 이전 구독 정리
    if (realtimeChannel) {
      realtimeChannel.unsubscribe();
    }

    // 새로운 실시간 구독 설정
    const channel = supabase
      .channel('projects_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'projects'
        },
        async (payload) => {
          console.log('Realtime update received:', payload);
          await refreshProjects();
        }
      )
      .subscribe((status) => {
        console.log('Realtime subscription status:', status);
      });

    setRealtimeChannel(channel);

    return () => {
      channel.unsubscribe();
    };
  }, [user, refreshProjects]);

  // 초기 데이터 로드
  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        await projectService.initializeCache();
        await refreshProjects();
      } catch (err) {
        console.error('Error initializing projects:', err);
        setError(err instanceof Error ? err.message : 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, [user, refreshProjects]);

  const createProject = async (data: Omit<Project, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const newProject = await projectService.createProject(data);
      await refreshProjects();
      return newProject;
    } catch (err) {
      console.error('Error creating project:', err);
      throw err;
    }
  };

  const updateProject = async (id: string, data: Partial<Project>) => {
    try {
      const updatedProject = await projectService.updateProject(id, data);
      await refreshProjects();
      return updatedProject;
    } catch (err) {
      console.error('Error updating project:', err);
      throw err;
    }
  };

  const deleteProject = async (id: string) => {
    try {
      await projectService.deleteProject(id);
      await refreshProjects();
    } catch (err) {
      console.error('Error deleting project:', err);
      throw err;
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        error,
        createProject,
        updateProject,
        deleteProject,
        refreshProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}; 