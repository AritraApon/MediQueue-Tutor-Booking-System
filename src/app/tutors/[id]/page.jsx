import BookSessionFrom from "@/Components/Tutors/BookSessionFrom";
import { getTutorDetailsInfo } from "@/lib/tutorData";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar2DateFill } from "react-icons/bs";

const TutorDetailsPage = async ({ params }) => {
    const { id } = await params;
    const tutor = await getTutorDetailsInfo(id);

    if (!tutor) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-red-500">Tutor Not Found!</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#070B14] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                {/* BACK BUTTON */}
                <Link href="/tutors" className="inline-flex items-center text-blue-600 font-semibold mb-8 hover:gap-2 transition-all gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Back to All Tutors
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN: IMAGE & QUICK INFO */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-[#111827] rounded-[2.5rem] p-6 shadow-xl shadow-blue-500/5 border border-blue-50 dark:border-blue-900/20 sticky top-10">
                            <Image
                                src={tutor.photo}
                                alt={tutor.tutorName}
                                width={400}
                                height={400}
                                className="w-full h-80 object-cover rounded-[2rem] shadow-md mb-6"
                            />
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-3">
                                    <span className="text-gray-500 dark:text-gray-400 font-medium">Hourly Fee</span>
                                    <span className="text-2xl font-black text-blue-600">${tutor.hourlyFee}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-3">
                                    <span className="text-gray-500 dark:text-gray-400 font-medium">Session Start Date</span>
                                    <span className="flex items-center gap-1 font-bold dark:text-white">
                                     <BsCalendar2DateFill /> {tutor?.sessionDate }
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pb-1">
                                    <span className="text-gray-500 dark:text-gray-400 font-medium">Available Slots</span>
                                    <span className="badge px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-bold">
                                        {tutor.totalSlot} Left
                                    </span>
                                </div>
                            </div>

                            {/* BOOK SESSION BUTTON */}
                          <BookSessionFrom tutor={tutor}   />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: DETAILS */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* MAIN INFO CARD */}
                        <div className="bg-white dark:bg-[#111827] rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-blue-500/5 border border-blue-50 dark:border-blue-900/20">
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {tutor.subject}
                                </span>
                                <span className="px-4 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {tutor.teachingMode}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-blue-900 dark:text-white mb-4 leading-tight">
                                {tutor.tutorName}
                            </h1>

                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                I am an expert in <span className="font-bold text-blue-600">{tutor.subject}</span> with over <span className="font-bold text-blue-600">{tutor.experience}</span>.
                                Currently providing professional sessions in <span className="font-medium text-gray-900 dark:text-gray-200">{tutor.location}</span>.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl text-orange-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Available Time</h4>
                                        <p className="text-blue-900 dark:text-white font-bold">{tutor.availableTime}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Teaching Days</h4>
                                        <p className="text-blue-900 dark:text-white font-bold">{tutor.availableDays}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* EXPERIENCE SECTION */}
                        <div className="bg-white dark:bg-[#111827] rounded-[2.5rem] p-8 shadow-xl shadow-blue-500/5 border border-blue-50 dark:border-blue-900/20">
                            <h3 className="text-xl font-black text-blue-900 dark:text-white mb-4">Background & Experience</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                                {tutor.experience}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDetailsPage;