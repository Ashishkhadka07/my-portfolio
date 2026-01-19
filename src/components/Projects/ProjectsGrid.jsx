import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  HiCollection,
  HiFilter,
  HiStar,
  HiClock,
  HiTerminal,
} from "react-icons/hi";
import { projectsData } from "../../data/projects"; 

const ProjectsGrid = () => {
  const [filter, setFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", icon: HiCollection },
    { id: "frontend", label: "Frontend", icon: HiFilter },
    { id: "fullstack", label: "Full Stack", icon: HiFilter },
  ];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Toolbar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                filter === f.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400"
              }`}
            >
              <f.icon /> {f.label}
            </button>
          ))}
        </div>

        {/* The Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    <HiTerminal className="text-2xl" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {project.featured && (
                      <span className="flex items-center gap-1 text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-amber-100 dark:border-amber-900/50">
                        <HiStar /> Featured
                      </span>
                    )}
                    {project.isOngoing && (
                      <span className="flex items-center gap-1 text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-blue-100 dark:border-blue-900/50">
                        <HiClock /> In Progress
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-semibold rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase tracking-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {project.live !== "#" ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                ) : (
                  <button className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-xl font-bold text-sm cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
