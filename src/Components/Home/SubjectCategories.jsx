"use client"
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
    {
        name: "Mathematics",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-500">
                <path d="M18 15h-6v6m0-6h6v-6m-6 6H6v-6m0 6h6v6M9 9h.01M15 9h.01M9 15h.01M15 15h.01" />
                <rect width="18" height="18" x="3" y="3" rx="2" />
            </svg>
        ),
        tutors: "12+ Tutors"
    },
    {
        name: "Physics",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-500">
                <circle cx="12" cy="12" r="7" />
                <path d="M12 9v3l2 2" />
                <path d="M16.24 7.76l1.41-1.41" />
                <path d="M17 12h2" />
                <path d="M16.24 16.24l1.41 1.41" />
                <path d="M12 17v2" />
                <path d="M7.76 16.24l-1.41 1.41" />
                <path d="M5 12h2" />
                <path d="M7.76 7.76l-1.41-1.41" />
            </svg>
        ),
        tutors: "8+ Tutors"
    },
    {
        name: "Chemistry",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-red-500">
                <path d="M6 3v12a6 6 0 1 0 12 0V3" />
                <path d="M6 9h12" />
                <path d="M9 3h6" />
            </svg>
        ),
        tutors: "9+ Tutors"
    },
    {
        name: "English",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-green-500">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        tutors: "15+ Tutors"
    },
    {
        name: "ICT",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-500">
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
            </svg>
        ),
        tutors: "7+ Tutors"
    }
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

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...categories, ...categories].map((cat, index) => (
                        <Link
                            key={index}
                            href={`/tutors?category=${cat.name}`}
                            className="group min-w-[280px] p-8 rounded-[32px] bg-white dark:bg-zinc-900/80 backdrop-blur-sm border border-blue-100 dark:border-white/5 shadow-xl shadow-blue-900/5 hover:border-blue-500 transition-all duration-300 text-center relative overflow-hidden inline-block"
                        >
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