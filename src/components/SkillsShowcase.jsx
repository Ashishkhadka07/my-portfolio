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
import { HiArrowRight } from "react-icons/hi";

const SkillsShowcase = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"]
        },
        {
            title: "Frameworks & Libraries",
            skills: ["TailwindCSS", "Redux", "React Router"]
        },
        {
            title: "Tools & Technologies",
            skills: ["Git", "GitHub", "VS Code", "Figma", "npm"]
        },
        {
            title: "Soft Skills",
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
        <section className="relative py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                        Skills & Expertise
                    </h2>
                    <p className="text-gray-500">Technologies and tools I work with</p>
                </div>

                {/* Skills Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                </div>
                                <h3 className="font-semibold text-gray-900">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="text-gray-600 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Icons */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Tech Stack</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="group flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                            >
                                <tech.icon className="text-2xl text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                                <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors duration-300">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Skills Link */}
                <div className="text-center mt-12">
                    <Link
                        to="/skills"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-300 transition-all duration-300"
                    >
                        <span>View All Skills</span>
                        <HiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SkillsShowcase;
