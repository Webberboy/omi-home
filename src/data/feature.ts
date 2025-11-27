export interface DemoItem {
    id: string;
    url: string;
}

export interface FeatureTab {
    id: string;
    title: string;
    img: string;
    desc: string;
    demos?: DemoItem[];
    demoType?: "image" | "video" | "audio";
}

export const FeatureTabItems: FeatureTab[] = [
    {
        id: "imageCreator",
        title: "Image Creator",
        img: "image-creator.webp",
        desc: "From visuals to code, HeyOmi gives you a full creative suite powered by the latest multi-model AI — all in one place.",
        demoType: "image",
        demos: [
            { id: "img-1", url: "https://via.placeholder.com/600x400?text=Generated+Image+1" },
            { id: "img-2", url: "https://via.placeholder.com/600x400?text=Generated+Image+2" },
            { id: "img-3", url: "https://via.placeholder.com/600x400?text=Generated+Image+3" },
        ],
    },
    {
        id: "imageEnhance",
        title: "Image Enhance",
        img: "image-enhance.webp",
        desc: "From visuals to code, HeyOmi gives you a full creative suite powered by the latest multi-model AI — all in one place.",
        demoType: "image",
        demos: [
            { id: "img-e1", url: "https://via.placeholder.com/600x400?text=Enhanced+Image+1" },
            { id: "img-e2", url: "https://via.placeholder.com/600x400?text=Enhanced+Image+2" },
            { id: "img-e3", url: "https://via.placeholder.com/600x400?text=Enhanced+Image+3" },
        ],
    },
    {
        id: "videoCreator",
        title: "Video Creator",
        img: "video-creator.webp",
        desc: "From visuals to code, HeyOmi gives you a full creative suite powered by the latest multi-model AI — all in one place.",
        demoType: "video",
        demos: [
            { id: "vid-1", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "vid-2", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "vid-3", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ],
    },
    {
        id: "textCreator",
        title: "Text Creator",
        img: "text-creator.webp",
        desc: "From visuals to code, HeyOmi gives you a full creative suite powered by the latest multi-model AI — all in one place.",
    },
    {
        id: "codeComposer",
        title: "Code Composer",
        img: "code-composer.webp",
        desc: "Generate or refactor code in any language. From scripts to components — AI does the heavy lifting.",
    },
    {
        id: "websiteBuilder",
        title: "Website Builder",
        img: "website-builder.webp",
        desc: "From visuals to code, HeyOmi gives you a full creative suite powered by the latest multi-model AI — all in one place.",
        demoType: "audio",
        demos: [
            { id: "aud-1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "aud-2", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "aud-3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
        ],
    },
];

export const featureTabItems2 = [
    {
        name: "Challenge",
        text_1: "Traditional compliance monitoring is characterised by annual assessments and reactive responses to incidents. While this approach is sufficient for simpler regulatory environments, it falls short in addressing the complexities of modern data protection. ",
        text_2: "The shift to continuous monitoring represents a change in how organisations approach compliance. Rather than periodic snapshots of compliance status, businesses are better off with real-time visibility in their security posture.",
    },
    {
        name: "Solution",
        text_1: "Traditional compliance monitoring is characterised by annual assessments and reactive responses to incidents. While this approach is sufficient for simpler regulatory environments, it falls short in addressing the complexities of modern data protection. ",
        text_2: "The shift to continuous monitoring represents a change in how organisations approach compliance. Rather than periodic snapshots of compliance status, businesses are better off with real-time visibility in their security posture.",
    },
    {
        name: "The Results",
        text_1: "Traditional compliance monitoring is characterised by annual assessments and reactive responses to incidents. While this approach is sufficient for simpler regulatory environments, it falls short in addressing the complexities of modern data protection. ",
        text_2: "The shift to continuous monitoring represents a change in how organisations approach compliance. Rather than periodic snapshots of compliance status, businesses are better off with real-time visibility in their security posture.",
    },
];
