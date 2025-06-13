import React, { useEffect } from 'react';
import { useProjects } from '../contexts/ProjectContext';
import { Database } from '../types/supabase';

type Project = Database['public']['Tables']['projects']['Row'];

export const ProjectList: React.FC = () => {
  const { projects, loading, error, refreshProjects } = useProjects();

  useEffect(() => {
    // 컴포넌트 마운트 시 프로젝트 목록 새로고침
    refreshProjects();
  }, [refreshProjects]);

  if (loading) {
    return <div>프로젝트 목록을 불러오는 중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error}</div>;
  }

  if (!projects.length) {
    return <div>등록된 프로젝트가 없습니다.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          생성일: {new Date(project.created_at).toLocaleDateString()}
        </span>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {/* 프로젝트 상세 페이지로 이동 */}}
        >
          상세보기
        </button>
      </div>
    </div>
  );
}; 