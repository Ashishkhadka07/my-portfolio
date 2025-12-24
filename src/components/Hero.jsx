import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import logo from "../assets/logo.jpg";

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        "Frontend Developer",
        "React Enthusiast",
        "UI/UX Designer",
        "Creative Coder",
    ];

    // Typing animation effect
    useEffect(() => {
        const currentWord = roles[currentRole];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setDisplayText(currentWord.substring(0, displayText.length + 1));
                    if (displayText === currentWord) {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    setDisplayText(currentWord.substring(0, displayText.length - 1));
                    if (displayText === "") {
                        setIsDeleting(false);
                        setCurrentRole((prev) => (prev + 1) % roles.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole, roles]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl"></div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-400/40 rounded-full animate-bounce"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 15}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${3 + i}s`,
                        }}
                    ></div>
                ))}

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        {/* Greeting Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-purple-500/30 backdrop-blur-sm">
                            <HiSparkles className="text-yellow-400 animate-pulse" />
                            <span className="text-gray-300 text-sm">Welcome to my portfolio</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Hi, I'm{" "}
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                    Ashish Khadka
                                </span>
                            </h1>

                            {/* Typing Animation */}
                            <div className="h-12 flex items-center justify-center lg:justify-start">
                                <span className="text-xl sm:text-2xl text-gray-400">
                                    I'm a{" "}
                                    <span className="text-cyan-400 font-semibold">
                                        {displayText}
                                        <span className="animate-pulse">|</span>
                                    </span>
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Passionate about creating beautiful, responsive, and user-friendly web
                            experiences. I transform ideas into elegant digital solutions that make
                            a difference.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                to="/projects"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden rounded-full"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 transition-transform duration-300 group-hover:scale-105"></span>
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                                <span className="relative text-white font-semibold">View My Work</span>
                                <HiArrowRight className="relative text-white group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>

                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-purple-500/50 text-white font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
                            >
                                <span>Let's Talk</span>
                                <span className="group-hover:rotate-45 transition-transform duration-300">💬</span>
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                            <span className="text-gray-500 text-sm">Find me on</span>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-gray-400 hover:text-white hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                                >
                                    <FaLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>

                            {/* Image container */}
                            <div className="relative">
                                {/* Rotating border */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 rounded-full animate-spin-slow opacity-75"></div>

                                {/* Image */}
                                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-900">
                                    <img
                                        src={logo}
                                        alt="Ashish Khadka"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -right-4 top-8 px-4 py-2 bg-slate-800/90 backdrop-blur-sm rounded-lg border border-purple-500/30 shadow-lg animate-bounce">
                                    <span className="text-2xl">⚛️</span>
                                    <span className="ml-2 text-sm text-white font-medium">React</span>
                                </div>

                                <div className="absolute -left-4 bottom-8 px-4 py-2 bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-lg animate-bounce delay-500">
                                    <span className="text-2xl">💻</span>
                                    <span className="ml-2 text-sm text-white font-medium">Frontend</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-gray-500 text-sm">Scroll Down</span>
                    <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
                        <div className="w-1 h-2 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
