import React from "react";
import { HiCollection } from "react-icons/hi";

const ProjectsHeader = () => {
    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <HiCollection className="text-3xl text-blue-600 dark:text-blue-400" />
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
                        </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A collection of projects I've worked on, showcasing my skills in frontend development,
                        UI/UX design, and problem-solving abilities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectsHeader;
