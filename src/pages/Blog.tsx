import Navigation from "@/components/Navigation";
import { blogContent } from "@/content/blog";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        <h1 className="text-4xl font-light text-foreground mb-8">{blogContent.title}</h1>
        <p className="text-text-subtle text-lg">{blogContent.subtitle}</p>
      </main>
    </div>
  );
};

export default Blog;