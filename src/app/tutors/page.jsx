import AllTutors from "@/Components/Tutors/AllTutors";
import { getAllTutorsInfo } from "@/lib/tutorData";



const TutorsPage = async () => {
    const tutorInfo = await getAllTutorsInfo();

    return (
        <AllTutors tutorInfo={tutorInfo} />
    );
};

export default TutorsPage;