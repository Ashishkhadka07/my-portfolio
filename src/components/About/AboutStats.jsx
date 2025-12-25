import React from "react";
import { HiCode, HiLightningBolt, HiUserGroup } from "react-icons/hi";

const AboutStats = () => {
  const stats = [
    { icon: HiCode, value: "5+", label: "Projects Completed" },
    { icon: HiLightningBolt, value: "1+", label: "Years Experience" },
    { icon: HiUserGroup, value: "7+", label: "Happy Clients" },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <stat.icon className="text-3xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
