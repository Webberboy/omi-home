import Layout from "@/components/layout/Layout";
import BenefitSectionV2 from "@/components/section/BenefitSectionV2";
import BreakSection from "@/components/section/BreakSection";
import HeroAbout from "@/components/section/HeroAbout";
import ImageTextSection from "@/components/section/ImageTextSection";
import PageTitle from "@/components/section/PageTitle";
import TeamSection from "@/components/section/TeamSection";
import { MainTestimonialSection } from "@/components/section/TestimonialSection";

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
