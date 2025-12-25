import React from "react";
import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaNodeJs,
    FaFigma,
    FaNpm,
    FaDatabase,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiVite,
    SiMongodb,
    SiRedux,
    SiPostman,
} from "react-icons/si";
import { HiCode, HiDesktopComputer, HiCog, HiLightBulb } from "react-icons/hi";

const SkillCategories = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: HiDesktopComputer,
            description: "Building responsive and interactive user interfaces",
            skills: [
                { name: "React.js", icon: FaReact, level: 90 },
                { name: "JavaScript", icon: FaJs, level: 85 },
                { name: "TypeScript", icon: SiTypescript, level: 75 },
                { name: "HTML5", icon: FaHtml5, level: 95 },
                { name: "CSS3", icon: FaCss3Alt, level: 90 },
                { name: "TailwindCSS", icon: SiTailwindcss, level: 85 },
            ],
        },
        {
            title: "Frameworks & Tools",
            icon: HiCog,
            description: "Modern tools and frameworks for efficient development",
            skills: [
                { name: "Next.js", icon: SiNextdotjs, level: 70 },
                { name: "Vite", icon: SiVite, level: 85 },
                { name: "Redux", icon: SiRedux, level: 75 },
                { name: "Git", icon: FaGitAlt, level: 80 },
                { name: "npm", icon: FaNpm, level: 85 },
                { name: "Postman", icon: SiPostman, level: 75 },
            ],
        },
        {
            title: "Backend Basics",
            icon: FaDatabase,
            description: "Server-side technologies and databases",
            skills: [
                { name: "Node.js", icon: FaNodeJs, level: 65 },
                { name: "MongoDB", icon: SiMongodb, level: 60 },
                { name: "REST APIs", icon: HiCode, level: 80 },
            ],
        },
        {
            title: "Design Tools",
            icon: HiLightBulb,
            description: "Creating beautiful and functional designs",
            skills: [
                { name: "Figma", icon: FaFigma, level: 70 },
                { name: "UI/UX", icon: HiDesktopComputer, level: 75 },
            ],
        },
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    <category.icon className="text-2xl text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
                                    <p className="text-gray-500 dark:text-gray-400">{category.description}</p>
                                </div>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <skill.icon className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                                            <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-700 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">{skill.level}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillCategories;
