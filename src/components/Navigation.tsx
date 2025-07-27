import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "About", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Publications", path: "/publications" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        <div className="text-xl font-semibold text-foreground">
          <span className="font-normal">Bhargavi</span> KS
        </div>
        
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm transition-colors hover:text-nav-active hidden sm:block",
                location.pathname === item.path
                  ? "text-nav-active font-medium"
                  : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile menu for smaller screens */}
          <div className="sm:hidden">
            <select 
              className="bg-background border border-border rounded px-2 py-1 text-sm"
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
            >
              {navItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;