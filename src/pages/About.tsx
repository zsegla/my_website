import { useState, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Coffee,
  Heart,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Github,
  Linkedin,
  Mail,
  Award,
  TrendingUp,
} from "lucide-react";
import Avatar from "../components/Avatar";
import SkillsSection from "../components/SkillsSection";
import profileSrc from "../images/profile1.jpg";

const experiences = [
  {
    title: "Backend Lead",
    company: "Africa to Silicon Valley",
    location: "Addis Ababa, ET",
    period: "Feb,2024 - Present",
    description:
      "Leading backend development for enterprise applications, mentoring junior developers, designing scalable APIs, and implementing robust server-side architectures.",
    technologies: [
      "Golang",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Eskalate",
    location: "US, California",
    period: "Sep, 2023 - Mar, 2024",
    description:
      "Built and maintained scalable web and mobile applications for restaurant services, developing RESTful APIs, integrating front-end and back-end systems, and improving performance, reliability, and usability through clean architecture and modern development practices.",
    technologies: [
      "TypeScript",
      ".NET",
      "Flutter",
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
    ],
  },
  {
    title: "Head of Remote Education",
    company: "Africa to Silicon Valley",
    location: "Addis Ababa, ET",
    period: "Feb, 2024 - Jan, 2025",
    description:
      "Led remote education programs, training students in advanced data structures, algorithms, and competitive programming challenges. Mentored learners to solve complex problems and prepare for top tech opportunities.",
    technologies: [
      "Data Structures",
      "Algorithms",
      "Python",
      "C++",
      "Problem Solving",
    ],
  },
  {
    title: "Python Developer",
    company: "Lian Technologies",
    location: "Addis Ababa, ET",
    period: "Feb, 2024 - Jan, 2025",
    description:
      "Led remote education programs, training students in advanced data structures, algorithms, and competitive programming challenges. Mentored learners to solve complex problems and prepare for top tech opportunities.",
    technologies: [
      "Data Structures",
      "Algorithms",
      "Python",
      "C++",
      "Problem Solving",
    ],
  },
];

const studies = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Addis Ababa University",
    period: "2019 - 2024",
    description:
      "Studied core computer engineering topics, including digital systems, embedded systems, algorithms, and data structures, graduating with honors.",
  },
  {
    degree: "Software Engineering Bootcamp",
    institution: "Africa to Silicon Valley Coding Academy",
    period: "2023 - 2024",
    description:
      "Completed an intensive 2-year program: the first year focused on advanced data structures and algorithms, and the second year on full-stack development, covering both frontend and backend technologies.",
  },
  {
    degree: "Fullstack Development",
    institution: "ALX",
    period: "Jun 2025 - Nov 2025",
    description:
      "Completed ALX Fullstack Development program covering Frontend Pro and Backend tracks — built full-stack applications, worked with modern frontend frameworks and backend services, and deployed production-ready projects.",
  },
];

