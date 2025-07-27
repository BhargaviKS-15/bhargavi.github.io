import Navigation from "@/components/Navigation";

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
               Hey Frans! My name is Bhargavi Srinath MPH student  at {" "}
                <em className="text-foreground">Icahn School of Medicine</em>, now working full-time at{" "}
                <a
                  href="https://www.svenssonlabstanford.org/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stanford University
                </a>
                , where I study how the brain regulates whole-body physiology, especially metabolism and appetite. I work at the interface of stem cell biology, neurobiology, and metabolic disease, using both experimental and computational approaches to understand how disrupted molecular signaling can lead to conditions like fatty liver disease, obesity, or neurodevelopmental disorders.
              </p>

              <p className="text-foreground leading-relaxed text-base sm:text-lg">
                My research blends CRISPR-based gene editing, iPSC-derived organoid models, transcriptomics, and machine learning. I've built analysis pipelines for large-scale single-cell and spatial transcriptomic data, and I use these tools to dissect cellular heterogeneity, model disease progression, and identify new therapeutic targets.
              </p>

              <p className="text-foreground leading-relaxed text-base sm:text-lg">
                You might've come across my{" "}
                <a
                  href="https://github.com/ramyalnp"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                where I share code for data-driven biology, or my{" "}
                <a
                  href="https://www.linkedin.com/in/ramya0001/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                . If not—feel free to check them out!
              </p>

              <p className="text-foreground leading-relaxed text-base sm:text-lg">
                Beyond the lab, I'm passionate about science that translates—whether that's exploring regulatory frameworks for emerging biotechnologies, drug discovery or surgical robots, I'm always open to teaming up on new ideas, writing, or research. Reach me at{" "}
                <a
                  href="mailto:rl001@stanford.edu"
                  className="text-primary hover:underline"
                >
                  rl001@stanford.edu
                </a>{" "}
                if you're curious to collaborate.
              </p>

              <div className="mt-8">
                <p className="text-foreground font-medium mb-4 text-base sm:text-lg">Right now, I'm especially excited by:</p>
                <ul className="space-y-2 text-foreground text-base sm:text-lg">
                  <li>• Generative models to simulate cell state transitions and perturbations</li>
                  <li>• Building reproducible pipelines for single-cell and spatial -omics data</li>
                  <li>• Using stem cell and in-vivo models to study disease mechanisms</li>
                  <li>• Modeling protein structure and dynamics to understand cellular signaling</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Profile Image - Right side on desktop */}
          <div className="flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0">
            <div className="w-48 h-60 sm:w-56 sm:h-70 lg:w-64 lg:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-primary/60 text-4xl sm:text-5xl lg:text-6xl">👩‍🔬</div>
            </div>
            <p className="text-center text-text-subtle mt-4 text-sm">San Francisco, CA</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
