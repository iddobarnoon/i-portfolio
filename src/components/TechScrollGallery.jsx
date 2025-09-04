import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiPython,
} from "react-icons/si";
import { useState } from "react";

export const TechScrollGallery = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const technologies = [
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiGit, name: "Git" },
    { icon: SiPython, name: "Python" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent text-center">
          Technologies
        </h2>
        <div
          className="relative overflow-hidden rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all p-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex relative">
            <div
              className="flex gap-12 items-center whitespace-nowrap animate-scroll"
              style={{
                paddingRight: "3rem",
                animationPlayState: isHovered ? "paused" : "running"
              }}
            >
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="inline-flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform"
                  >
                    <Icon className="w-12 h-12 text-blue-500" />
                    <span className="text-sm text-gray-400">{tech.name}</span>
                  </div>
                );
              })}
            </div>
            <div
              className="flex gap-12 items-center whitespace-nowrap animate-scroll"
              style={{
                paddingRight: "3rem",
                animationPlayState: isHovered ? "paused" : "running"
              }}
            >
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`duplicate-${index}`}
                    className="inline-flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform"
                  >
                    <Icon className="w-12 h-12 text-blue-500" />
                    <span className="text-sm text-gray-400">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
