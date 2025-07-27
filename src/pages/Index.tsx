import Navigation from "@/components/Navigation";
import { homeContent } from "@/content/index";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Content - Left side on desktop */}
          <div className="flex-1 order-2 lg:order-1 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed text-base sm:text-lg">
                {homeContent.introduction.greeting}{" "}
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

              <p className="text-foreground leading-relaxed text-base sm:text-lg">
                {homeContent.researchApproach.description}
              </p>

              <p className="text-foreground leading-relaxed text-base sm:text-lg">
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

              <p className="text-foreground leading-relaxed text-base sm:text-lg">
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
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Profile Image - Right side on desktop */}
          <div className="flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0">
            <div className="w-48 h-60 sm:w-56 sm:h-70 lg:w-64 lg:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-primary/60 text-4xl sm:text-5xl lg:text-6xl">👩‍🔬</div>
            </div>
            <p className="text-center text-text-subtle mt-4 text-sm">{homeContent.location}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