export default function About() {
  const [activeSection, setActiveSection] = useState("introduction");

  const navItems = [
    { id: "introduction", label: "Introduction", icon: User },
    { id: "work-experience", label: "Work Experience", icon: Briefcase },
    { id: "studies", label: "Studies", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", "work-experience", "studies", "skills"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Desktop Layout */}
      <div className="hidden md:flex gap-8">
        {/* Left Mini Navbar - Desktop Only */}
        <div className="w-40 flex-shrink-0">
          <div className="fixed left-2 top-1/2 transform -translate-y-1/2 z-30">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 text-left ${
                      activeSection === item.id
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent"
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium font-mono">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Right Content Area - Desktop */}
        <div className="flex-1 min-w-0">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Introduction Section */}
            <section id="introduction" className="space-y-12">
              <div className="grid md:[grid-template-columns:180px_1fr] gap-12 items-center">
                <div className="space-y-6">
                  <div className="mx-auto md:mx-0">
                    <div className="sticky top-28 flex flex-col items-center">
                      <Avatar
                        size="lg"
                        variant="circle"
                        src={profileSrc}
                        initials="F"
                      />
                      <div className="mt-3 text-center w-full">
                        <div className="font-semibold font-mono">
                          Fekreselassie Mulu
                        </div>
                        <div className="text-sm opacity-70 font-mono text-center">
                          Software Engineer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-bold font-mono">
                    zsegla
                  </h1>
                  <h3 className="text-xl opacity-70 font-mono">
                    Software Engineer | Python Developer
                  </h3>

                  {/* Contact links: GitHub, LinkedIn, Email (pill style like footer) */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    {/* GitHub */}
                    <a
                      href="https://github.com/zsegla"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto group"
                      aria-label="GitHub"
                    >
                      <div
                        className="inline-flex items-center gap-3 rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 
      transition-all duration-300 bg-transparent
      group-hover:bg-black group-hover:text-white 
      group-hover:shadow-[0_0_12px_2px_rgba(0,0,0,0.4)]
    "
                      >
                        <Github
                          size={18}
                          className="transition-all duration-300 group-hover:text-white"
                        />
                        <span className="text-sm font-mono">GitHub</span>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/in/fekreselassie-mulu-freelancer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto group"
                      aria-label="LinkedIn"
                    >
                      <div
                        className="inline-flex items-center gap-3 rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 
      transition-all duration-300 bg-transparent
      group-hover:bg-[#0A66C2] group-hover:text-white 
      group-hover:shadow-[0_0_14px_3px_rgba(10,102,194,0.5)]
    "
                      >
                        <Linkedin
                          size={18}
                          className="transition-all duration-300 group-hover:text-white"
                        />
                        <span className="text-sm font-mono">LinkedIn</span>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:fekruson@gmail.com"
                      className="w-full sm:w-auto group"
                      aria-label="Email"
                    >
                      <div
                        className="inline-flex items-center gap-3 rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 
      transition-all duration-300 bg-transparent
      group-hover:bg-red-500 group-hover:text-white 
      group-hover:shadow-[0_0_14px_3px_rgba(239,68,68,0.5)]
    "
                      >
                        <Mail
                          size={18}
                          className="transition-all duration-300 group-hover:text-white"
                        />
                        <span className="text-sm font-mono">Email</span>
                      </div>
                    </a>
                  </div>

                  <p className="text-lg leading-relaxed opacity-80 font-mono">
                    A creative developer based in Addis Ababa, Ethiopia,
                    specializing in modern web apps with clean, maintainable
                    code. I’ve worked across backend, DevOps, and mobile,
                    leading teams on Golang and Python projects. Outside of
                    work, I enjoy solving algorithm challenges and playing
                    football.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="opacity-60" />
                      <span className="font-mono">Addis Ababa, Ethiopia</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="opacity-60" />
                      <span className="font-mono">
                        Available for new projects
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Coffee size={18} className="opacity-60" />
                      <span className="font-mono">
                        Fueled by Ethiopian coffee
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-center font-mono">
                  What I Value
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center mt-8">
                  {/* Ignite / Passion */}
                  <div className="flex flex-col items-center space-y-3">
                    <Heart className="w-12 h-12 text-red-500 animate-pulse-slow drop-shadow-lg transition-all duration-500 group-hover:scale-110" />
                    <h4 className="font-semibold  font-mono">Passion</h4>
                    <p className="text-sm opacity-80 font-mono">
                      I love what I do and it shows in every project I work on.
                    </p>
                  </div>

                  {/* PrimeCore / Quality */}
                  <div className="flex flex-col items-center space-y-3">
                    <Award className="w-12 h-12 text-blue-500 animate-pulse-slow drop-shadow-lg transition-all duration-500 group-hover:scale-110" />
                    <h4 className="font-semibold text-xl font-mono">Quality</h4>
                    <p className="text-sm opacity-80 font-mono">
                      Attention to detail and commitment to excellence in every
                      line of code.
                    </p>
                  </div>

                  {/* Elevate / Growth */}
                  <div className="flex flex-col items-center space-y-3">
                    <TrendingUp className="w-12 h-12 text-green-500 animate-bounce-slow drop-shadow-lg transition-all duration-500 group-hover:scale-110" />
                    <h4 className="font-semibold text-xl font-mono">Growth</h4>
                    <p className="text-sm opacity-80 font-mono">
                      Continuously learning and adapting to new technologies and
                      challenges.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Work Experience Section */}
            <section id="work-experience" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold font-mono">
                  Work Experience
                </h2>
                <p className="text-lg opacity-70 font-mono">
                  My professional journey and achievements
                </p>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 transform shadow-sm scale-[1.01] hover:scale-[1.02] hover:shadow-2xl"
                  >
                    {/* left accent bar (visible by default, stronger on hover) */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-indigo-400 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* subtle colorful backdrop by default, intensifies on hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-90 transition-opacity duration-300 bg-gradient-to-br from-sky-50 to-pink-50 dark:from-transparent dark:via-transparent dark:to-transparent dark:group-hover:from-indigo-900/30 dark:group-hover:via-purple-900/20 dark:group-hover:to-transparent" />

                    <div className="relative z-10 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-300 transition-colors duration-200 font-mono group-hover:text-indigo-800 dark:group-hover:text-indigo-100">
                          {exp.title}
                        </h3>
                        <p className="text-lg opacity-80 font-mono">
                          {exp.company}
                        </p>
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
                            className="px-3 py-1 text-xs rounded-full bg-indigo-50 dark:bg-indigo-900/40 opacity-90 font-mono transition-colors duration-200 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* hover handled on the wrapper (stronger scale & shadow) */}
                  </div>
                ))}
              </div>
            </section>

            {/* Studies Section */}
            <section id="studies" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold font-mono">Education</h2>
                <p className="text-lg opacity-70 font-mono">
                  My academic background and learning journey
                </p>
              </div>

              <div className="space-y-6">
                {studies.map((study, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 transform shadow-sm scale-[1.01] hover:scale-[1.02] hover:shadow-2xl"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-amber-400 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-90 transition-opacity duration-300 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-transparent dark:via-transparent dark:to-transparent dark:group-hover:from-amber-900/30 dark:group-hover:via-rose-900/20 dark:group-hover:to-transparent" />

                    <div className="relative z-10 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-300 transition-colors duration-200 font-mono group-hover:text-amber-800 dark:group-hover:text-amber-100">
                          {study.degree}
                        </h3>
                        <p className="text-lg opacity-80 font-mono">
                          {study.institution}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-sm opacity-60">
                        <Calendar size={14} />
                        <span className="font-mono">{study.period}</span>
                      </div>

                      <p className="opacity-80 leading-relaxed text-sm font-mono">
                        {study.description}
                      </p>
                    </div>

                    {/* hover handled on the wrapper (stronger scale & shadow) */}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section (refactored) */}
            <SkillsSection />
          </div>

          {/* footer removed here to use the global site Footer component from App */}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Mobile Content - Full Width */}
        <div className="space-y-24 pb-24">
          {/* Introduction Section */}
          <section id="introduction" className="space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold font-mono">About Me</h1>
              <p className="text-lg opacity-70 font-mono">
                Passionate developer from the heart of Africa
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="relative w-48 h-48">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold font-mono">
                    F
                  </div>
                  {/* Enhanced gradient glow for mobile */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/30 via-cyan-300/20 to-purple-400/30 dark:from-blue-400/15 dark:via-cyan-300/10 dark:to-purple-400/15 rounded-full blur-2xl -z-10"></div>
                </div>
              </div>

              <div className="space-y-6 text-center">
                <h2 className="text-xl font-semibold font-mono">
                  Hello, I'm Fikre
                </h2>
                <p className="text-base leading-relaxed opacity-80 font-mono">
                  A creative developer based in Addis Ababa, Ethiopia. I
                  specialize in building modern web applications with a focus on
                  user experience and clean, maintainable code.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <MapPin size={16} className="opacity-60" />
                    <span className="font-mono text-sm">
                      Addis Ababa, Ethiopia
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Calendar size={16} className="opacity-60" />
                    <span className="font-mono text-sm">
                      Available for new projects
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Coffee size={16} className="opacity-60" />
                    <span className="font-mono text-sm">
                      Fueled by Ethiopian coffee
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-center font-mono">
                What I Value
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="text-center space-y-3">
                  <Heart className="w-6 h-6 mx-auto opacity-60" />
                  <h4 className="font-semibold font-mono">Passion</h4>
                  <p className="text-sm opacity-70 font-mono">
                    I love what I do and it shows in every project I work on.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <Coffee className="w-6 h-6 mx-auto opacity-60" />
                  <h4 className="font-semibold font-mono">Quality</h4>
                  <p className="text-sm opacity-70 font-mono">
                    Attention to detail and commitment to excellence in every
                    line of code.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <MapPin className="w-6 h-6 mx-auto opacity-60" />
                  <h4 className="font-semibold font-mono">Growth</h4>
                  <p className="text-sm opacity-70 font-mono">
                    Continuously learning and adapting to new technologies and
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section id="work-experience" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold font-mono">Work Experience</h2>
              <p className="text-base opacity-70 font-mono">
                My professional journey and achievements
              </p>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 transform shadow-sm scale-[1.01] hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-indigo-400 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-90 transition-opacity duration-300 bg-gradient-to-br from-sky-50 to-pink-50 dark:from-transparent dark:via-transparent dark:to-transparent dark:group-hover:from-indigo-900/30 dark:group-hover:via-purple-900/20 dark:group-hover:to-transparent" />

                  <div className="relative z-10 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-300 transition-colors font-mono group-hover:text-indigo-800 dark:group-hover:text-indigo-100">
                        {exp.title}
                      </h3>
                      <p className="text-base opacity-80 font-mono">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 text-sm opacity-60">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span className="font-mono">{exp.location}</span>
                      </div>
                    </div>

                    <p className="opacity-80 leading-relaxed text-sm font-mono">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-indigo-50 dark:bg-indigo-900/40 opacity-90 font-mono transition-colors duration-200 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Studies Section */}
          <section id="studies" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold font-mono">Education</h2>
              <p className="text-base opacity-70 font-mono">
                My academic background and learning journey
              </p>
            </div>

            <div className="space-y-6">
              {studies.map((study, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 transform shadow-sm scale-[1.01] hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-amber-400 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-90 transition-opacity duration-300 bg-gradient-to-br from-amber-50 to-rose-50 dark:from-transparent dark:via-transparent dark:to-transparent dark:group-hover:from-amber-900/30 dark:group-hover:via-rose-900/20 dark:group-hover:to-transparent" />

                  <div className="space-y-3 relative z-10">
                    <div>
                      <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-300 transition-colors font-mono group-hover:text-amber-800 dark:group-hover:text-amber-100">
                        {study.degree}
                      </h3>
                      <p className="text-base opacity-80 font-mono">
                        {study.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-sm opacity-60">
                      <Calendar size={12} />
                      <span className="font-mono">{study.period}</span>
                    </div>

                    <p className="opacity-80 leading-relaxed text-sm font-mono">
                      {study.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section (refactored) */}
          <SkillsSection />
        </div>

        {/* Mobile Bottom Navigation (icons-only, improved tap targets & contrast) */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
          <nav
            className={`flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-md border transition-all duration-300 bg-white/95 dark:bg-gray-800/95 border-gray-200 dark:border-gray-700 shadow-lg`}
            role="navigation"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={item.label}
                  aria-current={isActive ? "true" : undefined}
                  className={`p-2 rounded-full transition-all duration-150 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <Icon size={16} />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
