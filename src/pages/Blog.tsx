import Navigation from "@/components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <h1 className="text-4xl font-light text-foreground mb-8">Blog</h1>
        <p className="text-text-subtle text-lg">Coming soon...</p>
      </main>
    </div>
  );
};

export default Blog;