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
                        <div
                            key={tutor._id}
                            className="card bg-white dark:bg-[#111827] shadow-xl border border-blue-50 dark:border-blue-900/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* Tutor Photo */}
                            <figure className="px-4 pt-4">
                                <Image
                                    src={tutor.photo}
                                    alt={tutor.tutorName}
                                    width={400}
                                    height={400}
                                    className="rounded-2xl h-48 w-full object-cover shadow-md"
                                />
                            </figure>

                            <div className="card-body p-6">
                                {/* Subject Badge */}
                                <div className="badge badge-primary badge-outline text-xs font-bold mb-2 uppercase tracking-tighter">
                                    {tutor.subject}
                                </div>

                                <h2 className="card-title text-blue-900 dark:text-white font-bold text-xl">
                                    {tutor.tutorName}
                                </h2>

                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1 mb-4">
                                    {tutor.experience} of experience
                                </p>

                                {/* Pricing & Mode */}
                                <div className="flex justify-between items-center bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl mb-4">
                                    <div>
                                        <span className="block text-[10px] uppercase font-bold text-blue-600">Hourly Fee</span>
                                        <span className="text-lg font-black text-blue-900 dark:text-blue-100">${tutor.hourlyFee}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-[10px] uppercase font-bold text-blue-600">Mode</span>
                                        <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">{tutor.teachingMode}</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="card-actions mt-2">
                                    <Link
                                        href={`/tutor/${tutor._id}`}
                                        className="btn btn-primary w-full rounded-xl normal-case font-bold shadow-lg shadow-blue-500/20"
                                    >
                                        View Profile
                                    </Link>
                                </div>
                            </div>
                        </div>
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