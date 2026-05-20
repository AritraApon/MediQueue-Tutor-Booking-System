import Link from "next/link";
import AllTutorsCard from "../Tutors/AllTutorsCard";

const TutorsCards = ({ tutorInfo }) => {
    return (
        <div className="py-12 bg-gray-50/50 dark:bg-transparent">
            {/* Header Section */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3">
                    Our Featured Tutors
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                    Learn from the best experts in various fields. Book your session today and boost your skills.
                </p>
            </div>

           {/* search bar / */}


            {/* Grid Section */}
            <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    tutorInfo.map((tutor) => (
                        <AllTutorsCard key={tutor._id } tutor={tutor} />
                    ))
                }
            </div>

            {/* See All Tutors Button */}
            <div className="flex justify-center mt-12 px-4">
                <Link href="/tutors">
                    <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-200 dark:shadow-none flex items-center gap-2 overflow-hidden">
                        <span className="relative z-10 uppercase text-xs tracking-widest">See All Tutors</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TutorsCards;