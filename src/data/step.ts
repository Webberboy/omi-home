interface stepItem {
    id: string;
    number: string;
    title: string;
    desc: string;
    image: string;
}

export const stepItems: stepItem[] = [
    {
        id: "step1",
        number: "STEP 01",
        title: "Pick a goal",
        desc: "Choose the type of content you want to create: a tagline, description, image, video idea, and more.",
        image: "step-1.webp",
    },
    {
        id: "step2",
        number: "STEP 02",
        title: "Add a prompt",
        desc: "Enter keywords, context, or any starting idea. Upload images or videos to guide the result.",
        image: "step-2.webp",
    },
    {
        id: "step3",
        number: "STEP 03",
        title: "Get results",
        desc: "Qore returns multiple outputs. Choose your favorite, refine it, or keep exploring more options.",
        image: "step-3.webp",
    },
];
