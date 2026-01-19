import React from "react";
import { HiAcademicCap } from "react-icons/hi";

const Education = () => {
    const education = [
        {
            degree: "Bachelor of Science in Computer Science & IT",
            school: "Tribhuvan University",
            period: "2020 - 2025",
            description: "Focused on software engineering, algorithms, and web technologies.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-12">
                    <HiAcademicCap className="text-3xl text-blue-600 dark:text-blue-400" />
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
                </div>

                {education.map((edu, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">{edu.period}</span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{edu.school}</p>
                        <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
