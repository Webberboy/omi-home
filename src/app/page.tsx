import Header from "@components/header/Header";
import HeroSection from "@components/section/HeroSection";
import HeroVideo from "@components/layout/HeroVideo";
import FeatureSection from "@components/section/FeatureSection";
import BenefitSection from "@components/section/BenefitSection";
import HowToUseSection from "@components/section/HowToUseSection";
import PricingSection from "@components/section/PricingSection";
import TestimonialSection from "@components/section/TestimonialSection";
import FaqSection from "@components/section/FaqSection";
import CtaSection from "@components/section/CtaSection";
import Footer from "@components/footer/Footer";
import GoTopButton from "@components/common/GoTop";
import HackerTextEffect from "@/components/common/HackerTextEffect";

export default function Home() {
    return (
        <>
            <div id="wrapper">
                <HackerTextEffect />
                <GoTopButton />
                <span className="line_page"></span>
                <div className="overlay_body"></div>
                <div className="texture_page">
                    <div className="bg-texture"></div>
                    <div className="temp"></div>
                    <div className="bg-texture"></div>
                </div>
                <HeroVideo />

                <Header />
                <span className="br-line"></span>

                <HeroSection />
                <FeatureSection />
                <BenefitSection />
                <HowToUseSection />
                <PricingSection />
                <TestimonialSection />
                <FaqSection />
                <CtaSection />
                <Footer />
            </div>
        </>
    );
}
