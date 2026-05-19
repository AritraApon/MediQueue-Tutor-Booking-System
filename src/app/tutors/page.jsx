import AllTutorsCard from "@/Components/Tutors/AllTutorsCard";
import { getAllTutorsInfo } from "@/lib/tutorData";
import Image from "next/image";
import Link from "next/link";

const TutorsPage = async () => {
    const tutorInfo = await getAllTutorsInfo();

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0A0F1C] py-12 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-blue-900 dark:text-white mb-4">
                        Find Your Perfect Tutor
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Explore our verified professional tutors across various subjects.
                    </p>
                </div>

                {/* Tutors Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8">
                    {tutorInfo.map((tutor) => (
                       <AllTutorsCard   key={tutor._id}  tutor={tutor} />
                    ))}
                </div>

                {/* No Data State */}
                {tutorInfo.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-gray-400">No Tutors Found!</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TutorsPage;