import ProfileCard from "@/Components/Profile/Profile";
import { auth } from "@/lib/auth";
import { getBookingData, getMyAddTutorsInfo } from "@/lib/tutorData";
import { headers } from "next/headers";

export const metadata = {
  title: "My Profile | MediQueue",
  description: "View and manage your personal information, account settings, and activity on MediQueue.",
};
const ProfilePage = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
       const id = user?.id;


   const myAddTutors = await getMyAddTutorsInfo(user)
   const myBookings = await getBookingData(id)
//    console.log(myAddTutor.length)
    return (
        <div>

       <ProfileCard  myAddTutors={myAddTutors} myBookings={myBookings}  />
        </div>
    );
};

export default ProfilePage;