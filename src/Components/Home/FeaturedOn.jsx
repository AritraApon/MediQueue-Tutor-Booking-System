"use client"
import { motion } from "framer-motion";

const brands = [
    { name: "Prothom Alo", logo: "Prothom Alo" },
    { name: "The Daily Star", logo: "The Daily Star" },
    { name: "Samakal", logo: "Samakal" },
    { name: "Ittefaq", logo: "Ittefaq" },
    { name: "Champs21", logo: "Champs21" },
    { name: "Business Post", logo: "Business Post" },
];

export const FeaturedOn = () => {

    const duplicatedBrands = [...brands, ...brands, ...brands];

    return (
        <section className="py-16 bg-gray-50 dark:bg-[#0A0F1C]/50 border-y border-blue-50 dark:border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-300">
                    We were <span className="text-blue-600 dark:text-blue-400">Featured</span> on
                </h2>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        >

                            <span className="text-2xl md:text-3xl font-black text-blue-900 dark:text-white hover:text-blue-600 transition-colors tracking-tighter uppercase italic">
                                {brand.logo}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Fade effect on sides for premium look */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0A0F1C] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0A0F1C] to-transparent z-10" />
            </div>
        </section>
    );
};