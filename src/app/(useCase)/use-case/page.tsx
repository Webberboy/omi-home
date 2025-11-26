import Layout from "@/src/components/layout/Layout";
import BenefitSectionV2 from "@/src/components/section/BenefitSectionV2";
import BreakSection from "@/src/components/section/BreakSection";
import { MainFaqSection } from "@/src/components/section/FaqSection";
import ImageTextSection from "@/src/components/section/ImageTextSection";
import PageTitle from "@/src/components/section/PageTitle";
import PricingSectionV2 from "@/src/components/section/PricingSectionV2";

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
