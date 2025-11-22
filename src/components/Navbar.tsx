import {
  Home,
  User,
  Briefcase,
  Code,
  BookOpen,
  Camera,
  Sun,
  Moon,
} from "lucide-react";

type Page = "home" | "about" | "work" | "projects" | "blogs" | "gallery";

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

const navItems = [
  { id: "about" as Page, label: "About", icon: User },
  { id: "work" as Page, label: "Work", icon: Briefcase },
  { id: "projects" as Page, label: "Projects", icon: Code },
  { id: "blogs" as Page, label: "Blogs", icon: BookOpen },
  { id: "gallery" as Page, label: "Gallery", icon: Camera },
];

export default function Navbar({
  currentPage,
  onPageChange,
  theme,
  onThemeToggle,
}: NavbarProps) {
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded-full backdrop-blur-md border transition-all duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-sky-900/60 via-indigo-900/40 to-gray-800/60 border-gray-700 nav-glow-dark"
            : "bg-gradient-to-r from-sky-50/80 via-white/80 to-sky-100/80 border-sky-200 nav-glow-light"
        }`}
      >
        {/* Home Icon */}
        <button
          onClick={() => onPageChange("home")}
          aria-label="Home"
          title="Home"
          className={`w-7 h-7 flex items-center justify-center rounded-full transition-all duration-200 ${
            currentPage === "home"
              ? theme === "dark"
                ? "bg-gray-700 text-white"
                : "bg-sky-100 text-sky-900"
              : "hover:bg-sky-100 hover:text-sky-900 dark:hover:bg-gray-700 dark:hover:text-white hover:scale-110"
          }`}
        >
          <Home size={12} />
        </button>

        {/* Vertical separator after Home */}
        <div
          className={`w-px h-6 mx-2 ${
            theme === "dark" ? "bg-sky-700/60" : "bg-sky-200"
          }`}
        />

        {/* Navigation Items */}
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex items-center gap-2 px-1.5 py-1 rounded-full transition-all duration-200 text-sm font-medium font-mono ${
                currentPage === item.id
                  ? theme === "dark"
                    ? "bg-gray-700 text-white"
                    : "bg-sky-100 text-sky-900"
                  : "hover:bg-sky-100 hover:text-sky-900 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
            >
              <Icon size={12} />
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Separator - moved before theme toggle */}
        <div
          className={`w-px h-6 mx-2 ${
            theme === "dark" ? "bg-gray-600" : "bg-gray-300"
          }`}
        />

        {/* Theme Toggle */}
        <button
          onClick={onThemeToggle}
          aria-label="Toggle theme"
          title="Toggle theme"
          className={`p-1.5 rounded-full transition-all duration-200 ${"hover:bg-sky-100 hover:text-sky-900 dark:hover:bg-gray-700 dark:hover:text-white"}`}
        >
          {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
        </button>
      </div>
    </nav>
  );
}
