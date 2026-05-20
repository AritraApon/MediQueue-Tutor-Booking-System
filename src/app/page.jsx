import Hero from "@/Components/Home/Hero";
import HowToWork from "@/Components/Home/HowToWork";
import { SubjectCategories } from "@/Components/Home/SubjectCategories";
import TutorsCards from "@/Components/Home/TutorsCards";
import { getSixTutorsInfo } from "@/lib/tutorData";


export default async function Home() {
  const tutorInfo = await getSixTutorsInfo()
  return (
    <div>
      <Hero />
      <TutorsCards tutorInfo={tutorInfo}  />
      <SubjectCategories />
      <HowToWork/>


    </div>
  );
}
