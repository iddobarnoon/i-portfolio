import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    // const frontendSkills = ["React", "Next", "Typescript", "TailwindCSS"];
    // const backendSkills = ["AWS", "Python", "PostgresQL", "Java"];
    
    const experiences = [
        {
            company: "Lendbuzz",
            companyLink: "https://lendbuzz.com",
            role: "Machine Learning Engineering Intern",
            period: "Jun 2025 - Aug 2025",
            country: "Boston, MA",
            description: [
                "Built an org-wide Python tool to locally run proprietary ML models and microservices, cutting setup time from 2 minutes to 12 seconds and reducing infra costs",
                "Developed CI/CD pipelines (GHA + AWS EC2/ECS) for automated deployments across test, staging, and production",
                "Supported fraud detection ML pipeline improvements, contributing to a 8.3% accuracy boost"
            ]
        }
    ];
    
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-10 sm:py-20">
            <RevealOnScroll>
            <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent text-center">About me</h2>
                <div className="glass rounded-2xl p-4 sm:p-6 border-white/10 border hover:-translate-y-1 transition-all text-sm sm:text-base text-gray-400 mb-8 sm:mb-10">
                    <div className="mt-3 sm:mt-4 mb-3 sm:mb-4">
                        <p className="mb-4 sm:mb-6">
                        Hi, I'm <strong className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Iddo</strong>!
                        </p>
                        <p className="mb-6">I'm currently a Computer Science student at <strong className="bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">Yeshiva University</strong>,
                        concentrating in Artificial Intelligence, and deeply passionate on the intersection between High Performance Computing and Machine Learning
                        </p>
                        <p className="mb-6">For as long as I remember, I've had an inherent affinity toward programming and building. I first began programming by learning Java and creating mods on Minecraft for me and my friends to enjoy. I also experimented on locally hosting servers on games like Minecraft and Garry's Mod, both allowing me and 8 of my friends to play concurrently! </p>
                        <p className="mb-6">In high school, during the popularization of OpenAI's GPT-3, I began experimenting with Machine Learning, and was fascinated about how we could leverage computers to demystify phenomena in the physical world. This survey into a world of higher-level mathematics and advanced computer science concepts strengthened my interest in the field, leading to me picking it up as a major in college.</p>
                        <p className="mb-6">As a college student, I continued to hone my talents and began to explore other avenues of software engineering. Alongside my coursework, I began applying the knowledge I learned in the classroom through side projects, learning useful technologies, picking up front-end skills, and collaborating with fellow students and professionals. </p>
                        <p className="mb-6">As I continue to explore and add to my breadth and depth of knowledge in the field, I'm driven to contribute to building projects that bring quantifiable impact to people around the world.</p>
                    </div>
                </div>

                
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent text-center">Experience </h2>
                <div className="flex justify-center items-center w-full mt-6 sm:mt-8">
                    <div className="w-full max-w-[600px] mx-auto px-2 sm:px-0">
                        {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="relative pl-6 sm:pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-gray-700 before:rounded-full"
                        >
                            <div 
                                className={`absolute -left-1.5 top-0 w-2 h-2 bg-gray-700 rounded-full`}
                            />
                            <div className="text-gray-400 text-xl mb-1">
                                {exp.companyLink ? (
                                    <a 
                                        href={exp.companyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 font-medium hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {exp.company}
                                        <svg 
                                            xmlns="http://www.lendbuzz.com" 
                                            width="16" 
                                            height="16" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            className="opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                                        >
                                            <path d="M7 17l9.2-9.2M17 17V7H7"/>
                                        </svg>
                                    </a>
                                ) : (
                                    exp.company
                                )}
                            </div>
                            <p className="text-2xl font-semibold">{exp.role}</p>
                            <p className="text-gray-400 font-semibold">{exp.period}</p>
                            {exp.country && <p className="text-gray-400 text-sm">{exp.country}</p>}
                            <ul className="mt-2 space-y-2 text-gray-300">
                                {exp.description.map((bullet, bulletIndex) => (
                                    <li key={bulletIndex} className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}