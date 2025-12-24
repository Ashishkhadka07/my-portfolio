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
    const skills = [
        { name: "React", icon: FaReact, color: "#61DAFB", level: 90 },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 85 },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 75 },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", level: 85 },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: 70 },
        { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 65 },
        { name: "Git", icon: FaGitAlt, color: "#F05032", level: 80 },
        { name: "Vite", icon: SiVite, color: "#646CFF", level: 85 },
        { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 70 },
        { name: "npm", icon: FaNpm, color: "#CB3837", level: 80 },
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
                        My Tech Stack
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Skills &{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Here are the technologies I work with to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group relative p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Gradient overlay on hover */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                style={{ backgroundColor: skill.color }}
                            ></div>

                            {/* Icon */}
                            <div className="relative flex flex-col items-center gap-4">
                                <div
                                    className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-slate-900/50 group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: skill.color }}
                                >
                                    <skill.icon className="text-3xl sm:text-4xl" />
                                </div>

                                {/* Name */}
                                <span className="text-gray-300 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </span>

                                {/* Progress Bar */}
                                <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-700 ease-out group-hover:opacity-100 opacity-70"
                                        style={{
                                            width: `${skill.level}%`,
                                            backgroundColor: skill.color,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Skills Link */}
                <div className="text-center mt-12">
                    <Link
                        to="/skills"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300"
                    >
                        <span>View All Skills</span>
                        <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SkillsShowcase;
