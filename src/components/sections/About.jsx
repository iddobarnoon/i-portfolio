import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "Next", "Typescript", "TailwindCSS"];
    const backendSkills = ["AWS", "Python", "PostgresQL", "Java"];
    
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
                "Supported fraud detection ML pipeline improvements, contributing to a 10% accuracy boost"
            ]
        }
    ];
    
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent text-center">About me</h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        TEST TEST TEST TEST TEST TEST
                        TEST TEST TEST TEST TEST TEST NEED TO ADD BACKGROUND AND GLASS
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>


                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech) => (
                                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {tech}
                                    </span>


                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul list-disc className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> B.S in Computer Science, Minor in Mathematics</strong> - Yeshiva University (2024-Present)
                            </li>
                            <li>Relevant Coursework: Data Structures, Introduction to Algorithms, Computer Architecture and Assembly Language Programming, Calculus II, Linear Algebra</li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work</h3>
                        <div className="space-y-4 text-gray-300">
                            <h4 className="font-semibold"> Machine Learning Engineering Intern @ Lendbuzz (Jun 2025-Aug 2025)</h4>
                            <p>Blah Blah</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full mt-8">
                    <div className="w-[600px] mx-auto">
                        {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-gray-700 before:rounded-full"
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