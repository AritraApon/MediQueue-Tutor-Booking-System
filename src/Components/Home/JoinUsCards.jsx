"use client"
import { motion } from "framer-motion";
import { UserSearch, GraduationCap, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const JoinUsCards = () => {
    return (
        <section className="py-20 bg-white dark:bg-[#0A0F1C]">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-black text-blue-900 dark:text-white mb-4">
                        Join <span className="text-blue-600">MediQueue</span> to solve your struggle
                    </h2>
                    <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* Card 1: For Students */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative group overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/10 dark:to-zinc-900 p-8 md:p-12 border border-blue-100 dark:border-white/5 shadow-xl shadow-blue-900/5"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex p-3 rounded-2xl bg-white dark:bg-blue-600 shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                                    <UserSearch className="text-blue-600 dark:text-white" size={32} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-blue-900 dark:text-white mb-4 leading-tight">
                                    Connect with the right tutor and move forward
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Find expert tutors who understand your learning goals and help you improve with confidence.
                                </p>
                                <Link href={'/add-tutor'}><button className="px-8 py-4 bg-[#115E59] hover:bg-[#0d4d49] text-white rounded-2xl font-bold flex items-center gap-2 mx-auto md:mx-0 transition-all shadow-lg shadow-teal-900/20">
                                    Request for a tutor <ArrowRight size={20} />
                                </button></Link>
                            </div>

                            {/* Placeholder for Student Image */}
                            <div className="w-full md:w-1/3">
                                <div className="relative aspect-square bg-blue-200/30 dark:bg-blue-500/10 rounded-3xl overflow-hidden border border-blue-200 dark:border-blue-500/20">
                                    <Image
                                        src="https://i.ibb.co.com/rGF09jk0/young-student-woman-with-backpack-holding-books-standing-isolated-white-background-231208-11115.jpg"
                                        alt="Student"
                                        width={1400}
                                        height={400}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: For Tutors */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 1, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative group overflow-hidden rounded-[40px] bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/10 dark:to-zinc-900 p-8 md:p-12 border border-teal-100 dark:border-white/5 shadow-xl shadow-teal-900/5"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-flex p-3 rounded-2xl bg-white dark:bg-teal-600 shadow-lg mb-6 group-hover:-rotate-6 transition-transform">
                                    <GraduationCap className="text-teal-600 dark:text-white" size={32} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black text-teal-900 dark:text-white mb-4 leading-tight">
                                    Join as a tutor, find a tuition for you
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    Join as a tutor to find students who match your expertise and schedule. Share your knowledge.
                                </p>
                                <Link href={'/add-tutor'}><button className="px-8 py-4 bg-[#115E59] hover:bg-[#0d4d49] text-white rounded-2xl font-bold flex items-center gap-2 mx-auto md:mx-0 transition-all shadow-lg shadow-teal-900/20">
                                    Join as a tutor <ArrowRight size={20} />
                                </button>
                                </Link>
                            </div>

                            {/* Placeholder for Tutor Image */}
                            <div className="w-full md:w-1/3">
                                <div className="relative aspect-square bg-teal-200/30 dark:bg-teal-500/10 rounded-3xl overflow-hidden border border-teal-200 dark:border-teal-500/20">
                                    <Image
                                        src="https://i.ibb.co.com/ZRVdGkTx/handsome-young-man-with-arms-crossed-white-background-23-2148222620.jpg"
                                        alt="Tutor"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};