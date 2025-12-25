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
        <section className="relative py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                        Featured Projects
                    </h2>
                    <p className="text-gray-500">Some of my recent work</p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
                                        ⭐ Featured
                                    </div>
                                )}

                                {/* Action Links */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-white/90 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                                    >
                                        <FaGithub size={18} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg bg-white/90 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-12">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                        <span>View All Projects</span>
                        <HiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
