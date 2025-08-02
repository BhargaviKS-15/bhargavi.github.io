import React, { useEffect } from "react";
import { projectsContent } from "@/content/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: number | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, projectId }) => {
  const projectData = projectId 
    ? projectsContent.projects.find(project => project.id === projectId)
    : null;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !projectData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-background rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">{projectData.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6 space-y-6">
            {/* Subtitle */}
            <p className="text-lg text-text-subtle">{projectData.subtitle}</p>
            {/* Company and Location */}
            {projectData.company && (
              <div className="space-y-2">
                <p className="text-base italic text-text-subtle">
                  {projectData.company}
                </p>
                <p className="text-sm italic text-text-subtle">
                  {projectData.location}
                </p>
              </div>
            )}

            {/* Project Image */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={projectData.image || "/images/placeholder.jpg"} 
                alt={projectData.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Description</h2>
              <p className="text-foreground leading-relaxed text-base sm:text-lg text-justify">
                {projectData.description}
              </p>
            </div>

            {/* Additional Details Section */}
            <div className="space-y-4 pt-6 border-t border-border">
              <h2 className="text-xl font-semibold text-foreground">Key Highlights</h2>
              <ul className="space-y-2 text-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Advanced research methodology using cutting-edge technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Collaborative approach with interdisciplinary teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Focus on translational research with real-world applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal; 