"use client";
import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white/80 dark:bg-[#0d1117]/80 backdrop-blur-md">
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="w-20 h-20 border-4 border-transparent border-t-blue-600 border-r-blue-600 rounded-full"
                />

                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute w-12 h-12 border-4 border-transparent border-t-blue-400 border-l-blue-400 rounded-full"
                />

                {/* Center Glow Dot */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="absolute w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]"
                />
            </div>

            {/* Loading Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 flex flex-col items-center gap-2"
            >
                <h3 className="text-lg font-black tracking-[0.2em] uppercase text-gray-900 dark:text-white ml-2">
                    Loading
                </h3>
                {/* Progress bar line */}
                <div className="w-24 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-full h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent"
                    />
                </div>
            </motion.div>

            {/* Decorative background blurs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
    );
};

export default Loading;