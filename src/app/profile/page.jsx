import ProfileCard from "@/Components/Profile/Profile";

export const metadata = {
  title: "My Profile | MediQueue",
  description: "View and manage your personal information, account settings, and activity on MediQueue.",
};
const ProfilePage = () => {
    return (
        <div>
       <ProfileCard/>
        </div>
    );
};

export default ProfilePage;