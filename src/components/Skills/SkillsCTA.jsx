import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiCollection } from "react-icons/hi";

const SkillsCTA = () => {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Want to see my skills in <span className="text-blue-600 dark:text-blue-400">action</span>?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                    Check out my projects where I've applied these skills to build real-world applications.
                </p>
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:shadow-xl border-2 border-blue-600 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                >
                    <HiCollection />
                    <span>View Projects</span>
                    <HiArrowRight />
                </Link>
            </div>
        </section>
    );
};

export default SkillsCTA;
