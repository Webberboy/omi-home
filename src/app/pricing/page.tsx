import Layout from "@/components/layout/Layout";
import BreakSection from "@/components/section/BreakSection";
import { MainFaqSection } from "@/components/section/FaqSection";
import PageTitle from "@/components/section/PageTitle";
import PricingSectionV2 from "@/components/section/PricingSectionV2";

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
