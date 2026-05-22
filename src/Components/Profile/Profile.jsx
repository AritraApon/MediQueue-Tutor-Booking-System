'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import EditModal from "./EditModal";
import { CircleArrowLeft, LogOut, BookOpen, Users, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

const ProfileCard = ({ myBookings , myAddTutors  }) => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/login");
    };

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-950">
                <span className="loading loading-spinner loading-lg text-blue-600"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-zinc-950 flex flex-col items-center">
            <div className="w-full max-w-4xl">

                {/* Back Button */}
                <div className="mb-8">
                    <Link href={'/'} className="group inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold transition-colors">
                        <CircleArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: User Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-1 bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden h-fit"
                    >
                        <div className="h-24 w-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                        <div className="px-6 pb-8">
                            <div className="relative -mt-12 flex justify-center mb-4">
                                <Image
                                    src={user?.image || '/avatar.png'}
                                    alt="Profile"
                                    width={100}
                                    height={100}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-lg"
                                />
                            </div>
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white truncate">
                                    {user?.name || "User Name"}
                                </h2>
                                <div className="flex items-center justify-center gap-2 mt-2 text-gray-500 dark:text-zinc-400 text-sm">
                                    <Mail className="w-4 h-4" />
                                    <span className="truncate">{user?.email}</span>
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                <EditModal />
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 font-bold hover:bg-red-100 dark:hover:bg-red-900/30 transition-all active:scale-95"
                                >
                                    <LogOut className="w-5 h-5" />
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Statistics & Activities */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {/* Booking Stat Card */}

                            <div  className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-lg border border-gray-100 dark:border-zinc-800 flex items-center gap-6">
                                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <Link href={'/my-booking-sessions'}>
                                    <div>
                                        <p className="text-gray-500 dark:text-zinc-400 font-medium">My Bookings</p>
                                        <h3 className="text-3xl font-black text-gray-800 dark:text-white">
                                            {myBookings?.length || 0}
                                        </h3>
                                    </div>
                                </Link>
                            </div>


                            {/* Tutors Stat Card */}
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] shadow-lg border border-gray-100 dark:border-zinc-800 flex items-center gap-6">
                                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl text-indigo-600 dark:text-indigo-400">
                                    <Users className="w-8 h-8" />
                                </div>

                                <Link href={'/my-tutor'}>

                                    <div>
                                        <p className="text-gray-500 dark:text-zinc-400 font-medium">My Tutors</p>
                                        <h3 className="text-3xl font-black text-gray-800 dark:text-white">
                                            {myAddTutors?.length || 0}
                                        </h3>
                                    </div>
                                </Link>

                            </div>
                        </motion.div>

                        {/* Welcome/Info Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-gray-800 to-black dark:from-zinc-900 dark:to-black p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">Welcome back, {user?.name?.split(' ')[0]}! 👋</h3>
                                <p className="text-gray-300">Manage your appointments and sessions easily from this dashboard. Keep learning and growing!</p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileCard;