import Navigation from "@/components/Navigation";
import { publicationsContent } from "@/content/publications";

const Publications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <h1 className="text-4xl font-light text-foreground mb-12">{publicationsContent.title}</h1>
        
        <div className="space-y-8">
          {publicationsContent.publications.map((pub) => (
            <div key={pub.id} className="flex gap-4">
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
      </main>
    </div>
  );
};

export default Publications;