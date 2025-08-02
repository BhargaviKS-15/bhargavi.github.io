import React from "react";

interface NavigationProps {
  onSectionChange?: (sectionId: string) => void;
  activeSection?: string;
}

const Navigation: React.FC<NavigationProps> = ({ onSectionChange, activeSection }) => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "blog", label: "Blog" }
  ];

  const handleNavClick = (sectionId: string) => {
    if (onSectionChange) {
      onSectionChange(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-foreground">Bhargavi K S</div>
          
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section.id ? 'text-primary' : 'text-foreground'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button className="text-foreground hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;