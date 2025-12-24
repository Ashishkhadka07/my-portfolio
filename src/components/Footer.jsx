import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiMail, HiHeart } from "react-icons/hi";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Skills", path: "/skills" },
        { name: "Contact", path: "/contact" },
    ];

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub", hoverColor: "hover:text-white" },
        { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn", hoverColor: "hover:text-cyan-400" },
        { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter", hoverColor: "hover:text-sky-400" },
        { icon: FaInstagram, href: "https://instagram.com/yourusername", label: "Instagram", hoverColor: "hover:text-pink-400" },
    ];

    return (
        <footer className="relative bg-slate-950 overflow-hidden">
            {/* Gradient Orbs Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"></div>
            </div>

            {/* Top Gradient Border */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Logo */}
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative bg-slate-900 px-3 py-2 rounded-lg border border-purple-500/30">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                        AK
                                    </span>
                                </div>
                            </div>
                            <span className="text-white font-semibold text-lg tracking-wide">
                                <span className="text-purple-400">&lt;</span>
                                Developer
                                <span className="text-cyan-400">/&gt;</span>
                            </span>
                        </Link>

                        {/* Description */}
                        <p className="text-gray-400 max-w-md leading-relaxed">
                            A passionate Frontend Developer crafting beautiful, responsive, and user-friendly web experiences. Let's build something amazing together.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:your.email@example.com"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                        >
                            <HiMail className="text-purple-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                            <span>your.email@example.com</span>
                        </a>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`group relative p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-gray-400 ${social.hoverColor} transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10`}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold text-lg relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-300"></span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA Section */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold text-lg relative inline-block">
                            Let's Connect
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Interested in working together? I'm always open to discussing new projects and opportunities.
                        </p>
                        <Link
                            to="/contact"
                            className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-full"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 transition-transform duration-300 group-hover:scale-105"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                            <span className="relative text-white font-semibold text-sm">Get In Touch</span>
                            <span className="relative text-white">→</span>
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-slate-800/50">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-gray-500 text-sm flex items-center gap-1 flex-wrap justify-center">
                            © {currentYear} Made with
                            <HiHeart className="text-red-500 animate-pulse" size={16} />
                            by
                            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-medium">
                                Ashish Khadka
                            </span>
                        </p>

                        {/* Back to Top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
                        >
                            <span className="text-sm">Back to top</span>
                            <span className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-purple-500 group-hover:-translate-y-1 transition-all duration-300">
                                ↑
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
