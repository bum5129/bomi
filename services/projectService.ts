import { supabase } from '../utils/supabase';
import { Database } from '../types/supabase';

type Project = Database['public']['Tables']['projects']['Row'];
type ProjectInsert = Database['public']['Tables']['projects']['Insert'];
type ProjectUpdate = Database['public']['Tables']['projects']['Update'];

// 메모리 캐시
let projectsCache: Project[] = [];
let subscriptionInitialized = false;

const initializeRealtimeSubscription = () => {
  if (subscriptionInitialized) return;

  const channel = supabase
    .channel('projects_db_changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'projects'
      },
      async (payload) => {
        // 변경사항에 따라 캐시 업데이트
        switch (payload.eventType) {
          case 'INSERT':
            projectsCache = [...projectsCache, payload.new as Project];
            break;
          case 'UPDATE':
            projectsCache = projectsCache.map(project =>
              project.id === payload.new.id ? { ...project, ...payload.new } : project
            );
            break;
          case 'DELETE':
            projectsCache = projectsCache.filter(project => project.id !== payload.old.id);
            break;
        }
      }
    )
    .subscribe();

  subscriptionInitialized = true;
};

export const projectService = {
  async createProject(projectData: ProjectInsert, userId: string) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert({ ...projectData, owner_id: userId })
        .select()
        .single();

      if (error) throw error;

      // 캐시 업데이트
      if (data) {
        projectsCache = [...projectsCache, data];
      }

      return data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  },

  async updateProject(id: string, projectData: ProjectUpdate) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update(projectData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      // 캐시 업데이트
      if (data) {
        projectsCache = projectsCache.map(project =>
          project.id === id ? { ...project, ...data } : project
        );
      }

      return data;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  },

  async deleteProject(id: string) {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // 캐시 업데이트
      projectsCache = projectsCache.filter(project => project.id !== id);
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  },

  async getProjectById(id: string) {
    try {
      // 먼저 캐시에서 확인
      const cachedProject = projectsCache.find(project => project.id === id);
      if (cachedProject) return cachedProject;

      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          teams (
            *,
            team_members (
              *,
              users (*)
            )
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;

      // 캐시 업데이트
      if (data) {
        const projectIndex = projectsCache.findIndex(p => p.id === id);
        if (projectIndex === -1) {
          projectsCache = [...projectsCache, data];
        } else {
          projectsCache[projectIndex] = data;
        }
      }

      return data;
    } catch (error) {
      console.error('Error fetching project:', error);
      throw error;
    }
  },

  async getTeamProjects(teamId: string) {
    try {
      // 먼저 캐시에서 팀의 프로젝트들을 찾음
      const cachedTeamProjects = projectsCache.filter(project => project.team_id === teamId);
      
      // 캐시가 비어있는 경우에만 DB에서 로드
      if (cachedTeamProjects.length === 0) {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('team_id', teamId)
          .order('created_at', { ascending: false });

        if (error) throw error;

        // 캐시 업데이트
        if (data) {
          projectsCache = [...projectsCache, ...data];
          return data;
        }
      }

      return cachedTeamProjects;
    } catch (error) {
      console.error('Error fetching team projects:', error);
      throw error;
    }
  },

  // 캐시 초기화 (앱 시작 시 호출)
  async initializeCache() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      projectsCache = data || [];
      initializeRealtimeSubscription();
    } catch (error) {
      console.error('Error initializing cache:', error);
      throw error;
    }
  },

  async updateProjectStatus(id: string, status: Project['status']) {
    const { data, error } = await supabase
      .from('projects')
      .update({ status })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
}; 