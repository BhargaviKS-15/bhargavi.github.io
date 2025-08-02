import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { homeContent } from "@/content/index";
import { projectsContent } from "@/content/projects";
import { publicationsContent } from "@/content/publications";
import { blogContent } from "@/content/blog";
import ProjectModal from "@/components/ProjectModal";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  // Function to render text with bold formatting
  const renderFormattedText = (text: string) => {
    return text.split('**').map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  // Function to truncate text
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  const handleProjectClick = (id: number) => {
    setActiveProjectId(id);
    setModalOpen(true);
  };

  const handleBackClick = () => {
    setActiveProjectId(null);
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveProjectId(null);
  };

  const selectedProjectData = activeProjectId 
    ? projectsContent.projects.find(project => project.id === activeProjectId)
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSectionChange={scrollToSection} activeSection={activeSection} />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Content - Left side on desktop */}
            <div className="flex-1 order-2 lg:order-1 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed text-base sm:text-lg text-justify">
                  {renderFormattedText(homeContent.introduction.greeting)}{" "}
                  <em className="text-foreground">{homeContent.introduction.university}</em>, {homeContent.introduction.currentWork}{" "}
                  <a
                    href={homeContent.introduction.stanfordLink}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {homeContent.introduction.stanfordText}
                  </a>
                  , {homeContent.introduction.researchDescription}
                </p>

                <p className="text-foreground leading-relaxed text-base sm:text-lg text-justify">
                  {homeContent.researchApproach.description}
                </p>

                <p className="text-foreground leading-relaxed text-base sm:text-lg text-justify">
                  {homeContent.socialLinks.githubText}{" "}
                  <a
                    href={homeContent.socialLinks.githubLink}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {homeContent.socialLinks.githubLabel}
                  </a>{" "}
                  {homeContent.socialLinks.githubDescription}{" "}
                  <a
                    href={homeContent.socialLinks.linkedinLink}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {homeContent.socialLinks.linkedinLabel}
                  </a>
                  {homeContent.socialLinks.linkedinDescription}
                </p>

                <p className="text-foreground leading-relaxed text-base sm:text-lg text-justify">
                  {homeContent.collaboration.description}{" "}
                  <a
                    href={homeContent.collaboration.emailLink}
                    className="text-primary hover:underline"
                  >
                    {homeContent.collaboration.email}
                  </a>{" "}
                  {homeContent.collaboration.closing}
                </p>

                <div className="mt-8">
                  <p className="text-foreground font-medium mb-4 text-base sm:text-lg">{homeContent.interests.title}</p>
                  <ul className="space-y-2 text-foreground text-base sm:text-lg">
                    {homeContent.interests.items.map((item, index) => (
                      <li key={index}>• {renderFormattedText(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Profile Image - Right side on desktop */}
            <div className="flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0">
              <div className="w-48 h-60 sm:w-56 sm:h-70 lg:w-64 lg:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/bioinformatics-dna.jpg" 
                  alt="Bioinformatics and DNA visualization" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-text-subtle mt-4 text-sm">{homeContent.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center bg-gradient-to-r from-background to-card/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="mb-12">
            <h1 className="text-4xl font-light text-foreground mb-4">{projectsContent.title}</h1>
            <p className="text-text-subtle text-lg">{projectsContent.subtitle}</p>
          </div>
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
          {/* Modal */}
          <ProjectModal
            isOpen={modalOpen}
            onClose={handleCloseModal}
            projectId={activeProjectId}
          />
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 animate-slide-in-right">
          <h1 className="text-4xl font-light text-foreground mb-12">{publicationsContent.title}</h1>
          
          <div className="space-y-8">
            {publicationsContent.publications.map((pub, index) => (
              <div key={pub.id} className="flex gap-4 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-lg font-medium text-foreground min-w-[2rem]">
                  {pub.id}.
                </div>
                <div className="flex-1">
                  <p className="text-foreground leading-relaxed">
                    {pub.authors} ({pub.year}).{" "}
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}{" "}
                    <em className="text-foreground">{pub.journal}</em>
                    {pub.volume && (
                      <span className="text-foreground">, {pub.volume}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center bg-gradient-to-r from-card/20 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 animate-slide-in-left">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-light text-foreground">{blogContent.title}</h1>
              <h2 className="text-2xl font-medium text-foreground">{blogContent.subtitle}</h2>
              <p className="text-text-subtle text-lg">{blogContent.announcement}</p>
              <p className="text-text-subtle text-sm">{blogContent.date}</p>
            </div>

            {/* Blog Content */}
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              {/* Main content - always visible */}
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed text-base sm:text-lg text-justify">
                  {blogContent.mainContent.intro}
                </p>
                <p className="text-foreground leading-relaxed text-base sm:text-lg text-justify">
                  {blogContent.mainContent.description}
                </p>
              </div>

              {/* Expandable content with smooth transition */}
              <div className="space-y-4">
                <button
                  onClick={() => setActiveSection('blog-expanded')}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Read More
                  <svg
                    className="w-4 h-4 transition-transform duration-300 ease-in-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="text-lg font-medium text-foreground">
                    {blogContent.personalDetails.title}
                  </h3>
                  <ul className="space-y-3">
                    {blogContent.personalDetails.items.map((item, index) => (
                      <li key={index} className="text-foreground leading-relaxed text-base sm:text-lg text-justify">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-card border border-border rounded-lg p-8 space-y-6 text-center">
              <p className="text-text-subtle text-base sm:text-lg">
                {blogContent.quoteSection.preamble}
              </p>
              
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-quote text-foreground leading-relaxed italic">
                "{blogContent.quoteSection.quote}"
              </blockquote>
              
              <p className="text-text-subtle text-base sm:text-lg font-medium">
                {blogContent.quoteSection.author}
              </p>
              
              <p className="text-text-subtle text-base sm:text-lg">
                {blogContent.quoteSection.closing}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 