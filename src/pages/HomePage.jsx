import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/home/Hero/HeroSection";
import BenefitsBar from "../components/home/BenefitsBar/BenefitsBar";
import AboutSection from "../components/home/About/AboutSection";
import CoursesSection from "../components/home/Courses/CoursesSection";
import StatsSection from "../components/home/Stats/StatsSection";
import CTASection from "../components/home/CTA/CTASection";

export default function HomePage() {
    return (
        <>
            <TopBar />
            {/* <Header /> */}

            <main>
                <HeroSection />
                <BenefitsBar />
                <AboutSection />
                <CoursesSection />
                <StatsSection />
                <CTASection />
            </main>

            <Footer />
        </>
    );
}