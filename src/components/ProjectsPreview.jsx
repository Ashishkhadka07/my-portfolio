import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight, HiCollection, HiStar } from "react-icons/hi";

import maximsImg from "../assets/projects/maxims.jpg";
import danalacImg from "../assets/projects/danalac.jpg";
import nationalHerbsImg from "../assets/projects/national-herbs.png";

const ProjectsPreview = () => {
  const projects = [
    {
      title: "Maxims Banquets & Events",
      description:
        "A premium full-stack event management and venue booking platform for one of Nepal's leading banquet chains.",
      tags: ["React", "Hospitality", "Node.js"],
      image: maximsImg, // Using imported local asset
      github: "#",
      live: "https://maxims.com",
      featured: true,
      category: "fullstack",
    },
    {
      title: "Danalac Nepal",
      description:
        "Official digital presence for Danalac infant formula in Nepal, focusing on product showcase and nutrition info.",
      tags: ["React", "Healthcare", "UX/UI"],
      image: danalacImg,
      github: "#",
      live: "https://danalacnepal.com",
      featured: true,
      category: "frontend",
    },
    {
      title: "National Herbs",
      description:
        "Full-stack e-commerce platform for organic and herbal products, featuring clean design and product filtering.",
      tags: ["React", "E-Commerce", "Express"],
      image: nationalHerbsImg,
      github: "#",
      live: "https://nationalherbo.com",
      featured: true,
      category: "fullstack",
    },
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <HiCollection className="text-3xl text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Showcasing my best work in Full Stack & Frontend development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
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

                {/* Featured & Category Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {project.featured && (
                    <div className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                      <HiStar /> Featured
                    </div>
                  )}
                  <div
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg ${
                      project.category === "fullstack"
                        ? "bg-purple-600 text-white"
                        : "bg-emerald-600 text-white"
                    }`}
                  >
                    {project.category === "fullstack"
                      ? "Full Stack"
                      : "Frontend"}
                  </div>
                </div>

                {/* Action Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:shadow-md transition-all duration-300"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:shadow-md transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
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

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300"
          >
            <span>Explore All Projects</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
