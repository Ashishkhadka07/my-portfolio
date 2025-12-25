import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight, HiMail } from "react-icons/hi";

const AboutCTA = () => {
    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Let's Work <span className="text-blue-600 dark:text-blue-400">Together</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                    Have a project in mind? I'd love to hear about it. Let's create something amazing together.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-white dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white hover:shadow-xl border-2 border-blue-600 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                >
                    <HiMail />
                    <span>Get In Touch</span>
                    <HiArrowRight />
                </Link>
            </div>
        </section>
    );
};

export default AboutCTA;
