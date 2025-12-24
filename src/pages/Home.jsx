import React from "react";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import SkillsShowcase from "../components/SkillsShowcase";
import ProjectsPreview from "../components/ProjectsPreview";
import CTASection from "../components/CTASection";

const Home = () => {
    return (
        <main className="overflow-hidden">
            <Hero />
            <AboutPreview />
            <SkillsShowcase />
            <ProjectsPreview />
            <CTASection />
        </main>
    );
};

export default Home;
