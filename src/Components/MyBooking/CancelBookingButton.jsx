'use client'
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CancelBookingButton = ({ booking }) => {
    const router = useRouter()
    const handleCancel = async () => {

        const { data: tokenData } = await authClient.token()

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings/${booking._id}`, {
                method: "PATCH",
                headers:{
                    'Authorization': `Bearer ${tokenData?.token}`,
                }
            });
            const data = await res.json();

            if (data.modifiedCount > 0) {
                toast.success("Session Cancelled!");
                router.refresh()
            }
        } catch (error) {
            toast.error("Failed to cancel session");
        }
    };
    return (
        <div>
            <Button
                size="sm"
                variant="flat"
                isDisabled={booking.status === "Cancelled"}
                onPress={handleCancel}
                className={`font-bold rounded-xl ${booking.status === "Cancelled"
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20"
                    }`}
            >
                {booking.status === "Cancelled" ? "Cancelled" : "Cancel"}
            </Button>
        </div>
    );
};

export default CancelBookingButton;