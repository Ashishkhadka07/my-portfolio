import React from "react";
import { Link } from "react-router-dom";
import { HiMail, HiArrowRight, HiSparkles } from "react-icons/hi";

const CTASection = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* CTA Card */}
                <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-br-full"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-tl-full"></div>

                    {/* Content */}
                    <div className="relative text-center space-y-8">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 animate-bounce">
                            <HiSparkles className="text-3xl text-white" />
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                Let's Work{" "}
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                    Together
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                                Have a project in mind or just want to say hello? I'd love to hear from
                                you! Let's create something amazing together.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/contact"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-full"
                            >
                                {/* Button gradient background */}
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 transition-transform duration-300 group-hover:scale-105"></span>

                                {/* Shine effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

                                <HiMail className="relative text-white text-xl" />
                                <span className="relative text-white font-semibold">Get In Touch</span>
                                <HiArrowRight className="relative text-white group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>

                            <a
                                href="mailto:your.email@example.com"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-600 text-gray-300 font-semibold hover:border-purple-500/50 hover:text-white transition-all duration-300"
                            >
                                <span>your.email@example.com</span>
                            </a>
                        </div>

                        {/* Availability Status */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 text-sm font-medium">
                                Currently available for freelance work
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
