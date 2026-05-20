"use client"
import { motion } from "framer-motion";
import { Search, MonitorPlay, UserCheck, GraduationCap } from "lucide-react";

const steps = [
    {
        title: "Search or Post",
        desc: "Search for tutors or post your tuition requirements to get the best match.",
        icon: <Search className="text-blue-600" size={32} />,
        step: "1"
    },
    {
        title: "Free Demo Session",
        desc: "Get a free one-to-one demo with your preferred tutor to ensure quality.",
        icon: <MonitorPlay className="text-blue-600" size={32} />,
        step: "2"
    },
    {
        title: "Hire Your Tutor",
        desc: "Confirm your tutor after the demo session and start your journey.",
        icon: <UserCheck className="text-blue-600" size={32} />,
        step: "3"
    },
    {
        title: "Get Results",
        desc: "Boost confidence and improve academic performance with expert guidance.",
        icon: <GraduationCap className="text-blue-600" size={32} />,
        step: "4"
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#0A0F1C]">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
                        Here's how it works for <span className="text-blue-600">Students</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Only for Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 dark:bg-blue-900/30 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Step Number Badge */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/40 border-4 border-white dark:border-[#0A0F1C] z-20 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>

                                {/* Card Content */}
                                {/* Card Content */}
                                <div className="pt-12 pb-10 px-8 rounded-[40px] 
    /* Glass Effect */
    bg-gradient-to-br from-blue-50/50 to-white/30 
    dark:from-blue-900/10 dark:to-zinc-900/50 
    backdrop-blur-xl 
    /* Borders & Shadows */
    border border-blue-100/50 dark:border-white/5 
    shadow-2xl shadow-blue-900/5 
    /* Hover Effects */
    group-hover:border-blue-500/50 group-hover:shadow-blue-500/10 
    transition-all duration-500 text-center relative overflow-hidden"
                                >
                                    {/* Hover Glow Background */}
                                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="mb-6 w-20 h-20 bg-blue-100/50 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner">
                                            {item.icon}
                                        </div>

                                        <h3 className="text-xl font-extrabold text-blue-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};