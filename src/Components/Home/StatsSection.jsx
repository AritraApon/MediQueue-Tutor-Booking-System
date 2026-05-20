"use client"
import { motion } from "framer-motion";
import { Users, UserCheck, Briefcase, Star } from "lucide-react";

const stats = [
    {
        label: "Total Applied",
        value: "623825",
        icon: <Users size={28} className="text-blue-400" />,
        borderColor: "border-blue-500/30",
        shadowColor: "shadow-blue-500/20"
    },
    {
        label: "Total Tutors",
        value: "155516",
        icon: <UserCheck size={28} className="text-emerald-400" />,
        borderColor: "border-emerald-500/30",
        shadowColor: "shadow-emerald-500/20"
    },
    {
        label: "Live Tuition Jobs",
        value: "1155",
        icon: <Briefcase size={28} className="text-amber-400" />,
        borderColor: "border-amber-500/30",
        shadowColor: "shadow-amber-500/20"
    },
    {
        label: "Average Rating",
        value: "4.7",
        icon: <Star size={28} className="text-rose-400" />,
        borderColor: "border-rose-500/30",
        shadowColor: "shadow-rose-500/20"
    }
];

export const StatsSection = () => {
    return (
        <section className="py-20 my-10 bg-[#0A0F1C] relative overflow-hidden">
            {/* Background pattern similar to image */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative group p-8 rounded-[32px] bg-white/5 backdrop-blur-md border ${stat.borderColor} hover:bg-white/10 transition-all duration-300 shadow-2xl ${stat.shadowColor}`}
                        >
                            <div className="flex items-center gap-5">
                                {/* Icon Container */}
                                <div className={`p-4 rounded-2xl bg-gray-800/50 border ${stat.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className="text-3xl font-black text-white flex items-center">
                                        {stat.value}
                                        <span className="text-blue-500 ml-1">+</span>
                                    </h3>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>

                            {/* Subtle bottom line glow */}
                            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};