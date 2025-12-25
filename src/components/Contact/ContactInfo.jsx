import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactInfo = () => {
    const contactInfo = [
        {
            icon: HiMail,
            title: "Email",
            value: "your.email@example.com",
            link: "mailto:your.email@example.com",
        },
        {
            icon: HiPhone,
            title: "Phone",
            value: "+977 98XXXXXXXX",
            link: "tel:+97798XXXXXXXX",
        },
        {
            icon: HiLocationMarker,
            title: "Location",
            value: "Kathmandu, Nepal",
            link: null,
        },
    ];

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
        { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    ];

    return (
        <div className="space-y-8">
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-700 dark:text-green-400 text-sm font-medium">Available for freelance work</span>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
                {contactInfo.map((info) => (
                    <div
                        key={info.title}
                        className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                <info.icon className="text-xl text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                                {info.link ? (
                                    <a href={info.link} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {info.value}
                                    </a>
                                ) : (
                                    <span className="text-gray-600 dark:text-gray-400">{info.value}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Links */}
            <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
                <div className="flex gap-3">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
