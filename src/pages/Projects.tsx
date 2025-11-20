import { Github, ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing creative work with smooth animations and modern design principles.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with multiple rooms, file sharing, and emoji reactions built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop",
    technologies: ["React", "Socket.io", "Express"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, comment system, and admin dashboard for content management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7d3?w=400&h=250&fit=crop",
    technologies: ["React", "GraphQL", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: false
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-mono">Projects</h1>
        <p className="text-xl opacity-70 font-mono">
          A collection of my recent work and side projects
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-8">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <h2 className="text-2xl font-semibold font-mono">Featured Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-mono">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <p className="opacity-80 text-sm leading-relaxed font-mono">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 opacity-80 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold font-mono">Other Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-mono">
                    {project.title}
                  </h3>
                  <div className="flex gap-1">
                    <a
                      href={project.github}
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                
                <p className="opacity-80 text-sm leading-relaxed font-mono">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 opacity-80 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
