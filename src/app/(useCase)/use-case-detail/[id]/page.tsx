import Layout from "@/components/layout/Layout";
import BreakSection from "@/components/section/BreakSection";
import { MainFaqSection } from "@/components/section/FaqSection";
import ImageTextSection from "@/components/section/ImageTextSection";
import LastestCaseSection from "@/components/section/LastestCaseSection";
import PageTitle from "@/components/section/PageTitle";
import { MainTestimonialSection } from "@/components/section/TestimonialSection";
import UseCaseDetail from "@/components/useCase/UseCaseDetail";

export default function PageUseCaseDetail() {
    return (
        <>
            <Layout>
                <PageTitle name="USE CASE" />
                <UseCaseDetail />
                <BreakSection />
                <LastestCaseSection />
                <BreakSection />
                <section className="section-testimonial tes-2 flat-spacing-3">
                    <MainTestimonialSection />
                </section>
                <BreakSection />
                <section className="section-faq faq-2 flat-spacing-3">
                    <MainFaqSection showDecoration={false} />
                </section>
                <BreakSection />
                <ImageTextSection />
            </Layout>
        </>
    );
}
