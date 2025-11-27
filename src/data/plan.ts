// data/plans.ts
export interface PlanFeature {
    text: string;
}

export interface Plan {
    id: string;
    name: string;
    price: string;
    duration: string;
    description: string;
    buttonClass: string;
    features: PlanFeature[];
    image: string;
    typeClass?: string;
}

export const plans: Plan[] = [
    {
        id: "free",
        name: "Free Plan",
        price: "$0",
        duration: "forever",
        description: "Perfect for testing and light creative needs.",
        buttonClass: "style-3",
        image: "",
        features: [{ text: "50 prompts / mo" }, { text: "10 images / mo (up to 5MB)" }, { text: "2 videos / mo (720p)" }, { text: "Basic AI model" }],
    },
    {
        id: "plus",
        name: "Plus Plan",
        price: "$19",
        duration: "per user / mo",
        description: "Unlock more power with advanced models and bigger limits.",
        buttonClass: "style-2",
        image: "",
        typeClass: "type-2",
        features: [
            { text: "500 prompts / mo" },
            { text: "100 images / mo (up to 10MB)" },
            { text: "20 videos / mo (1080p)" },
            { text: "Website builder (basic)" },
            { text: "Basic AI model" },
        ],
    },
    {
        id: "pro",
        name: "Pro Plan",
        price: "$49",
        duration: "per user / mo",
        description: "Everything unlimited. For pros, teams, and power creators.",
        buttonClass: "style-3",
        image: "",
        features: [
            { text: "Unlimited prompts" },
            { text: "Unlimited images (up to 25MB)" },
            { text: "100+ videos / mo (4K)" },
            { text: "Website builder (advanced)" },
            { text: "API access" },
            { text: "Advanced AI model" },
        ],
    },
];
