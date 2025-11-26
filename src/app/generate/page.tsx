import Layout from "@/src/components/layout/Layout";
import PageTitle from "@/src/components/section/PageTitle";
import VideoGenerateSection from "@/src/components/section/VideoGenerateSection";
import BreakSection from "@/src/components/section/BreakSection";

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