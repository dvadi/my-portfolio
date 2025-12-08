// app/components/ProjectCard.tsx
import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group">
      <div className="h-48 bg-gray-50 border-b border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 transition-colors">
        <Code size={40} className="text-gray-300 group-hover:text-blue-400" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string) => (
            <span key={tech} className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-100">
              {tech}
            </span>
          ))}
        </div>

        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
        >
          View Project <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;