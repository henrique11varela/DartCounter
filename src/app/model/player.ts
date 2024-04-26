export class Player {
    public points: number;
    constructor(points: number = 0) {
        this.points = points
    }
    addPoints(qty: number) {
        this.points += qty
    }
    removePoints(qty: number) {
        this.points -= qty
    }
}