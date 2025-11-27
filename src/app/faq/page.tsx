import Layout from "@/components/layout/Layout";
import BreakSection from "@/components/section/BreakSection";
import FaqSectionV2 from "@/components/section/FaqSectionV2";
import GetSection from "@/components/section/GetSection";
import PageTitle from "@/components/section/PageTitle";

export default function PageFaq() {
    return (
        <>
            <Layout>
                <PageTitle name="FAQS" />
                <FaqSectionV2 />
                <BreakSection />
                <GetSection />
            </Layout>
        </>
    );
}
