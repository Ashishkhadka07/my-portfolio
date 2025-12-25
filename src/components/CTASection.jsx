import React from "react";
import { Link } from "react-router-dom";
import { HiMail, HiArrowRight, HiSparkles, HiPhone } from "react-icons/hi";

const CTASection = () => {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg text-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <HiSparkles className="text-3xl text-blue-600 dark:text-blue-400" />
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Let's Work{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Together
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or just want to say hello? I'd love to
                hear from you! Let's create something amazing together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-white dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white hover:shadow-xl border-2 border-blue-600 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
              >
                <HiMail className="text-xl" />
                <span>Get In Touch</span>
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="mailto:aasheeshkhadka@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <span>aasheeshkhadka@gmail.com</span>
              </a>
              <a
                href="tel:+9779861898097"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <HiPhone className="text-xl" />
                <span>+977 9861898097</span>
              </a>
            </div>

            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">
                Currently available for freelance work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
