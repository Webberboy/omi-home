export interface NavItem {
    name: string;
    link: string;
    subMenu?: SubMenuItem[];
}

export interface SubMenuItem {
    subName: string;
    subLink: string;
}
export const navItems: NavItem[] = [
    {
        name: "Features",
        link: "features",
    },
    {
        name: "How to use",
        link: "howToUse",
    },
    {
        name: "Pricing",
        link: "pricing",
    },
    {
        name: "FAQs",
        link: "FAQs",
    },
];

export const navItems2: NavItem[] = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Blog",
        link: "#",
        subMenu: [
            {
                subName: "Blog List",
                subLink: "blog",
            },
            {
                subName: "Blog Detail",
                subLink: "blog-detail",
            },
        ],
    },
    {
        name: "Page",
        link: "#",
        subMenu: [
            {
                subName: "About Us",
                subLink: "about-us",
            },
            {
                subName: "FAQs",
                subLink: "faq",
            },
            {
                subName: "Pricing",
                subLink: "pricing",
            },
            {
                subName: "Use Case",
                subLink: "use-case",
            },
            {
                subName: "Use Case Detail",
                subLink: "use-case-detail",
            },
            {
                subName: "404",
                subLink: "404",
            },
        ],
    },
    {
        name: "Contact Us",
        link: "contact-us",
    },
];
