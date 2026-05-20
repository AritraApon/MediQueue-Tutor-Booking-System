"use client"
import { motion } from "framer-motion";
import { UserPlus, Briefcase, BellDot, Rocket } from "lucide-react";

const steps = [
  {
    title: "CREATE TUTOR PROFILE",
    desc: "Create your profile in minutes with your expertise and academic background to stand out.",
    icon: <UserPlus className="text-white" size={32} />,
    step: "1",
    align: "right"
  },
  {
    title: "APPLY FOR JOBS",
    desc: "Browse our latest TUITION JOBS page and start applying to the ones that match your skills.",
    icon: <Briefcase className="text-white" size={32} />,
    step: "2",
    align: "left"
  },
  {
    title: "GET FREE JOB ALERTS",
    desc: "Get updated tutoring job alerts via SMS/Email whenever new opportunities are posted.",
    icon: <BellDot className="text-white" size={32} />,
    step: "3",
    align: "right"
  },
  {
    title: "START EARNING",
    desc: "If the parents like the demo session, you can continue tuition and grow your income.",
    icon: <Rocket className="text-white" size={32} />,
    step: "4",
    align: "left"
  }
];

const HowToWork = () => {
  return (
    <section className="py-24 bg-blue-50 dark:bg-[#0A0F1C] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black text-blue-900 dark:text-white mb-4"
          >
            How it <span className="text-blue-600">Works?</span>
          </motion.h2>
          <p className="text-gray-500 text-lg">Your journey to excellence starts with these simple steps.</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Center Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 dark:bg-blue-900/30 -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: step.align === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${step.align === "right" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-0`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-[45%]">
                  <div className={`p-8 rounded-[32px] bg-white dark:bg-zinc-900 border border-blue-50 dark:border-white/5 shadow-xl shadow-blue-900/5 hover:border-blue-500/50 transition-all group relative overflow-hidden ${step.align === "right" ? "text-right" : "text-left"}`}>
                    <div className={`flex items-center gap-4 mb-4 ${step.align === "right" ? "flex-row-reverse" : "flex-row"}`}>
                       <div className="p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                          {step.icon}
                       </div>
                       <h3 className="text-xl font-black text-blue-900 dark:text-white tracking-tight">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Number Circle in the Middle */}
                <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center border-4 border-white dark:border-[#0A0F1C] shadow-lg">
                    <span className="text-blue-600 dark:text-blue-400 font-black text-xl">{step.step}</span>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;