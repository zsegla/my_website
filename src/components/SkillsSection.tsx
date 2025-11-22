import React from "react";
import {
  Code,
  Server,
  Smartphone,
  Cloud,
  Github,
  Terminal,
} from "lucide-react";

type Tech = {
  name: string;
  icon?: React.ReactNode;
};

const categories: { title: string; desc: string; techs: Tech[] }[] = [
  {
    title: "Frontend",
    desc: "Built scalable, responsive front-end interfaces with React and modern UI toolchains, focusing on accessibility and performance.",
    techs: [
      { name: "React", icon: <Code className="w-4 h-4" /> },
      { name: "Next.js", icon: <Code className="w-4 h-4" /> },
      { name: "TypeScript", icon: <Code className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <Code className="w-4 h-4" /> },
      { name: "Figma", icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: "Backend / Python",
    desc: "Experience designing and maintaining backend services and APIs in Python and Node.js, with emphasis on reliability and testing.",
    techs: [
      { name: "Python", icon: <Server className="w-4 h-4" /> },
      { name: "Django / Flask", icon: <Server className="w-4 h-4" /> },
      { name: "Node.js", icon: <Server className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <Server className="w-4 h-4" /> },
      { name: "MongoDB", icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    title: "Web & Mobile",
    desc: "Cross-platform apps using React Native, Flutter and PWA strategies to deliver performant experiences across devices.",
    techs: [
      { name: "React Native", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Flutter", icon: <Smartphone className="w-4 h-4" /> },
      { name: "PWA", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Responsive Design", icon: <Smartphone className="w-4 h-4" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    desc: "CI/CD, containerization, and cloud deployments to ensure reliable delivery and observable systems.",
    techs: [
      { name: "Docker", icon: <Cloud className="w-4 h-4" /> },
      { name: "Kubernetes", icon: <Cloud className="w-4 h-4" /> },
      { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
      { name: "Git", icon: <Github className="w-4 h-4" /> },
      { name: "CI/CD", icon: <Terminal className="w-4 h-4" /> },
    ],
  },
];

function getAccentClasses(title: string) {
  if (title.includes("Frontend")) return "from-indigo-400 to-pink-500";
  if (title.includes("Backend")) return "from-emerald-400 to-teal-500";
  if (title.includes("Web")) return "from-violet-400 to-pink-500";
  return "from-amber-400 to-pink-500";
}

function getOverlayClasses(title: string) {
  if (title.includes("Frontend")) return "from-sky-50 to-pink-50";
  if (title.includes("Backend")) return "from-emerald-50 to-teal-50";
  if (title.includes("Web")) return "from-violet-50 to-rose-50";
  return "from-amber-50 to-rose-50";
}

function getOverlayDarkClasses(title: string) {
  if (title.includes("Frontend"))
    return "dark:group-hover:from-indigo-900/30 dark:group-hover:via-purple-900/20 dark:group-hover:to-transparent";
  if (title.includes("Backend"))
    return "dark:group-hover:from-emerald-900/30 dark:group-hover:via-teal-900/20 dark:group-hover:to-transparent";
  if (title.includes("Web"))
    return "dark:group-hover:from-violet-900/30 dark:group-hover:via-pink-900/20 dark:group-hover:to-transparent";
  return "dark:group-hover:from-amber-900/30 dark:group-hover:via-rose-900/20 dark:group-hover:to-transparent";
}

function getHeadingColor(title: string) {
  if (title.includes("Frontend"))
    return "text-indigo-600 dark:text-indigo-300 group-hover:text-indigo-800 dark:group-hover:text-indigo-100";
  if (title.includes("Backend"))
    return "text-emerald-600 dark:text-emerald-300 group-hover:text-emerald-800 dark:group-hover:text-emerald-100";
  if (title.includes("Web"))
    return "text-violet-600 dark:text-violet-300 group-hover:text-violet-800 dark:group-hover:text-violet-100";
  return "text-amber-600 dark:text-amber-300 group-hover:text-amber-800 dark:group-hover:text-amber-100";
}

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <li>
      <div
        className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-mono
        bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700
        text-gray-800 dark:text-gray-100 shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/30
        group-hover:bg-white/80 dark:group-hover:bg-gray-700/50 group-hover:text-gray-900 dark:group-hover:text-white"
        tabIndex={0}
        aria-label={tech.name}
      >
        {tech.icon ? (
          <span className="text-gray-600 dark:text-gray-200">{tech.icon}</span>
        ) : null}
        <span className="font-semibold text-xs">{tech.name}</span>
      </div>
    </li>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold font-mono">Skills & Technologies</h2>
        <p className="text-lg opacity-70 font-mono">
          Organized by category with short descriptions and interactive badges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 transform shadow-sm scale-[1.01] hover:scale-[1.02] hover:shadow-2xl bg-transparent`}
          >
            {/* left accent bar */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${getAccentClasses(cat.title)} opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
            />

            {/* subtle backdrop overlay default -> intensifies on hover; dark-mode hover gradients added for contrast */}
            <div
              className={`absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 group-hover:opacity-90 dark:group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-br ${getOverlayClasses(cat.title)} ${getOverlayDarkClasses(cat.title)}`}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h3
                    className={`text-xl font-semibold font-mono ${getHeadingColor(cat.title)}`}
                  >
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm opacity-80 font-mono">
                    {cat.desc}
                  </p>
                </div>
              </div>

              <ul
                className="mt-4 flex flex-wrap gap-3"
                aria-label={`${cat.title} technologies`}
              >
                {cat.techs.map((tech) => (
                  <TechBadge key={tech.name} tech={tech} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
