export interface BlogItem {
    id: number;
    image: string;
    name: string;
    desc: string;
    meta_author: string;
    meta_date: string;
    meta_tag: string;
    tag: BlogDetailTag[];
}
export interface BlogDetailTag {
    name_tag: string;
    link_tag: string;
}
export const blogItems: BlogItem[] = [
    {
        id: 1,
        image: "blog-1.jpg",
        name: "Deep Cogito v2: Open-source AI that hones its reasoning skills",
        desc: "Data protection compliance has evolved from a periodic checklist exercise to a continuous responsibility. With cyber threats emerging and regulatory requirements becoming increasingly stringent, organisations can’t afford to rely on manual compliance monitoring approaches...",
        meta_author: "Esther Howard",
        meta_date: "August 3, 2025",
        meta_tag: "AI design",
        tag: [
            {
                name_tag: "ChatBot AI",
                link_tag: "#",
            },
            {
                name_tag: "Themesflat",
                link_tag: "#",
            },
            {
                name_tag: "Qore",
                link_tag: "#",
            },
        ],
    },
    {
        id: 2,
        image: "blog-2.jpg",
        name: "Deep Cogito v3: Open-source AI that hones its reasoning skills",
        desc: "Data protection compliance has evolved from a periodic checklist exercise to a continuous responsibility. With cyber threats emerging and regulatory requirements becoming increasingly stringent, organisations can’t afford to rely on manual compliance monitoring approaches...",
        meta_author: "Esther Howard",
        meta_date: "August 3, 2025",
        meta_tag: "AI design",
        tag: [
            {
                name_tag: "Themesflat",
                link_tag: "#",
            },
            {
                name_tag: "Qore",
                link_tag: "#",
            },
            {
                name_tag: "ChatBot AI",
                link_tag: "#",
            },
        ],
    },
    {
        id: 3,
        image: "blog-3.jpg",
        name: "Deep Cogito v4: Open-source AI that hones its reasoning skills",
        desc: "Data protection compliance has evolved from a periodic checklist exercise to a continuous responsibility. With cyber threats emerging and regulatory requirements becoming increasingly stringent, organisations can’t afford to rely on manual compliance monitoring approaches...",
        meta_author: "Esther Howard",
        meta_date: "August 3, 2025",
        meta_tag: "AI design",
        tag: [
            {
                name_tag: "Developer",
                link_tag: "#",
            },
            {
                name_tag: "AI design",
                link_tag: "#",
            },
            {
                name_tag: "Qore",
                link_tag: "#",
            },
        ],
    },
];

export const sidebarCategory = [
    {
        link: "#",
        name: "ChatBot AI",
    },
    {
        link: "#",
        name: "AI design",
    },

    {
        link: "#",
        name: "Content write",
    },
    {
        link: "#",
        name: "Developer",
    },
];

export const sidebarRecent = [
    {
        link: "#",
        image: "recent-1.jpg",
        date: "August 3, 2025",
        name: "Leak suggests OpenAI’s open-source AI model release is imminent",
    },

    {
        link: "#",
        image: "recent-2.jpg",
        date: "August 3, 2025",
        name: "Shah Muhammad, Sweco: How AI is building the future of our cities",
    },
    {
        link: "#",
        image: "recent-3.jpg",
        date: "August 3, 2025",
        name: "Google’s Veo 3 AI video creation tools are now widely available",
    },
    {
        link: "#",
        image: "recent-4.jpg",
        date: "August 3, 2025",
        name: "Anthropic deploys AI agents to audit models for safety",
    },
    {
        link: "#",
        image: "recent-5.jpg",
        date: "August 3, 2025",
        name: "Deep Cogito v2: Open-source AI that hones its reasoning skills",
    },
];

export const sidebarTags = [
    {
        link: "#",
        name: "ChatBot AI",
    },
    {
        link: "#",
        name: "Themesflat",
    },

    {
        link: "#",
        name: "Qore",
    },
    {
        link: "#",
        name: "Design",
    },
    {
        link: "#",
        name: "AI",
    },
    {
        link: "#",
        name: "Code",
    },
    {
        link: "#",
        name: "HTML 5",
    },
];
