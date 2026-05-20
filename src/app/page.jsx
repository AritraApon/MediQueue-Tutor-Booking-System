import { FAQSection } from "@/Components/Home/FAQSection";
import { FeaturedOn } from "@/Components/Home/FeaturedOn";
import Hero from "@/Components/Home/Hero";
import { HowItWorks } from "@/Components/Home/HowItWorks";
import HowToWork from "@/Components/Home/HowToWork";
import { JoinUsCards } from "@/Components/Home/JoinUsCards";
import { ReadingTips } from "@/Components/Home/ReadingTips";
import { StatsSection } from "@/Components/Home/StatsSection";
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
      <StatsSection/>
      <ReadingTips/>
      <HowToWork/>
      <HowItWorks/>
      <JoinUsCards/>
      <FAQSection/>
      <FeaturedOn/>


    </div>
  );
}
