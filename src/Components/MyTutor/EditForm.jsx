"use client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { motion } from "framer-motion";

const EditForm = ({ myTutors }) => {

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedData = Object.fromEntries(formData);
        console.log("Updated Data:", updatedData);
        // এখানে তোর API কল করবি
    };

    return (
        <Modal>
            {/* Edit Trigger Button */}
            <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg text-blue-600 transition-all border-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="sm:max-w-2xl bg-white dark:bg-[#0d1117] border border-gray-100 dark:border-gray-800 shadow-2xl rounded-3xl overflow-hidden">
                        <Modal.CloseTrigger className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-white z-50" />

                        {/* Custom Header */}
                        <div className="p-8 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-blue-600 rounded-xl text-white">
                                    <Envelope size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-gray-900 dark:text-white">Edit Tutor Info</h2>
                                    <p className="text-xs text-gray-500 font-medium">Update your profile details below</p>
                                </div>
                            </div>
                        </div>

                        {/* Form Body with Native Tailwind Inputs */}
                        <div className="p-8 pt-2 overflow-y-auto max-h-[75vh]">
                            <form onSubmit={handleUpdate} className="w-full flex flex-col gap-6">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* 1. Tutor Name */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Tutor Name</label>
                                        <input
                                            name="tutorName"
                                            defaultValue={myTutors?.tutorName}
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>

                                    {/* 2. Photo URL */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Photo URL</label>
                                        <input
                                            name="photo"
                                            defaultValue={myTutors?.photo}
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>

                                    {/* 3. Subject (Native Select) */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Subject</label>
                                        <select
                                            name="subject"
                                            defaultValue={myTutors?.subject}
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                                        >
                                            <option value="">Select Subject</option>
                                            {['Mathematics', 'Physics', 'Chemistry', 'ICT', 'Biology', 'English'].map(sub => (
                                                <option key={sub} value={sub}>{sub}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* 4. Teaching Mode (Native Select) */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Teaching Mode</label>
                                        <select
                                            name="teachingMode"
                                            defaultValue={myTutors?.teachingMode}
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                                        >
                                            <option value="Online">Online</option>
                                            <option value="Offline">Offline</option>
                                            <option value="Both">Both</option>
                                        </select>
                                    </div>

                                    {/* 5. Available Days */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Available Days</label>
                                        <input
                                            name="availableDays"
                                            defaultValue={myTutors?.availableDays}
                                            placeholder="e.g. Sun - Thu"
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>

                                    {/* 6. Time Slot */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Time Slot</label>
                                        <input
                                            name="availableTime"
                                            defaultValue={myTutors?.availableTime}
                                            placeholder="5:00 PM - 8:00 PM"
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>

                                    {/* 7. Hourly Fee */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Hourly Fee ($)</label>
                                        <input
                                            type="number"
                                            name="hourlyFee"
                                            defaultValue={myTutors?.hourlyFee}
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>

                                    {/* 8. Total Slot */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Total Slot</label>
                                        <input
                                            type="number"
                                            name="totalSlot"
                                            defaultValue={myTutors?.totalSlot}
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>

                                    {/* 9. Date */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Start Date</label>
                                        <input
                                            type="date"
                                            name="sessionDate"
                                            defaultValue={myTutors?.sessionDate}
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>

                                    {/* 10. Location */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Location</label>
                                        <input
                                            name="location"
                                            defaultValue={myTutors?.location}
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                                        />
                                    </div>
                                </div>

                                {/* 11. Experience */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-bold text-blue-600 uppercase tracking-widest px-1">Institution & Experience</label>
                                    <textarea
                                        name="experience"
                                        defaultValue={myTutors?.experience}
                                        rows={3}
                                        className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all uppercase tracking-widest text-sm"
                                    >
                                        Update Tutor Profile
                                    </button>
                                </div>

                            </form>
                        </div>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditForm;