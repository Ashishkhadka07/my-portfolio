import React from "react";
import { SkillsHeader, SkillCategories, SoftSkills, SkillsCTA } from "../components/Skills";

const Skills = () => {
    return (
        <main className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <SkillsHeader />
            <SkillCategories />
            <SoftSkills />
            <SkillsCTA />
        </main>
    );
};

export default Skills;
