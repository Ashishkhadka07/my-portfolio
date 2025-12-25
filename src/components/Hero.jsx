import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiSparkles, HiDownload } from "react-icons/hi";
import logo from "../assets/logo.jpg";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ["Frontend Developer", "React Enthusiast"];

  // Typing animation effect
  useEffect(() => {
    const currentWord = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          if (displayText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        {/* Dark mode gradient orbs */}
        <div className="hidden dark:block absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="hidden dark:block absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <HiSparkles className="text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Ashish Khadka
                </span>
              </h1>

              {/* Typing Animation */}
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
                  I'm a{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating beautiful, responsive, and user-friendly
              web experiences. I transform ideas into elegant digital solutions
              that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:shadow-xl border-2 border-blue-600 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <HiSparkles />
                <span>View My Work</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <span>Let's Talk</span>
                <span className="group-hover:rotate-12 transition-transform">
                  💬
                </span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <span className="text-gray-500 dark:text-gray-500 text-sm">
                Find me on
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Ashishkhadka07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-khadka-b31625212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-600 hover:border-blue-300 dark:hover:border-blue-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Image container */}
              <div className="relative">
                {/* Blue ring border */}
                <div className="absolute -inset-2 bg-blue-600 dark:bg-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                {/* Image */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:shadow-blue-200/50 dark:group-hover:shadow-blue-900/50 transition-shadow duration-300">
                  <img
                    src={logo}
                    alt="Ashish Khadka"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -right-4 top-8 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span className="text-2xl">⚛️</span>
                  <span className="ml-2 text-sm text-gray-900 dark:text-white font-medium">
                    React
                  </span>
                </div>

                <div className="absolute -left-4 bottom-8 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span className="text-2xl">💻</span>
                  <span className="ml-2 text-sm text-gray-900 dark:text-white font-medium">
                    Frontend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-500 dark:text-gray-500 text-sm">
            Scroll Down
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
            <div className="w-1 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
