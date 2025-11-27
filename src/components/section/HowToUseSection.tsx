import { SectHeader } from "@components/section/SectHeader";
import { SectTagline } from "@components/section/SectTagline";
import { SectBottom } from "@components/section/SectBottom";
import MainHowSection from "./mainSection/MainHowSection";

export default function HowToUseSection() {
    return (
        <>
            <section className="section-how-to" id="howToUse">
                <SectHeader value={4} label="HOW TO USE" />
                <span className="br-line"></span>
                <SectTagline name={"HOW TO USE HEYOMI."} />
                <span className="br-line"></span>
                <MainHowSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}
