import AllTutors from "@/Components/Tutors/AllTutors";
import { getAllTutorsInfo } from "@/lib/tutorData";

export const metadata = {
  title: "Browse Tutors | MediQueue",
  description: "Explore our wide range of expert tutors across various subjects like Mathematics, ICT, and Science.",
};

const TutorsPage = async () => {
    const tutorInfo = await getAllTutorsInfo();

    return (
        <AllTutors tutorInfo={tutorInfo} />
    );
};

export default TutorsPage;