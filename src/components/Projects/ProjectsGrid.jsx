import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiCollection, HiFilter, HiStar, HiClock } from "react-icons/hi";

import nationalHerbsImg from "../../assets/projects/national-herbs.png";
import colonyImg from "../../assets/projects/colony.png";
import maximsImg from "../../assets/projects/maxims.jpg";
import danalacImg from "../../assets/projects/danalac.jpg";
import nabaLuxeImg from "../../assets/projects/nabaluxe.jpg";
import vsNepalImg from "../../assets/projects/vsnepal.jpg";
import kurintarImg from "../../assets/projects/kurintar.jpg";
import eliteImg from "../../assets/projects/elite.png";

const ProjectsGrid = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "National Herbs",
      description:
        "A full-stack e-commerce storefront for organic and herbal products in Nepal.",
      tags: ["React", "Node.js", "TailwindCSS"],
      image: nationalHerbsImg,
      github: "#",
      live: "https://nationalherbo.com",
      category: "fullstack",
      featured: false,
      isOngoing: false,
    },
    {
      title: "Colony Production",
      description:
        "Supply and distribution platform for hospitality goods and equipment.",
      tags: ["React", "Logistics", "UI/UX"],
      image: colonyImg,
      github: "#",
      live: "https://colonysuppliers.com",
      category: "frontend",
      featured: false,
      isOngoing: false,
    },
    {
      title: "Maxims Banquets",
      description:
        "Full-stack event booking and management system for premium banquet halls.",
      tags: ["React", "Laravel", "MySQL"],
      image: maximsImg,
      github: "#",
      live: "https://maximsbanquet.com",
      category: "fullstack",
      featured: true,
      isOngoing: false,
    },
    {
      title: "Danalac Nepal",
      description:
        "Official frontend presence for an international infant formula brand.",
      tags: ["React", "TailwindCSS", "Clean-UI"],
      image: danalacImg,
      github: "#",
      live: "https://danalacnepal.com",
      category: "frontend",
      featured: false,
      isOngoing: false,
    },
    {
      title: "NabaLuxe",
      description:
        "Full-stack luxury beauty marketplace with integrated cart and user accounts.",
      tags: ["React", "Redux","Laravel", "MySQL"],
      image: nabaLuxeImg,
      github: "#",
      live: "https://nabaluxe.com",
      category: "fullstack",
      featured: true,
      isOngoing: false,
    },
    {
      title: "VS Nepal Pvt. Ltd.",
      description:
        "Enterprise solution for education and consulting (Under Development).",
      tags: ["React", "Vite", "Dashboard", "PHP", "Laravel", "MySQL"],
      image: vsNepalImg,
      github: "#",
      live: "https://vsnepal.com",
      category: "fullstack",
      featured: true,
      isOngoing: false,
    },
    {
      title: "Kurintar Retreat",
      description:
        "Full-stack luxury resort booking system with real-time availability.",
      tags: ["React", "PHP", "Laravel", "Hospitality"],
      image: kurintarImg,
      github: "#",
      live: "https://kurintarretreat.com",
      category: "fullstack",
      featured: false,
      isOngoing: false,
    },
    {
      title: "Elite Hospitality",
      description: "Service management for premium hospitality assets.",
      tags: ["React", "Fullstack", "Admin-Panel"],
      image: eliteImg,
      github: "#",
      live: "#",
      category: "fullstack",
      featured: false,
      isOngoing: true,
    },
    {
      title: "Media for Culture",
      description: "Media for Culture Production mediahub  which makes movies and the documentaries.",
      tags: ["React", "Movie-based"],
      image: eliteImg,
      github: "#",
      live: "#",
      category: "frontend",
      featured: false,
      isOngoing: true,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: HiCollection },
    { id: "frontend", label: "Frontend", icon: HiFilter },
    { id: "fullstack", label: "Full Stack", icon: HiFilter },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === f.id
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
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {project.featured && (
                    <div className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <HiStar /> Featured
                    </div>
                  )}
                  {project.isOngoing && (
                    <div className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <HiClock /> In Progress
                    </div>
                  )}
                </div>

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
                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <span className="px-4 py-2 bg-gray-500 text-white rounded-full font-medium text-sm cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

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
  );
};

export default ProjectsGrid;
