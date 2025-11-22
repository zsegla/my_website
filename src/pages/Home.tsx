import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Avatar from "../components/Avatar";
import profileSrc from "../images/profile1.jpg";

type Page = "home" | "about" | "work" | "projects" | "blogs" | "gallery";

export default function Home({
  onNavigate,
}: {
  onNavigate: (page: Page) => void;
}) {
  return (
    <div className="min-h-[80vh] flex items-start justify-center hero-colorful">
      <div className="text-center max-w-4xl mx-auto space-y-6 animate-entrance-right staggered-right pt-6">
        {/* Herald button (links to work) */}
        <div className="flex justify-center mt-6 md:mt-8">
          <button
            onClick={() => onNavigate("work")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border bg-gradient-to-r from-sky-50/80 via-white/80 to-sky-100/80 border-sky-200 text-sm font-mono hover:scale-105 transition-all duration-200 dark:bg-gradient-to-r dark:from-sky-900/60 dark:via-indigo-900/40 dark:to-gray-800/60 dark:border-gray-700"
          >
            herald | Featured work
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-mono max-w-2xl mx-auto">
          Crafting Systems, Building Software
        </h1>

        {/* Intro Paragraph */}
        <p className="text-xl md:text-2xl opacity-70 max-w-3xl mx-auto leading-relaxed font-mono">
          Creative developer crafting digital experiences with passion and
          precision | Specializing in full-stack web development, system design,
          and cloud solutions | Let's build something amazing together!
        </p>

        {/* About button with tiny profile that reveals '>' on hover */}
        <div className="flex justify-center mb-3">
          <button
            onClick={() => onNavigate("about")}
            className="group transition-all duration-200 ease-out flex items-center gap-3 h-10 pl-3 pr-4 rounded-full bg-transparent border-2 border-sky-200/60 dark:border-sky-800/40 font-mono text-sm hover:bg-sky-50/40 dark:hover:bg-sky-900/30 group-hover:gap-4 group-hover:pl-5 group-hover:pr-7 hover:scale-105"
            title="About - Fekre"
          >
            {/* slightly larger avatar (placeholder image) so it is visible inside button */}
            <Avatar size="sm" variant="circle" src={profileSrc} initials="F" />

            {/* label always visible (one font size smaller) */}
            <span className="whitespace-nowrap text-sm ml-2">
              About - Fekre
            </span>

            {/* chevron only appears on hover; wider angle » and slight translate */}
            <span className="ml-1 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200 text-lg">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        <hr className="mt-10 mb-6 border-sky-200/60 dark:border-sky-800/40" />
      </div>
    </div>
  );
}
