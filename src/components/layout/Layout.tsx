import GoTopButton from "../common/GoTop";
import WowEffect from "../common/WowEffect";
import FooterV2 from "../footer/FooterV2";
import HeaderV2 from "../header/HeaderV2";

interface LayoutProps {
    children?: React.ReactNode;
    showFooter?: boolean;
}

export default function Layout({ children, showFooter = true }: LayoutProps) {
    return (
        <div id="wrapper">
            <span className="line_page"></span>
            <div className="overlay_body"></div>
            <div className="texture_page">
                <div className="bg-texture"></div>
                <div className="temp"></div>
                <div className="bg-texture"></div>
            </div>
            <HeaderV2 />
            <main>{children}</main>
            {showFooter && <FooterV2 />}
            <WowEffect />
            <GoTopButton />
        </div>
    );
}
