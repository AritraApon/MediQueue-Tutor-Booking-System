'use client'
import { Button } from "@heroui/react";
import toast from "react-hot-toast";

const CancelBookingButton = ({ booking }) => {

    const handleCancel = async () => {

        try {
            const res = await fetch(`http://localhost:5000/bookings/${booking._id}`, {
                method: "PATCH"
            });
            const data = await res.json();

            if (data.modifiedCount > 0) {
                toast.success("Session Cancelled!");
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