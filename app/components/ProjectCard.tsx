// app/components/ProjectCard.tsx
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import Image from 'next/image'; // Optimized Next.js image component

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white group flex flex-col h-full">
      
      {/* 1. IMAGE SECTION: Renders image if available, else falls back to icon */}
      <div className="h-48 w-full relative border-b border-gray-100 bg-gray-50 group-hover:bg-blue-50 transition-colors">
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover object-top" // object-top keeps the header visible if cropped
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Code size={40} className="text-gray-300 group-hover:text-blue-400" />
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        {/* TECH PILLS */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((tech: string) => (
            <span key={tech} className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-100">
              {tech}
            </span>
          ))}
        </div>

        {/* 2. LINKS SECTION: Supports Repo, Demo, or Legacy Link */}
        <div className="flex gap-4 pt-2 border-t border-gray-100">
          
          {/* GitHub Repo Link */}
          {project.repoLink && (
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={16} className="mr-2" /> Code
            </a>
          )}

          {/* Live Demo Link */}
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={16} className="mr-2" /> Live Demo
            </a>
          )}

          {/* Fallback for older projects using just 'link' */}
          {!project.repoLink && !project.demoLink && project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
            >
              View Project <ExternalLink size={14} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;