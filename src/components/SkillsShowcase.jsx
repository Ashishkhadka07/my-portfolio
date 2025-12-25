import React from "react";
import { Link } from "react-router-dom";
import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaNodeJs,
    FaFigma,
    FaNpm,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiVite,
} from "react-icons/si";
import { HiArrowRight, HiCode } from "react-icons/hi";

const SkillsShowcase = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: "🎨",
            skills: ["HTML", "CSS", "JavaScript", "React.js",]
        },
        {
            title: "Frameworks & Libraries",
            icon: "⚡",
            skills: ["TailwindCSS", "React Router"]
        },
        {
            title: "Tools & Technologies",
            icon: "🛠️",
            skills: ["Git", "GitHub", "VS Code", "Figma", "npm"]
        },
        {
            title: "Soft Skills",
            icon: "🤝",
            skills: ["Problem Solving", "Team Collaboration", "Communication"]
        }
    ];

    const technologies = [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "TailwindCSS", icon: SiTailwindcss },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Git", icon: FaGitAlt },
        { name: "Vite", icon: SiVite },
        { name: "Figma", icon: FaFigma },
        { name: "npm", icon: FaNpm },
    ];

    return (
        <section className="relative py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-2">
                        <HiCode className="text-3xl text-blue-600 dark:text-blue-400" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
                            Skills & Expertise
                        </h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">Technologies and tools I work with</p>
                </div>

                {/* Skills Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xl">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Icons */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Tech Stack</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                            >
                                <tech.icon className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                                <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Skills Link */}
                <div className="text-center mt-12">
                    <Link
                        to="/skills"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300"
                    >
                        <span>View All Skills</span>
                        <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SkillsShowcase;
