import { SectHeader } from "@/components/section/SectHeader";
import { SectTagline } from "@/components/section/SectTagline";
import { SectBottom } from "@/components/section/SectBottom";
import SlideBrand from "@components/common/SlideBrand";
import { MainHeroSection } from "./mainSection/MainHeroSection";

export default function HeroSection() {
    return (
        <>
            <section className="section-hero">
                <SectHeader value={1} label={"HERO"} />
                <span className="br-line"></span>
                <SectTagline name={"YOUR ALL-IN-ONE AI CREATION PLATFORM"} />
                <span className="br-line"></span>
                <MainHeroSection />
                <span className="br-line"></span>
                <SlideBrand />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}
