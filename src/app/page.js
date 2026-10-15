import About from "./about/page";
import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import LessonInfo from "./components/LesoonInfo";
import TutionOptions from "./components/TutionOptions";

export default function Home() {
  return (
    <div>
    <Hero></Hero>
    <LessonInfo></LessonInfo>
    <TutionOptions></TutionOptions>
    <CallToAction></CallToAction>
    </div>
    
  );
}
