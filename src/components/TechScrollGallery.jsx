import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiAmazonaws,
  SiPython,
} from "react-icons/si";

export const TechScrollGallery = () => {
  const tech = [
    { name: "React", icon: <SiReact className="text-cyan-400 text-3xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500 text-3xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-3xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400 text-3xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400 text-3xl" /> },
    { name: "Git", icon: <SiGit className="text-orange-400 text-3xl" /> },
    { name: "AWS", icon: <SiAmazonaws className="text-yellow-400 text-3xl" /> },
    { name: "Python", icon: <SiPython className="text-yellow-300 text-3xl" /> },
  ];

  return (
    <section className="w-full py-12">
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        Technologies I Use
      </h2>

      <div className="w-full overflow-hidden bg-gray-800/40 backdrop-blur-md py-4 rounded-2xl shadow-lg">
        <div className="flex animate-scroll">
          {[...tech, ...tech].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-6 px-4 py-2 text-lg font-semibold text-white bg-white/10 rounded-xl shadow-md whitespace-nowrap"
            >
              {t.icon}
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
