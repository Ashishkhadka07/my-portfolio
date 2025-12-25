import React from "react";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

const AboutHero = () => {
    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/30 rounded-3xl"></div>
                            <img
                                src={logo}
                                alt="Ashish Khadka"
                                className="relative w-80 h-80 object-cover rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                                About <span className="text-blue-600 dark:text-blue-400">Me</span>
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400">Frontend Developer & UI Enthusiast</p>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                            I'm a passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Frontend Developer</span> based in Nepal,
                            with a strong focus on creating beautiful, functional, and user-centered digital experiences.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            With expertise in modern web technologies like React, JavaScript, and TailwindCSS,
                            I bring designs to life with clean code and attention to detail. I believe in continuous
                            learning and staying updated with the latest trends in web development.
                        </p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700">
                                <HiLocationMarker className="text-blue-600 dark:text-blue-400" />
                                <span className="text-gray-700 dark:text-gray-300">Nepal</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700">
                                <HiMail className="text-blue-600 dark:text-blue-400" />
                                <span className="text-gray-700 dark:text-gray-300 text-sm">Available for work</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-gray-100 dark:bg-gray-900 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                                className="p-3 bg-gray-100 dark:bg-gray-900 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-blue-800">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
