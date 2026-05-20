"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const DeleteButton = ({ tutor }) => {
    const router = useRouter()
    const handleDelete = async () => {
        const {data:tokenData} = await authClient.token()

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/tutors/${tutor._id}`, {
                method: "DELETE",
                headers:{
                    'Authorization': `Bearer ${tokenData?.token}`,
                }
            });
            const data = await res.json();

            if (data.deletedCount > 0) {
                toast.success(`${tutor.tutorName} deleted successfully!`);
                router.refresh()
            }
        } catch (error) {
            console.error("Delete error:", error);
            toast.error("Failed to delete tutor!");
        }
    };

    return (
        <div>
            <AlertDialog>
                {/* Trigger Button */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-red-500 transition-all border-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-9.123z" />
                    </svg>
                </Button>

                <AlertDialog.Backdrop>
                    <AlertDialog.Container placement="center">
                        <AlertDialog.Dialog className="sm:max-w-[420px] bg-white dark:bg-[#0d1117] rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800">
                            <AlertDialog.CloseTrigger className="absolute right-4 top-4" />

                            <AlertDialog.Header className="flex flex-col items-center text-center gap-3">
                                <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
                                    <AlertDialog.Icon status="danger" className="text-red-600 size-8" />
                                </div>
                                <AlertDialog.Heading className="text-xl font-bold text-gray-900 dark:text-white">
                                    Confirm Deletion
                                </AlertDialog.Heading>
                            </AlertDialog.Header>

                            <AlertDialog.Body className="text-center py-4">
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    Are you sure you want to delete <strong>{tutor?.tutorName}</strong>?
                                    All associated data will be lost forever.
                                </p>
                            </AlertDialog.Body>

                            <AlertDialog.Footer className="flex gap-3 justify-center mt-4">
                                <Button
                                    slot="close"
                                    variant="ghost"
                                    className="flex-1 rounded-xl h-12 font-semibold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 border-none"
                                >
                                    No, Keep it
                                </Button>
                                <Button
                                    onClick={handleDelete}
                                    slot="close"
                                    className="flex-1 rounded-xl h-12 font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-200 dark:shadow-none transition-all uppercase text-xs tracking-widest"
                                >
                                    Yes, Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteButton;