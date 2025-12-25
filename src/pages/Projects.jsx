import React from "react";
import { ProjectsHeader, ProjectsGrid } from "../components/Projects";

const Projects = () => {
    return (
        <main className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <ProjectsHeader />
            <ProjectsGrid />
        </main>
    );
};

export default Projects;
