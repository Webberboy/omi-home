export const scrollLink = (): void => {
    const links = document.querySelectorAll<HTMLAnchorElement>(".scroll-link");
    const header = document.querySelector<HTMLElement>(".tf-header");

    if (!header) return;

    const headerHeight = header.offsetHeight;

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            if (!targetId) return;

            const targetElement = document.querySelector<HTMLElement>(targetId);
            if (!targetElement) return;

            const offset = targetElement.offsetTop - headerHeight - 1;

            window.scrollTo({
                top: offset,
                behavior: "smooth",
            });
        });
    });
};
