import Layout from "@/src/components/layout/Layout";
import BenefitSectionV2 from "@/src/components/section/BenefitSectionV2";
import BreakSection from "@/src/components/section/BreakSection";
import HeroAbout from "@/src/components/section/HeroAbout";
import ImageTextSection from "@/src/components/section/ImageTextSection";
import PageTitle from "@/src/components/section/PageTitle";
import TeamSection from "@/src/components/section/TeamSection";
import { MainTestimonialSection } from "@/src/components/section/TestimonialSection";

export default function PageAboutUs() {
    return (
        <>
            <Layout>
                <PageTitle name="ABOUT US" />
                <HeroAbout />
                <BreakSection />
                <BenefitSectionV2 />
                <BreakSection />
                <TeamSection />
                <BreakSection />
                <section className="section-testimonial tes-2 flat-spacing-3">
                    <MainTestimonialSection />
                </section>
                <BreakSection />
                <ImageTextSection />
            </Layout>
        </>
    );
}
