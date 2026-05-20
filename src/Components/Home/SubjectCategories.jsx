"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { GoTelescope, GoTelescopeFill } from "react-icons/go";
import { At, Flask, MathOperations } from "@gravity-ui/icons";
import { Globe } from "lucide-react";
import { PiMathOperations } from "react-icons/pi";

const categories = [
    { name: "Mathematics", icon: <MathOperations className="text-blue-500 text-3xl" />, tutors: "12+ Tutors" },
    { name: "Physics", icon: <GoTelescopeFill className="text-purple-500 text-3xl" />, tutors: "8+ Tutors" },
    { name: "Chemistry", icon: <Flask className="text-red-500 text-3xl" />, tutors: "9+ Tutors" },
    { name: "English", icon: <Globe className="text-green-500 text-3xl" />, tutors: "15+ Tutors" },
    { name: "ICT", icon: <At className="text-orange-500 text-3xl" />, tutors: "7+ Tutors" },

    { name: "Mathematics", icon: <PiMathOperations className="text-blue-500 text-3xl" />, tutors: "12+ Tutors" },

    { name: "Physics", icon: <GoTelescope  className="text-purple-500 text-3xl" />, tutors: "8+ Tutors" },
];

export const SubjectCategories = () => {
    return (
       
        <section className="py-24 bg-gradient-to-b from-white to-blue-50/50 dark:from-[#0A0F1C] dark:to-[#0d1425] overflow-hidden">
            <div className="container mx-auto px-6 mb-16 relative z-10">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-5xl font-black mb-4 tracking-tight text-blue-900 dark:text-white"
                    >
                        Popular Categories
                    </motion.h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore tutors by their expertise and start your learning journey with the best mentors.
                    </p>
                </div>
            </div>

            {/* Infinite Slider Container */}
            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {categories.map((cat, index) => (
                        <Link
                            key={index}
                            href={`/tutors?category=${cat.name}`}
                            className="group min-w-[280px] p-8 rounded-[32px] bg-white dark:bg-zinc-900/80 backdrop-blur-sm border border-blue-100 dark:border-white/5 shadow-xl shadow-blue-900/5 hover:border-blue-500 transition-all duration-300 text-center relative overflow-hidden inline-block"
                        >
                            {/* Inner Glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner">
                                    {cat.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                                    {cat.name}
                                </h3>

                                <div className="inline-block px-4 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold">
                                    {cat.tutors}
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>


            <div className="mt-10 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent w-full opacity-50" />
        </section>
    );
};