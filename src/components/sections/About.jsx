import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "Next", "Typescript", "TailwindCSS"];
    const backendSkills = ["AWS", "Python", "PostgresQL", "Java"]
    
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
            </div>
            </RevealOnScroll>
        </section>
    );
}