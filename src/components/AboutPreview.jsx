import React from "react";
import { Link } from "react-router-dom";
import { HiCode, HiLightningBolt, HiUserGroup, HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";

const AboutPreview = () => {
    const stats = [
        {
            icon: HiCode,
            value: "20+",
            label: "Projects Completed",
        },
        {
            icon: HiLightningBolt,
            value: "2+",
            label: "Years Experience",
        },
        {
            icon: HiUserGroup,
            value: "10+",
            label: "Happy Clients",
        },
    ];

    const highlights = [
        "Frontend Development",
        "React & Next.js",
        "Responsive Design",
        "UI/UX Implementation",
    ];

    return (
        <section className="relative py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                        About Me
                    </h2>
                    <p className="text-gray-500">Get to know me better</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content - About Text */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                I'm a passionate <span className="text-blue-600 font-semibold">Frontend Developer</span> based
                                in Nepal, with a strong focus on creating beautiful, functional, and
                                user-centered digital experiences.
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                With expertise in modern web technologies like React, JavaScript, and
                                TailwindCSS, I bring designs to life with clean code and attention to
                                detail. I believe in continuous learning and staying updated with the
                                latest trends in web development.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                When I'm not coding, you'll find me exploring new technologies,
                                contributing to open-source projects, or enjoying a good cup of coffee
                                while brainstorming creative solutions.
                            </p>
                        </div>

                        {/* Quick Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <FaMapMarkerAlt className="text-blue-600" />
                                <span className="text-gray-700">Nepal</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <FaBriefcase className="text-blue-600" />
                                <span className="text-gray-700">Available for work</span>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-3">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <HiCheckCircle className="text-blue-600 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Learn More Button */}
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                        >
                            <span>Learn more about my journey</span>
                            <HiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Right Content - Stats Cards */}
                    <div className="space-y-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="flex items-center gap-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <stat.icon className="text-2xl text-blue-600" />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-4xl font-bold text-blue-600">
                                            {stat.value}
                                        </h3>
                                        <p className="text-gray-600 font-medium">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
