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
        { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
        { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
        { icon: FaInstagram, href: "https://instagram.com/yourusername", label: "Instagram" },
    ];

    return (
        <footer className="relative bg-gray-900">
            {/* Top Border */}
            <div className="h-1 bg-blue-600"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Logo */}
                        <Link to="/" className="inline-flex items-center gap-3">
                            <div className="bg-blue-600 px-3 py-2 rounded-lg">
                                <span className="text-2xl font-bold text-white">
                                    AK
                                </span>
                            </div>
                            <span className="text-white font-semibold text-lg tracking-wide">
                                <span className="text-blue-400">&lt;</span>
                                Developer
                                <span className="text-blue-400">/&gt;</span>
                            </span>
                        </Link>

                        {/* Description */}
                        <p className="text-gray-400 max-w-md leading-relaxed">
                            A passionate Frontend Developer crafting beautiful, responsive, and user-friendly web experiences. Let's build something amazing together.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:your.email@example.com"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                            <HiMail className="text-blue-400" size={20} />
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
                                    className="p-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all duration-300"
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
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-6">
                        <h3 className="text-white font-semibold text-lg relative inline-block">
                            Let's Connect
                            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-blue-600 rounded-full"></span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Interested in working together? I'm always open to discussing new projects and opportunities.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 transition-colors duration-300"
                        >
                            <span>Get In Touch</span>
                            <span>→</span>
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-gray-500 text-sm flex items-center gap-1 flex-wrap justify-center">
                            © {currentYear} Made with
                            <HiHeart className="text-red-500" size={16} />
                            by
                            <span className="text-blue-400 font-medium">
                                Ashish Khadka
                            </span>
                        </p>

                        {/* Back to Top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
                        >
                            <span className="text-sm">Back to top</span>
                            <span className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-blue-600 hover:-translate-y-1 transition-all duration-300">
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
