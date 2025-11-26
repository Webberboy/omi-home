import Layout from "@/src/components/layout/Layout";
import BreakSection from "@/src/components/section/BreakSection";
import { MainFaqSection } from "@/src/components/section/FaqSection";
import ImageTextSection from "@/src/components/section/ImageTextSection";
import LastestCaseSection from "@/src/components/section/LastestCaseSection";
import PageTitle from "@/src/components/section/PageTitle";
import { MainTestimonialSection } from "@/src/components/section/TestimonialSection";
import UseCaseDetail from "@/src/components/useCase/UseCaseDetail";

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
