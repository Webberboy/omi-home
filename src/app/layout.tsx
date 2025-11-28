import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/css/odometer.min.css";
import "@assets/icon/icomoon/style.css";
import "@assets/css/animate.css";
import "@assets/scss/app.scss";
import localFont from "next/font/local";

const mono = localFont({
    src: "../fonts/DepartureMono-Regular.otf",
    display: "swap",
    variable: "--font-mono",
});

const geist = localFont({
    src: [
        { path: "../fonts/Geist-Regular.ttf", weight: "400", style: "normal" },
        { path: "../fonts/Geist-Medium.ttf", weight: "500", style: "normal" },
        { path: "../fonts/Geist-Bold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-geist",
    display: "swap",
});

const grotesk = localFont({
    src: [
        { path: "../fonts/OverusedGrotesk-Book.otf", weight: "400" },
        { path: "../fonts/OverusedGrotesk-Medium.otf", weight: "500" },
    ],
    display: "swap",
    variable: "--font-grotesk",
});

export const metadata: Metadata = {
    title: "HeyOmi - AI Video Generator",
    description: "HeyOmi is an AI-powered video generation platform, optimized for high performance and modern design.",
    keywords: ["HeyOmi", "AI Video", "Video Generator", "AI Creation", "React", "Next.js"],
    robots: "index, follow",
    authors: [{ name: "Themesflat", url: "https://themesflat.co" }],
    icons: {
        icon: "/world.svg",
        shortcut: "/world.svg",
        apple: "/world.svg",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geist.className} ${mono.variable} ${grotesk.variable}`}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </head>
            <body>{children}</body>
        </html>
    );
}
