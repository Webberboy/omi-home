import Map from "@/src/components/common/Map";
import Layout from "@/src/components/layout/Layout";
import BreakSection from "@/src/components/section/BreakSection";
import ContactSection from "@/src/components/section/ContactSection";
import GetSection from "@/src/components/section/GetSection";
import ImageTextSection from "@/src/components/section/ImageTextSection";
import PageTitle from "@/src/components/section/PageTitle";

export default function PageContact() {
    return (
        <>
            <Layout>
                <PageTitle name="CONTACT" />
                <ContactSection />
                <BreakSection />
                <section className="section-map flat-spacing-3">
                    <div className="container">
                        <Map />
                    </div>
                </section>
                <BreakSection />
                <GetSection />
                <BreakSection />
                <ImageTextSection />
            </Layout>
        </>
    );
}
