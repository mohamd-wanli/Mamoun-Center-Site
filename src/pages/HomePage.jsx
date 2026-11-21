import NewsSection from "../components/home/News/NewsSection";
import HeroSection from "../components/home/Hero/HeroSection";
import BenefitsBar from "../components/home/BenefitsBar/BenefitsBar";
import AboutSection from "../components/home/About/AboutSection";
import CoursesSection from "../components/home/Courses/CoursesSection";
import StatsSection from "../components/home/Stats/StatsSection";
import CTASection from "../components/home/CTA/CTASection";
import HomeHighlights from "../components/home/Highlights/HomeHighlights";
import MotivationBanner from "../components/home/Motivation/MotivationBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsBar />
      <AboutSection />
      <MotivationBanner />
      <CoursesSection />
      <NewsSection />
      <StatsSection />
      <HomeHighlights />
      <CTASection />
    </>
  );
}
