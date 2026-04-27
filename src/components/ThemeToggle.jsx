import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ isMobile = false }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  if (isMobile) {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          "flex items-center gap-2 w-full px-4 py-3 text-left text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors duration-300 rounded-md"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-yellow-300" />
        ) : (
          <Moon className="h-5 w-5 text-blue-900" />
        )}
        <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "bg-background/80 backdrop-blur-md border border-border/50 shadow-lg",
        "hover:bg-primary/10 hover:border-primary/50",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        "sm:bottom-5 sm:right-5"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
