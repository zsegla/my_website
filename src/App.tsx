import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";

type Page = "home" | "about" | "work" | "projects" | "blogs" | "gallery";

const pageTitles: Record<Page, string> = {
  home: "Fekre's Portfolio",
  about: "about-fekre",
  work: "Fekre's work",
  projects: "projects-fekre",
  blogs: "Fekre's blog",
  gallery: "photogallery-fekre",
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.title = pageTitles[currentPage];
  }, [currentPage]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "about":
        return <About />;
      case "work":
        return <Work />;
      case "projects":
        return <Projects />;
      case "blogs":
        return <Blogs />;
      case "gallery":
        return <Gallery />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-gray-900"
      }`}
    >
      {/* Subtle corner gradients (bottom-left & top-right) */}
      <div className="pointer-events-none fixed bottom-0 left-0 w-1/3 h-1/3 md:w-1/4 md:h-1/4 blur-3xl -z-10">
        <div className="w-full h-full bg-gradient-to-tr from-sky-200/40 to-transparent dark:from-sky-800/30 dark:to-transparent" />
      </div>
      <div className="pointer-events-none fixed top-0 right-0 w-1/3 h-1/3 md:w-1/4 md:h-1/4 blur-3xl -z-10">
        <div className="w-full h-full bg-gradient-to-bl from-sky-200/30 to-transparent dark:from-indigo-900/25 dark:to-transparent" />
      </div>
      {/* Light-mode top gradient overlay for more interesting header area */}
      {theme === "light" && (
        <div className="pointer-events-none fixed top-0 left-0 w-full h-64 md:h-80 -z-20">
          <div className="w-full h-full bg-gradient-to-b from-indigo-700/30 via-sky-500/18 to-transparent blur-3xl" />
        </div>
      )}
      {/* Top Left - Location */}
      <div className="fixed top-8 left-4 z-40 text-sm font-medium opacity-70 font-mono">
        Africa / Addis Ababa
      </div>

      {/* Top Right - Current Time */}
      <div className="fixed top-8 right-4 z-40 text-sm font-mono">
        {currentTime.toLocaleTimeString()}
      </div>

      {/* Sticky Navbar */}
      <Navbar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        theme={theme}
        onThemeToggle={toggleTheme}
      />

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">{renderPage()}</div>
      </main>

      {/* Footer - show site footer on all pages */}
      <Footer />

      <Toaster />
    </div>
  );
}
