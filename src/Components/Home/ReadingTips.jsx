"use client"
import { motion } from "framer-motion";
import {
  CircleCheck,
  Clock,
  BookOpen,
  Brain,
  Target,
  ArrowUpRight
} from "lucide-react";

const tips = [
    {
        title: "Set Clear Goals",
        desc: "Break down your study sessions into small, manageable targets for better focus.",
        icon: <Target className="text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Active Recall",
        desc: "Test yourself frequently instead of just re-reading to strengthen memory.",
        icon: <Brain className="text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Pomodoro Tech",
        desc: "Study for 25 mins and take a 5-min break to keep your mind fresh and alert.",
        icon: <Clock className="text-blue-600 dark:text-blue-400" />,
    },
    {
        title: "Note Taking",
        desc: "Write down key points in your own words to ensure deeper understanding.",
        icon: <BookOpen className="text-blue-600 dark:text-blue-400" />,
    }
];

export const ReadingTips = () => {
    return (
        <section className="py-24 bg-gray-50 dark:bg-[#0A0F1C] relative overflow-hidden">
            {/* Background subtle glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm"
                    >
                        Success Strategy
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mt-3 mb-6"
                    >
                        Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Learning</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                    >
                        Elevate your performance with scientifically proven study methods and focused techniques.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tips.map((tip, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-[40px] bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-100 dark:border-white/5 hover:border-blue-500/50 transition-all duration-500 shadow-xl shadow-blue-900/5"
                        >
                            {/* Inner Glow Effect on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                                    {tip.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {tip.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    {tip.desc}
                                </p>

                                <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm gap-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    Read Insights <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};