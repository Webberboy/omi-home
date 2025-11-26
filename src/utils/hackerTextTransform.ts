export const hackerTextTransform = (): void => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    function isInViewport(element: HTMLElement): boolean {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function runEffect(element: HTMLElement, text: string, instantReveal: boolean = false): void {
        const display = text.split("").map(() => " ");
        const revealed: boolean[] = new Array(text.length).fill(false);
        const totalLength = text.length;

        const scrambleInterval = setInterval(() => {
            for (let i = 0; i < totalLength; i++) {
                if (!revealed[i]) {
                    display[i] = chars.charAt(Math.floor(Math.random() * chars.length));
                }
            }
            element.textContent = display.join("");
        }, 40);

        if (instantReveal) {
            setTimeout(() => {
                for (let i = 0; i < totalLength; i++) {
                    revealed[i] = true;
                    display[i] = text[i];
                }
                clearInterval(scrambleInterval);
                element.textContent = display.join("");
            }, 700);
        } else {
            for (let i = totalLength - 1; i >= 0; i--) {
                setTimeout(() => {
                    revealed[i] = true;
                    display[i] = text[i];

                    if (i === 0) {
                        clearInterval(scrambleInterval);
                        element.textContent = display.join("");
                    }
                }, (totalLength - 1 - i) * 150);
            }
        }
    }

    function triggerTextEffect(): void {
        const elements = document.querySelectorAll<HTMLElement>(".hacker-text_transform");

        elements.forEach((element) => {
            if (element.dataset.done) return;

            if (!isInViewport(element)) return;

            let text = element.getAttribute("data-text");
            if (!text) {
                text = element.textContent?.trim() || "";
            }

            const instantReveal = element.classList.contains("no-delay");

            setTimeout(() => {
                runEffect(element, text, instantReveal);
            }, 300);

            element.dataset.done = "true";
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", triggerTextEffect);
    } else {
        triggerTextEffect();
    }

    window.addEventListener("scroll", triggerTextEffect);
    window.addEventListener("resize", triggerTextEffect);
};
