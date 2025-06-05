import HeroSection from "../components/HeroSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import PromiseSection from "../components/PromiseSection";
import FinalCTASection from "../components/FinalCTASection";
import AboutSection from "../components/AboutSection";
import PhilosophySection from "../components/PhilosophySection";
import ProcessSection from "../components/ProcessSection";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <PhilosophySection />
      <ProcessSection />
      <AboutSection />
      <PromiseSection />
      <FinalCTASection />
    </>
  );
}
