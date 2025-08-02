import React from "react";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { projectsContent } from "@/content/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = selectedProject 
    ? projectsContent.projects.find(project => project.id === selectedProject)
    : null;

  // Function to truncate text
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {selectedProject ? (
          // Individual Project View
          <div className="space-y-6">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </button>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="space-y-6">
                {/* Project Header */}
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-foreground">
                    {selectedProjectData?.title}
                  </h1>
                  <p className="text-lg text-text-subtle">
                    {selectedProjectData?.subtitle}
                  </p>
                  {selectedProjectData?.company && (
                    <div className="space-y-2">
                      <p className="text-base text-text-subtle">
                        {selectedProjectData?.company}
                      </p>
                      <p className="text-sm text-text-subtle">
                        {selectedProjectData?.location}
                      </p>
                    </div>
                  )}
                </div>

                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedProjectData?.image || "/images/placeholder.jpg"} 
                    alt={selectedProjectData?.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Description */}
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Description</h2>
                  <p className="text-foreground leading-relaxed text-base sm:text-lg text-justify">
                    {selectedProjectData?.description}
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
        ) : (
          // Projects List View
          <div>
            <div className="mb-12">
              <h1 className="text-4xl font-light text-foreground mb-4">{projectsContent.title}</h1>
              <p className="text-text-subtle text-lg">{projectsContent.subtitle}</p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 pt-16">
                {projectsContent.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-project-card border border-border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:bg-project-card-hover hover:shadow-lg"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                      <img 
                        src={project.image || "/images/placeholder.jpg"} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 tracking-wide">
                        {project.title}
                      </h3>
                      <p className="text-text-subtle text-sm mb-3 leading-relaxed">
                        {project.subtitle}
                      </p>
                      {project.company && (
                        <p className="text-text-subtle text-xs mb-2">
                          {project.company}
                        </p>
                      )}
                      {project.location && (
                        <p className="text-text-subtle text-xs mb-3">
                          {project.location}
                        </p>
                      )}
                      <p className="text-text-subtle text-sm mb-4 leading-relaxed">
                        {truncateText(project.description, 80)}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-primary text-sm font-medium">Click to learn more</span>
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Projects;