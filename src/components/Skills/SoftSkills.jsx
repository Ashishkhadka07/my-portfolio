import React from "react";

const SoftSkills = () => {
    const softSkills = [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Adaptability",
        "Attention to Detail",
        "Critical Thinking",
        "Continuous Learning",
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Soft Skills</h2>
                <div className="flex flex-wrap gap-4">
                    {softSkills.map((skill) => (
                        <span
                            key={skill}
                            className="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full font-medium border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SoftSkills;
