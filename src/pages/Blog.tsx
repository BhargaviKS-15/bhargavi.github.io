import Navigation from "@/components/Navigation";
import { blogContent } from "@/content/blog";
import { useState } from "react";

const Blog = () => {
const [isExpanded, setIsExpanded] = useState(false);

const toggleExpanded = () => {
  setIsExpanded(!isExpanded);
};

return (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-12">
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
              onClick={toggleExpanded}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Read More
              <svg
                className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : ''}`}
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

            {/* Always render the div for smooth transition */}
            <div
              className={`
                transition-all duration-500 ease-in-out overflow-hidden
                ${isExpanded ? "max-h-[500px] opacity-100 pt-4 border-t border-border" : "max-h-0 opacity-0"}
                space-y-4
              `}
              style={{ pointerEvents: isExpanded ? "auto" : "none" }}
            >
              {/* Always render content for smooth closing */}
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

        {/* Quote Section - Below the accordion */}
        <div className="bg-card border border-border rounded-lg p-8 space-y-6 text-center">
          <p className="text-text-subtle text-base sm:text-lg">
            {blogContent.quoteSection.preamble}
          </p>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-quote text-foreground leading-relaxed italic">
            {blogContent.quoteSection.quote}
          </blockquote>

          <p className="text-text-subtle text-base sm:text-lg font-medium">
            {blogContent.quoteSection.author}
          </p>

          <p className="text-text-subtle text-base sm:text-lg">
            {blogContent.quoteSection.closing}
          </p>
        </div>
      </div>
    </main>
  </div>
);
};

export default Blog;