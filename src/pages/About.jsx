import React from "react";
import { Link } from "react-router-dom";
import { HiCode, HiLightningBolt, HiUserGroup, HiArrowRight, HiCheckCircle, HiAcademicCap, HiBriefcase, HiLocationMarker, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const About = () => {
    const stats = [
        { icon: HiCode, value: "20+", label: "Projects Completed" },
        { icon: HiLightningBolt, value: "2+", label: "Years Experience" },
        { icon: HiUserGroup, value: "10+", label: "Happy Clients" },
    ];

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

    const education = [
        {
            degree: "Bachelor of Science in Computer Science & IT",
            school: "Tribhuvan University",
            period: "2020 - 2024",
            description: "Focused on software engineering, algorithms, and web technologies.",
        },
    ];

    return (
        <main className="pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Hero Section */}
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

            {/* Stats Section */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    <stat.icon className="text-3xl text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
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

            {/* Education Section */}
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

            {/* CTA Section */}
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
        </main>
    );
};

export default About;
