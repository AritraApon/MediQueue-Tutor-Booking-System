"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Who can use this platform?",
        answer: "Any student looking for expert guidance or any qualified tutor looking to share their knowledge can join our platform."
    },
    {
        question: "Is SkillSphere free to use?",
        answer: "Registration is completely free. We offer both free and premium features depending on your requirements."
    },
    {
        question: "How do I create a tutor account?",
        answer: "Simply click on the 'Become a Tutor' button, fill in your academic details, and complete your profile to get started."
    },
    {
        question: "How do I become a Pro Tutor?",
        answer: "Pro status is awarded based on your teaching history, student ratings, and profile completeness."
    },
    {
        question: "How can I get tuition on MediQueue?",
        answer: "Once your profile is verified, you can apply directly to the tuition jobs posted by guardians or students."
    }
];

export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        // BG: Blue Violet Gradient (Light theme focus)
        <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-violet-800 relative overflow-hidden">

            {/* Soft Glow Overlays */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold mb-4 shadow-xl"
                    >
                        <HelpCircle size={16} /> FAQ
                    </motion.div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 drop-shadow-md">
                        Frequently Asked <span className="text-blue-200">Questions</span>
                    </h2>
                    <p className="text-blue-50 max-w-2xl mx-auto text-lg leading-relaxed opacity-90">
                        Everything you need to know about our platform. If you have more questions, feel free to contact us.
                    </p>
                </div>

                {/* FAQ Accordion List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="group"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all duration-500 shadow-lg ${activeIndex === index
                                    ? "bg-white text-blue-900 border-white"
                                    : "bg-white/10 border-white/20 hover:bg-white/20 text-white"
                                    }`}
                            >
                                <span className={`text-lg font-bold text-left leading-tight`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 ml-4 p-1.5 rounded-xl transition-all duration-300 ${activeIndex === index
                                    ? "bg-blue-600 text-white rotate-180"
                                    : "bg-white/20 text-white"
                                    }`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-7 text-blue-900 font-medium leading-relaxed bg-white/90 backdrop-blur-md rounded-b-2xl mt-[-10px] pt-10 shadow-inner">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};