import React from "react";
import { HiBriefcase } from "react-icons/hi";

const Experience = () => {
    const experience = [
        {
            title: "Software Engineer",
            company: "Tech Company",
            period: "2023 - Present",
            description: "Building scalable web applications using React, Node.js, and cloud technologies. Leading frontend development initiatives.",
            skills: ["React", "Node.js", "AWS", "TypeScript"],
        },
        {
            title: "Frontend Developer",
            company: "Digital Agency",
            period: "2022 - 2023",
            description: "Developed responsive web applications and improved user experience across multiple client projects.",
            skills: ["React", "JavaScript", "TailwindCSS", "Figma"],
        },
        {
            title: "Junior Developer",
            company: "Startup Inc",
            period: "2021 - 2022",
            description: "Started my journey in web development, learning best practices and contributing to team projects.",
            skills: ["HTML", "CSS", "JavaScript", "Git"],
        },
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-12">
                    <HiBriefcase className="text-3xl text-blue-600 dark:text-blue-400" />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
                </div>

                <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:pb-0">
                            <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800"></div>
                            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">{exp.period}</span>
                                </div>
                                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{exp.company}</p>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
