import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm opacity-95 gap-3">
          <div className="font-mono">© {currentYear} / Fekreselassie</div>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/fekreselassie-mulu-freelancer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors duration-200 text-gray-600 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/zsegla"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors duration-200 text-gray-600 hover:text-black hover:bg-black/10"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="mailto:fekruson@gmail.com"
              className="p-2 rounded-full transition-colors duration-200 text-gray-600 hover:text-[#D44638] hover:bg-[#D44638]/10"
              title="Email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
