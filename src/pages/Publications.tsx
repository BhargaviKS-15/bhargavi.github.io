import Navigation from "@/components/Navigation";

const Publications = () => {
  const publications = [
    {
      id: 1,
      authors: "Reghupaty, S. C., Coassolo, L., Zhao, M., Narasimhan, R. L., Patel, A., Lone, J., ... & Svensson, K. J.",
      year: "2025",
      title: "Genetic depletion of adipose-derived Isthmin-1 causes hepatic steatosis.",
      journal: "Molecular Metabolism",
      volume: "10217"
    },
    {
      id: 2,
      authors: "Irwin, C., Lakshminarasimhan, R. L.,...& Singh, Karun",
      year: "2024",
      title: "Investigating altered somatosensory function in a peripheral nervous system organoid model of autism spectrum disorder.",
      journal: "(Under review)"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <h1 className="text-4xl font-light text-foreground mb-12">Publications</h1>
        
        <div className="space-y-8">
          {publications.map((pub) => (
            <div key={pub.id} className="flex gap-4">
              <div className="text-lg font-medium text-foreground min-w-[2rem]">
                {pub.id}.
              </div>
              <div className="flex-1">
                <p className="text-foreground leading-relaxed">
                  {pub.authors} ({pub.year}). {pub.title}{" "}
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