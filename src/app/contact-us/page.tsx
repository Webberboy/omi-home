import Map from "@/components/common/Map";
import Layout from "@/components/layout/Layout";
import BreakSection from "@/components/section/BreakSection";
import ContactSection from "@/components/section/ContactSection";
import GetSection from "@/components/section/GetSection";
import ImageTextSection from "@/components/section/ImageTextSection";
import PageTitle from "@/components/section/PageTitle";

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
