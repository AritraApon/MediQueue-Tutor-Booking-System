import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllTutorsCard = ({ tutor }) => {
    return (
        <div>
            <div
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
                    <div className="mt-4">
                        <Link
                            href={`/tutors/${tutor._id}`}
                            className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:shadow-blue-500/40 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            <span>Book Session</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllTutorsCard;