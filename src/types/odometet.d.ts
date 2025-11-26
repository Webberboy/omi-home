declare module "odometer" {
    interface OdometerOptions {
        el: HTMLElement;
        value?: number;
        theme?: string;
        format?: string;
        duration?: number;
        animation?: "count" | "slide";
    }

    class Odometer {
        constructor(options: OdometerOptions);
        update(newValue: number): void;
    }

    export default Odometer;
}
