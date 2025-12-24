import React from "react";
import { Link } from "react-router-dom";
import { HiCode, HiLightningBolt, HiUserGroup, HiArrowRight } from "react-icons/hi";

const AboutPreview = () => {
    const stats = [
        {
            icon: HiCode,
            value: "20+",
            label: "Projects Completed",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: HiLightningBolt,
            value: "2+",
            label: "Years Experience",
            color: "from-cyan-500 to-blue-500",
        },
        {
            icon: HiUserGroup,
            value: "10+",
            label: "Happy Clients",
            color: "from-pink-500 to-orange-500",
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4">
                        About Me
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Get To Know{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Me Better
                        </span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content - About Text */}
                    <div className="space-y-6">
                        <div className="relative p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-colors duration-300">
                            {/* Decorative corner */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-purple-500/50 rounded-tl-2xl"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-500/50 rounded-br-2xl"></div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                I'm a passionate <span className="text-cyan-400 font-semibold">Frontend Developer</span> based
                                in Nepal, with a strong focus on creating beautiful, functional, and
                                user-centered digital experiences.
                            </p>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                With expertise in modern web technologies like React, JavaScript, and
                                TailwindCSS, I bring designs to life with clean code and attention to
                                detail. I believe in continuous learning and staying updated with the
                                latest trends in web development.
                            </p>

                            <p className="text-gray-400 leading-relaxed">
                                When I'm not coding, you'll find me exploring new technologies,
                                contributing to open-source projects, or enjoying a good cup of coffee
                                while brainstorming creative solutions.
                            </p>
                        </div>

                        {/* Learn More Button */}
                        <Link
                            to="/about"
                            className="group inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                        >
                            <span>Learn more about my journey</span>
                            <HiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Right Content - Stats Cards */}
                    <div className="grid gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="group relative p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/5"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-6">
                                    {/* Icon */}
                                    <div
                                        className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} p-0.5`}
                                    >
                                        <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                                            <stat.icon className="text-2xl text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3
                                            className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                                        >
                                            {stat.value}
                                        </h3>
                                        <p className="text-gray-400 font-medium">{stat.label}</p>
                                    </div>

                                    {/* Hover glow */}
                                    <div
                                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                    ></div>
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
