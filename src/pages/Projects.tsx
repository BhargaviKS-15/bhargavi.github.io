import Navigation from "@/components/Navigation";
import { useState } from "react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "METABOLIC REGULATION",
      subtitle: "Understanding the human secretome for potential drug targets to treat metabolic dysfunctions",
      description: "Research focused on identifying key secreted factors that regulate metabolism and could serve as therapeutic targets for metabolic diseases including diabetes, obesity, and fatty liver disease.",
      image: "/lovable-uploads/metabolic-regulation.jpg"
    },
    {
      id: 2,
      title: "AUTISM SPECTRUM DISORDERS",
      subtitle: "Investigating altered neural development using organoid models",
      description: "Using iPSC-derived organoid models to study altered somatosensory function and neural development in autism spectrum disorders, with focus on peripheral nervous system manifestations.",
      image: "/lovable-uploads/autism-spectrum.jpg"
    },
    {
      id: 3,
      title: "ATTR-CM",
      subtitle: "Uncovering the role of the extracellular matrix in the occurrence of Amyloid Transthyretin Cardiomyopathy",
      description: "Investigating how extracellular matrix changes contribute to cardiac dysfunction in ATTR-CM, using both computational and experimental approaches to understand disease progression.",
      image: "/lovable-uploads/attr-cm.jpg"
    }
  ];

  const toggleProject = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="text-4xl font-light text-foreground mb-4">Projects</h1>
          <p className="text-text-subtle text-lg">A growing collection of my blood sweat and tears ;)</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 pt-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-project-card border border-border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:bg-project-card-hover hover:shadow-lg ${
                  expandedProject === project.id ? 'md:col-span-2 xl:col-span-3' : ''
                }`}
                onClick={() => toggleProject(project.id)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-primary/60 text-6xl">🔬</div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-text-subtle text-sm mb-4 leading-relaxed">
                    {project.subtitle}
                  </p>
                  
                  {expandedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;