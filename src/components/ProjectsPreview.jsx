import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight, HiCollection, HiStar, HiTerminal } from "react-icons/hi";
import { projectsData } from "../data/projects"; // Path to your data file

const ProjectsPreview = () => {
  // Automatically get only featured projects for the home page
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <HiCollection className="text-3xl text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
              Featured Projects
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Selected work in Full Stack & Frontend
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
                  <HiTerminal className="text-2xl" />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="flex items-center gap-1 text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-amber-100 dark:border-amber-900/50 shadow-sm">
                    <HiStar /> Featured
                  </span>
                </div>
              </div>

              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-white dark:bg-gray-800 text-gray-500 border border-gray-200 dark:border-gray-700 uppercase"
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
                    className="flex-1 flex justify-center items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 shadow-lg shadow-blue-200 dark:shadow-none transition-all"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                ) : (
                  <button className="flex-1 px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-500 rounded-xl font-bold text-sm cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-blue-600 font-bold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <span>Explore All Projects</span>
            <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
