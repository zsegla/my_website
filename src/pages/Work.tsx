import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Addis Ababa, ET",
    period: "2022 - Present",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    location: "Remote",
    period: "2021 - 2022",
    description: "Developed and maintained multiple client websites and web applications using modern technologies.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    link: "#"
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "Addis Ababa, ET",
    period: "2020 - 2021",
    description: "Built responsive web applications and collaborated with design teams to create exceptional user experiences.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "Firebase"],
    link: "#"
  }
];

export default function Work() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-mono">Work Experience</h1>
        <p className="text-xl opacity-70 font-mono">
          My professional journey and achievements
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-mono">
                      {exp.title}
                    </h3>
                    <p className="text-lg opacity-80 font-mono">{exp.company}</p>
                  </div>
                  <a
                    href={exp.link}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm opacity-60">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span className="font-mono">{exp.location}</span>
                  </div>
                </div>
                
                <p className="opacity-80 leading-relaxed font-mono">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 opacity-80 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="text-center space-y-6 pt-8">
        <h3 className="text-2xl font-semibold font-mono">Core Competencies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            'Frontend Development', 'React Ecosystem', 'TypeScript',
            'UI/UX Implementation', 'Team Leadership', 'Agile Methodologies',
            'Performance Optimization', 'Testing', 'CI/CD'
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 font-mono"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
