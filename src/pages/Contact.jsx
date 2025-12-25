import React from "react";
import { ContactHeader, ContactInfo, ContactForm } from "../components/Contact";

const Contact = () => {
    return (
        <main className="pt-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <ContactHeader />
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2">
                            <ContactInfo />
                        </div>
                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
