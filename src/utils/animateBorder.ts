export const animateBorder = (): void => {
    const menu = document.querySelector<HTMLElement>(".main-nav_menu");
    if (!menu) return;

    const indicator = document.createElement("div");
    indicator.className = "menu-indicator";
    menu.appendChild(indicator);

    const menuLinks = document.querySelectorAll<HTMLAnchorElement>(".menu-item a");
    const menuItems = document.querySelectorAll<HTMLElement>(".menu-item");

    let activeLink: HTMLAnchorElement | null = null;
    let hasActiveSection = false;
    let isInsideMenu = false;

    const moveIndicatorToItem = (item: HTMLElement, forceShow = true): void => {
        const top = item.offsetTop;
        const left = item.offsetLeft;
        const width = item.offsetWidth;
        const height = item.offsetHeight;

        indicator.style.top = `${top}px`;
        indicator.style.left = `${left}px`;
        indicator.style.width = `${width}px`;
        indicator.style.height = `${height}px`;

        if (forceShow) {
            indicator.style.display = "block";
        }
    };

    menuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            moveIndicatorToItem(item, true);
        });
    });

    menu.addEventListener("mouseenter", () => {
        isInsideMenu = true;
    });

    menu.addEventListener("mouseleave", () => {
        isInsideMenu = false;

        if (!hasActiveSection) {
            indicator.style.display = "none";
        } else if (activeLink) {
            const menuItem = activeLink.closest<HTMLElement>(".menu-item");
            if (menuItem) {
                moveIndicatorToItem(menuItem, true);
            }
        }
    });

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuLinks.forEach((l) => l.classList.remove("active"));

            link.classList.add("active");
            activeLink = link;

            const menuItem = activeLink.closest<HTMLElement>(".menu-item");
            if (menuItem) {
                moveIndicatorToItem(menuItem, true);
            }
        });
    });

    const sections: HTMLElement[] = Array.from(menuLinks)
        .map((link) => {
            const targetId = link.getAttribute("href");
            return targetId ? document.querySelector<HTMLElement>(targetId) : null;
        })
        .filter((section): section is HTMLElement => section !== null);

    const handleScroll = (): void => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        let bestMatch: HTMLElement | null = null;
        let bestVisibility = 0;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const offsetTop = scrollTop + rect.top;
            const offsetBottom = offsetTop + section.offsetHeight;

            const visibleTop = Math.max(offsetTop, scrollTop + 100);
            const visibleBottom = Math.min(offsetBottom, scrollTop + windowHeight - 100);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            if (visibleHeight > bestVisibility) {
                bestVisibility = visibleHeight;
                bestMatch = section;
            }
        });

        if (bestMatch && bestVisibility > 0) {
            const id = `#${(bestMatch as HTMLElement).id}`;
            const newActiveLink = Array.from(menuLinks).find((link) => link.getAttribute("href") === id);

            if (newActiveLink && newActiveLink !== activeLink) {
                menuLinks.forEach((link) => link.classList.remove("active"));

                newActiveLink.classList.add("active");
                activeLink = newActiveLink;

                const menuItem = activeLink.closest<HTMLElement>(".menu-item");
                if (menuItem) {
                    moveIndicatorToItem(menuItem, true);
                }
            }

            hasActiveSection = true;
            indicator.style.display = "block";
        } else {
            hasActiveSection = false;
            menuLinks.forEach((link) => link.classList.remove("active"));
            activeLink = null;

            if (!isInsideMenu) {
                indicator.style.display = "none";
            }
        }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
};
