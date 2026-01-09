import { Point } from "../model/primitives";

export class GameView {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(canvasId: string) {
        const element = document.getElementById(canvasId);

        // fail immediately if this is not a canvas
        if (!element || !(element instanceof HTMLCanvasElement)) {
            throw new Error(`Fatal: Could not find canvas with id "${canvasId}"`);
        }

        this.canvas = element;

        // Get the 2D drawing context
        const ctx = this.canvas.getContext("2d");
        if (!ctx) {
            throw new Error("Fatal: Could not get 2D context");
        }
        
        this.context = ctx;
    }

    public clear(): void {
        this.context.clearRect(0, 0, this.getWidth(), this.getHeight());
    }

    public drawSquare(p: Point, size: number, color: string): void {
        this.context.fillStyle = color;
        this.context.fillRect(p.x, p.y, size, size);
    }

    public getWidth(): number {
        return this.canvas.width;
    }

    public getHeight(): number {
        return this.canvas.height;
    }
}
