import React from "react";
import { HiChat } from "react-icons/hi";

const ContactHeader = () => {
    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-4">
                        <HiChat className="text-3xl text-blue-600 dark:text-blue-400" />
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
                        </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Have a project in mind or just want to say hello? I'd love to hear from you.
                        Let's create something amazing together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactHeader;
