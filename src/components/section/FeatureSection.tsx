import { SectHeader } from "@/components/section/SectHeader";
import { SectTagline } from "@/components/section/SectTagline";
import { SectBottom } from "@/components/section/SectBottom";
import MainFeatureSection from "./mainSection/MainFeatureSection";

export default function FeatureSection() {
    return (
        <>
            <section className="section-feature" id="features">
                <SectHeader value={2} label={"FEATURES"} />
                <span className="br-line"></span>
                <SectTagline name={"VIDEO, IMAGE, AUDIO — ALL IN ONE"} />
                <span className="br-line"></span>
                <MainFeatureSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}
