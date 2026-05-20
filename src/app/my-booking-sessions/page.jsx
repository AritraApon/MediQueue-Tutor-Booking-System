import CancelBookingButton from '@/Components/MyBooking/CancelBookingButton';
import { auth } from '@/lib/auth';
import { getBookingData } from '@/lib/tutorData';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: "My Bookings | MediQueue",
  description: "Track your scheduled learning sessions and tutors in one place.",
};

const MyBookingSessions = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;
    const id = user?.id;


    const bookings = await getBookingData(id);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                        My Booked Sessions
                    </h1>
                    <p className="text-gray-500 mt-1 font-medium">
                        Track and manage your scheduled learning sessions with experts.
                    </p>
                </div>
                <div className="bg-blue-600/5 dark:bg-blue-500/10 px-6 py-3 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                    <p className="text-blue-700 dark:text-blue-400 font-bold flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Total Bookings: {bookings.length}
                    </p>
                </div>
            </div>

            {bookings.length === 0 ? (
                /* Empty State Design */
                <div className="flex flex-col items-center justify-center py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-gray-800">
                    <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-3xl shadow-xl flex items-center justify-center mb-6 rotate-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">No sessions found!</h3>
                    <p className="text-gray-500 mb-8 max-w-sm text-center">It looks like you haven't booked any tutors yet. Start your learning journey today!</p>
                    <Link href="/tutors" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-200 dark:shadow-none uppercase text-xs tracking-[0.2em]">
                        Explore Tutors
                    </Link>
                </div>
            ) : (
                /* Responsive Table Section */
                <div className="bg-white dark:bg-[#0d1117] rounded-[2.5rem] shadow-2xl shadow-gray-200/40 dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <div className="overflow-x-auto text-nowrap">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/80 dark:bg-gray-800/40 border-b border-gray-100 dark:border-gray-800">
                                    <th className="p-8 text-xs font-black text-gray-400 uppercase tracking-[0.15em]">Tutor Details</th>
                                    <th className="p-8 text-xs font-black text-gray-400 uppercase tracking-[0.15em]">Student Details</th>
                                    <th className="p-8 text-xs font-black text-gray-400 uppercase tracking-[0.15em] text-center">Booking Status</th>
                                    <th className="p-8 text-xs font-black text-gray-400 uppercase tracking-[0.15em] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                                {bookings.map((booking) => (
                                    <tr key={booking._id} className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors group">
                                        {/* Tutor Column */}
                                        <td className="p-8">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-200 dark:shadow-none">
                                                    {booking.tutorName?.charAt(0)}
                                                </div>
                                                <span className="font-bold text-gray-800 dark:text-gray-100 text-lg">{booking.tutorName}</span>
                                            </div>
                                        </td>

                                        {/* Student Info Column (Email + Phone) */}
                                        <td className="p-8">
                                            <div className="flex flex-col gap-2">
                                                <span className="font-bold text-gray-800 dark:text-gray-200 underline decoration-blue-500/30 underline-offset-4 text-base">
                                                    {booking.studentName}
                                                </span>
                                                <div className="flex flex-col space-y-1">
                                                    <span className="flex items-center gap-2 text-xs text-gray-500 font-medium hover:text-blue-500 transition-colors">
                                                        <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                                        {booking.studentEmail}
                                                    </span>
                                                    <span className="flex items-center gap-2 text-xs text-gray-500 font-medium hover:text-green-500 transition-colors">
                                                        <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                                        {booking.phone || "No Phone"}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Status Column */}
                                        <td className="p-8 text-center">
                                            <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${
                                                booking.status === 'Cancelled'
                                                ? 'bg-red-50 text-red-600 border border-red-100 dark:bg-red-900/20 dark:border-red-800'
                                                : 'bg-green-50 text-green-600 border border-green-100 dark:bg-green-900/20 dark:border-green-800'
                                            }`}>
                                                {booking.status}
                                            </span>
                                        </td>

                                        {/* Action Column */}
                                        <td className="p-8 text-right">
                                            <CancelBookingButton booking={booking} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookingSessions;