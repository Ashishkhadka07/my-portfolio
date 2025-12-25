import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiCollection, HiFilter, HiStar } from "react-icons/hi";

const Projects = () => {
    const [filter, setFilter] = useState("all");

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online shopping platform with cart, checkout, and payment integration. Built with modern technologies for optimal performance.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
            github: "#",
            live: "#",
            category: "fullstack",
            featured: true,
        },
        {
            title: "Task Management App",
            description: "A productivity app for organizing tasks with drag-and-drop functionality and team collaboration features.",
            tags: ["React", "Redux", "TailwindCSS"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
            github: "#",
            live: "#",
            category: "frontend",
            featured: false,
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application with beautiful visualizations, forecasts, and location-based weather data.",
            tags: ["JavaScript", "API", "CSS3"],
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80",
            github: "#",
            live: "#",
            category: "frontend",
            featured: false,
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
            tags: ["React", "TailwindCSS", "Vite"],
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
            github: "#",
            live: "#",
            category: "frontend",
            featured: true,
        },
        {
            title: "Blog Platform",
            description: "A modern blog platform with rich text editing, user authentication, and content management system.",
            tags: ["Next.js", "MongoDB", "Prisma"],
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
            github: "#",
            live: "#",
            category: "fullstack",
            featured: false,
        },
        {
            title: "Social Media Dashboard",
            description: "Analytics dashboard for tracking social media metrics with interactive charts and real-time updates.",
            tags: ["React", "Chart.js", "API"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
            github: "#",
            live: "#",
            category: "frontend",
            featured: false,
        },
    ];

    const filters = [
        { id: "all", label: "All Projects", icon: HiCollection },
        { id: "frontend", label: "Frontend", icon: HiFilter },
        { id: "fullstack", label: "Full Stack", icon: HiFilter },
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <main className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {/* Header */}
            <section className="py-16 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <HiCollection className="text-3xl text-blue-600 dark:text-blue-400" />
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                                My <span className="text-blue-600 dark:text-blue-400">Projects</span>
                            </h1>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            A collection of projects I've worked on, showcasing my skills in frontend development,
                            UI/UX design, and problem-solving abilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter & Projects */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {filters.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setFilter(f.id)}
                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === f.id
                                        ? "bg-blue-600 text-white shadow-lg"
                                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-md"
                                    }`}
                            >
                                <f.icon />
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.title}
                                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                {/* Project Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center gap-1">
                                            <HiStar /> Featured
                                        </div>
                                    )}

                                    {/* Action Links */}
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <FaGithub /> Code
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition-colors"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Projects;
