"use client";
import { useState, useEffect } from "react";
import AllTutorsCard from "./AllTutorsCard";
import { Input, Button } from "@heroui/react";

const AllTutors = ({ tutorInfo }) => {
    const [tutors, setTutors] = useState(tutorInfo);
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearch = async () => {
        const res = await
        fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/tutors?search=${searchTerm}`);
        const data = await res.json();
        setTutors(data);

    }
    return (
        <div>
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
                    <div>
                        {/* Search Section */}
                        <div className="w-full flex justify-center items-center px-4 mb-12">
                            <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-[24px] shadow-2xl shadow-blue-100 dark:shadow-none border border-gray-100 dark:border-gray-700">
                                <div className="w-full relative flex items-center">
                                    <Input
                                        type="text"
                                        placeholder="Find by tutor name ..."
                                        variant="flat"
                                        radius="lg"
                                        size="lg"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                        classNames={{
                                            input: "text-base ml-2",
                                            inputWrapper: "bg-transparent hover:bg-transparent focus-within:bg-transparent border-none shadow-none",
                                        }}
                                        startContent={
                                            <svg className="w-6 h-6 text-blue-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        }
                                        className="w-full"
                                    />
                                </div>
                                <Button
                                    onClick={handleSearch}
                                    color="primary"
                                    radius="xl"
                                    size="lg"
                                    className="w-full sm:w-auto font-bold px-10 h-14 text-lg shadow-lg shadow-blue-500/30 transition-transform active:scale-95"
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Tutors Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-8">
                        {tutors.map((tutor) => (
                            <AllTutorsCard key={tutor._id} tutor={tutor} />
                        ))}
                    </div>

                    {/* No Data State */}
                    {tutors.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-bold text-gray-400">No Tutors Found!</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllTutors;