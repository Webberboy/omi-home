import Layout from "@/src/components/layout/Layout";
import BreakSection from "@/src/components/section/BreakSection";
import { MainFaqSection } from "@/src/components/section/FaqSection";
import PageTitle from "@/src/components/section/PageTitle";
import PricingSectionV2 from "@/src/components/section/PricingSectionV2";

export default function page() {
    return (
        <>
            <Layout>
                <PageTitle name="PRICING" />
                <PricingSectionV2 />
                <BreakSection />
                <section className="section-faq faq-2 flat-spacing-3">
                    <MainFaqSection showDecoration={false} />
                </section>
            </Layout>
        </>
    );
}
