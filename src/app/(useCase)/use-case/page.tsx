import Layout from "@/components/layout/Layout";
import BenefitSectionV2 from "@/components/section/BenefitSectionV2";
import BreakSection from "@/components/section/BreakSection";
import { MainFaqSection } from "@/components/section/FaqSection";
import ImageTextSection from "@/components/section/ImageTextSection";
import PageTitle from "@/components/section/PageTitle";
import PricingSectionV2 from "@/components/section/PricingSectionV2";

export default function PageUseCase() {
    return (
        <>
            <Layout>
                <PageTitle name="USE CASES" />
                <BenefitSectionV2 />
                <BreakSection />
                <PricingSectionV2 />
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
