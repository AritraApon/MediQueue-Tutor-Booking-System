import ProfileCard from "@/Components/Profile/Profile";
import { getBookingData, getMyAddTutorsInfo } from "@/lib/tutorData";

export const metadata = {
  title: "My Profile | MediQueue",
  description: "View and manage your personal information, account settings, and activity on MediQueue.",
};
const ProfilePage = async() => {
   const myAddTutor = await getMyAddTutorsInfo()
   const myBooking = await getBookingData()
//    console.log(myAddTutor.length)
    return (
        <div>

       <ProfileCard myAddTutor={myAddTutor} myBooking={myBooking}  />
        </div>
    );
};

export default ProfilePage;