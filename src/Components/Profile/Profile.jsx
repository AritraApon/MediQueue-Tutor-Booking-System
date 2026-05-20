'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import EditModal from "./EditModal";
import { CircleArrowLeft } from "lucide-react";


const ProfileCard = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-16 px-4 bg-[#f4f7ff] dark:bg-zinc-950 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">

                <motion.div
                    className="card w-full max-w-[420px] bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden rounded-[2.5rem] border border-white dark:border-zinc-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >

                    <div className="h-36 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400"></div>


                    <figure className="relative -mt-20 flex justify-center">
                        <div >
                            <div >
                                <Image
                                    src={user?.image || '/avatar.png'}
                                    alt="Profile"
                                    width={120}
                                    height={120}
                                    className="w-28 h-28 rounded-full object-cover border"
                                />
                            </div>
                        </div>
                    </figure>

                    <div className="card-body items-center text-center px-8 pb-12 pt-4">

                        <h2 className="text-3xl font-black bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                            {user?.name || "Profile Name"}
                        </h2>

                        <div className="mt-2 px-4 py-1 bg-blue-50 dark:bg-zinc-800 text-blue-700 dark:text-blue-400 rounded-full text-sm font-bold border border-blue-100 dark:border-zinc-700">
                            {user?.email}
                        </div>

                        <div className="divider w-2/3 mx-auto my-6 opacity-20"></div>


                        <div className="card-actions w-full px-4">

                            <EditModal />
                        </div>
                    </div>
                </motion.div>


                <div className="mt-10">
                    <Link href={'/'}>
                        <button className="group flex items-center gap-3 text-slate-500 hover:text-blue-600 font-bold transition-all duration-300">
                            <CircleArrowLeft className="text-2xl group-hover:-translate-x-2 transition-transform duration-300" />
                            <span className="text-xl">Back to Home</span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>

    );
};

export default ProfileCard;