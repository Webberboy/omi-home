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
        id: "textToVideo",
        title: "Text to Video",
        img: "image-creator.webp",
        desc: "Transform your ideas into cinematic videos. Describe a scene and watch as HeyOmi creates professional-quality video content from your text prompts.",
        demoType: "image",
        demos: [
            { id: "img-1", url: "https://via.placeholder.com/600x400?text=Generated+Image+1" },
            { id: "img-2", url: "https://via.placeholder.com/600x400?text=Generated+Image+2" },
            { id: "img-3", url: "https://via.placeholder.com/600x400?text=Generated+Image+3" },
        ],
    },
    {
        id: "imageToVideo",
        title: "Image to Video",
        img: "image-enhance.webp",
        desc: "Bring static images to life. Convert any image into dynamic video with smooth motion and effects, powered by advanced AI animation.",
        demoType: "image",
        demos: [
            { id: "img-e1", url: "https://via.placeholder.com/600x400?text=Enhanced+Image+1" },
            { id: "img-e2", url: "https://via.placeholder.com/600x400?text=Enhanced+Image+2" },
            { id: "img-e3", url: "https://via.placeholder.com/600x400?text=Enhanced+Image+3" },
        ],
    },
    {
        id: "referenceToVideo",
        title: "Reference to Video",
        img: "video-creator.webp",
        desc: "Use reference images as inspiration to generate entirely new videos. Mix visual references with text prompts for precise creative control.",
        demoType: "video",
        demos: [
            { id: "vid-1", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "vid-2", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: "vid-3", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        ],
    },
    {
        id: "characterReplace",
        title: "Character Replace",
        img: "text-creator.webp",
        desc: "Seamlessly replace characters in your videos. Change actors, swap outfits, or adjust performances without re-recording.",
    },
    {
        id: "textToImage",
        title: "Text to Image",
        img: "code-composer.webp",
        desc: "Generate stunning AI images from detailed text descriptions. Perfect for artwork, concept design, social content, and marketing materials.",
    },
    {
        id: "editImage",
        title: "Edit Image",
        img: "website-builder.webp",
        desc: "Refine your images with precision. Edit specific areas, enhance details, apply effects, and fine-tune colors without leaving the platform.",
        demoType: "audio",
        demos: [
            { id: "aud-1", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
            { id: "aud-2", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
            { id: "aud-3", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
        ],
    },
    {
        id: "music",
        title: "AI Music",
        img: "image-creator.webp",
        desc: "Compose original background music and soundtracks for your projects. Create custom audio that perfectly matches your content's mood and pace.",
    },
    {
        id: "textToSpeech",
        title: "Text to Speech",
        img: "image-enhance.webp",
        desc: "Turn text into natural-sounding voice-overs. Choose from multiple voices and languages to narrate videos, podcasts, and presentations.",
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
