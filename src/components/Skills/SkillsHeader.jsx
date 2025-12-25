import React from "react";
import { HiCode } from "react-icons/hi";

const SkillsHeader = () => {
    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <HiCode className="text-3xl text-blue-600 dark:text-blue-400" />
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                            Skills & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
                        </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A comprehensive overview of my technical skills and expertise,
                        continuously growing through hands-on experience and learning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SkillsHeader;
