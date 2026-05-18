"use client"
import { Code, Display, Flask, Globe, MathOperations } from "@gravity-ui/icons"
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
    { name: "Mathematics", icon: <MathOperations className="text-blue-500 text-3xl" />, tutors: "120+ Tutors" },
    { name: "Web Development", icon: <Code className="text-purple-500 text-3xl" />, tutors: "85+ Tutors" },
    { name: "Languages", icon: <Globe className="text-green-500 text-3xl" />, tutors: "200+ Tutors" },
    { name: "Science", icon: <Flask className="text-red-500 text-3xl" />, tutors: "90+ Tutors" },
    { name: "Design", icon: <Display className="text-orange-500 text-3xl" />, tutors: "60+ Tutors" },
];

export const SubjectCategories = () => {
    return (
        <section className="py-20 container mx-auto px-6">
            <div className="text-center mb-14">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 tracking-tight">
                    Popular Categories
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                    Explore tutors by their expertise and start your learning journey with the best mentors.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {categories.map((cat, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href={`/tutors?category=${cat.name.toLowerCase()}`}
                            className="group block p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 text-center relative overflow-hidden"
                        >
                            {/* Background subtle glow on hover */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gray-50 dark:bg-zinc-800 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                                    {cat.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                                    {cat.name}
                                </h3>

                                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                                    {cat.tutors}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};