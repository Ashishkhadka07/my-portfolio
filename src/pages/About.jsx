import React from "react";
import { AboutHero, AboutStats, Experience, Education, AboutCTA } from "../components/About";

const About = () => {
    return (
        <main className="pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <AboutHero />
            <AboutStats />
            <Experience />
            <Education />
            <AboutCTA />
        </main>
    );
};

export default About;
