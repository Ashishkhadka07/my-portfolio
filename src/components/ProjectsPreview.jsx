import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const ProjectsPreview = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "A full-featured online shopping platform with cart, checkout, and payment integration.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
            github: "#",
            live: "#",
            featured: true,
        },
        {
            title: "Task Management App",
            description:
                "A productivity app for organizing tasks with drag-and-drop functionality.",
            tags: ["React", "Redux", "TailwindCSS"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
            github: "#",
            live: "#",
            featured: false,
        },
        {
            title: "Weather Dashboard",
            description:
                "Real-time weather application with beautiful visualizations and forecasts.",
            tags: ["JavaScript", "API", "CSS3"],
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80",
            github: "#",
            live: "#",
            featured: false,
        },
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-sm font-medium mb-4">
                        Featured Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Recent{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A selection of my recent work that showcases my skills and passion
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group relative rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold">
                                        ⭐ Featured
                                    </div>
                                )}

                                {/* Action Links */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-slate-900/80 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-slate-800 transition-colors duration-300"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-slate-900/80 backdrop-blur-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors duration-300"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700/50 text-gray-300 border border-slate-600/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom gradient line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/projects"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden rounded-full border-2 border-purple-500/50 text-white font-semibold hover:border-purple-400 transition-all duration-300"
                    >
                        <span className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative">View All Projects</span>
                        <HiArrowRight className="relative group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
