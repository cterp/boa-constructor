/**
 * Primitive types and interfaces for the Snake game.
 */

export enum Direction {
    Up,
    Down,
    Left,
    Right
}

export class Point {
    constructor(public x: number, public y: number) {}
}
