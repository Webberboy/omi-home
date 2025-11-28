import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/section/PageTitle";
import VideoGenerateSection from "@/components/section/VideoGenerateSection";
import BreakSection from "@/components/section/BreakSection";

export default function GeneratePage() {
    return (
        <>
            <Layout>
                <PageTitle name="AI VIDEO GENERATOR" />
                <VideoGenerateSection />
                <BreakSection />
            </Layout>
        </>
    );
}