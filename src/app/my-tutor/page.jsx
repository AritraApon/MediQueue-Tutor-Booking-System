import EditForm from "@/Components/MyTutor/EditForm";
import { auth } from "@/lib/auth";
import { getMyAddTutorsInfo } from "@/lib/tutorData";
import { headers } from "next/headers";
import Image from "next/image";
import { FaCheckToSlot } from "react-icons/fa6";

const MyTutorPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-red-500">Please Login first!</p>
            </div>
        );
    }
    const myTutors = await getMyAddTutorsInfo(user);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#070B14] py-10 px-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-[#111827] rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">

                {/* Header Section */}
                <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-blue-50/50 dark:bg-blue-900/10">
                    <div>
                        <h1 className="text-2xl font-black text-blue-900 dark:text-white">My Added Tutors</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Manage all the tutor profiles you have created.</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold">
                        Total: {myTutors?.length || 0}
                    </span>
                </div>

                {/* Table Section */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-[#161e2c] text-gray-400 text-[11px] uppercase tracking-widest font-black">
                                <th className="px-8 py-4">Tutor Info</th>
                                <th className="px-6 py-4">Subject</th>
                                <th className="px-6 py-4">Price/Hr</th>
                                <th className="px-6 py-4">Slot</th>
                                <th className="px-6 py-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                            {myTutors?.map((tutor) => (
                                <tr key={tutor._id} className="hover:bg-blue-50/30 dark:hover:bg-blue-900/5 transition-colors group">
                                    {/* Name & Photo */}
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm ring-2 ring-blue-50 dark:ring-blue-900/20">
                                                <Image src={tutor.photo} alt={tutor.tutorName} width={40} height={40} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-blue-900 dark:text-gray-100 leading-none">{tutor.tutorName}</p>
                                                <p className="text-[10px] text-gray-400 mt-1 uppercase font-semibold">{tutor.location}</p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Subject */}
                                    <td className="px-6 py-5">
                                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-bold">
                                            {tutor.subject}
                                        </span>
                                    </td>

                                    {/* Price */}
                                    <td className="px-6 py-5">
                                        <p className="font-black text-gray-700 dark:text-gray-200">${tutor.hourlyFee}</p>
                                    </td>

                                    {/* Total Slot */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-1  ">
                                            <span className="text-green-400 text-sm"><FaCheckToSlot /></span>
                                            <span className="text-sm font-bold  dark:text-gray-300">{tutor.totalSlot || 0}</span>
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-5">
                                        <div className="flex justify-center items-center gap-3">
                                            {/* edit button  */}
                                         <EditForm  myTutors={tutor} />

                                            <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg text-red-500 transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-9.123z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {myTutors?.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">📭</div>
                        <h2 className="text-xl font-bold text-gray-400">You haven't added any tutors yet.</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyTutorPage;