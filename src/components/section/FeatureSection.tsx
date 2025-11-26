import { SectHeader } from "@/src/components/section/SectHeader";
import { SectTagline } from "@/src/components/section/SectTagline";
import { SectBottom } from "@/src/components/section/SectBottom";
import MainFeatureSection from "./mainSection/MainFeatureSection";

export default function FeatureSection() {
    return (
        <>
            <section className="section-feature" id="features">
                <SectHeader value={2} label={"FEATURES"} />
                <span className="br-line"></span>
                <SectTagline name={"SIX TOOLS. ONE AI CORE. ENDLESS POTENTIAL."} />
                <span className="br-line"></span>
                <MainFeatureSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}
