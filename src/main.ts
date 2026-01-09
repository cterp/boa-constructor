import { GameView } from "./view/view";
import { Point } from "./model/primitives";

try {
    const view = new GameView("gameCanvas");

    view.clear();
    view.drawSquare(new Point(100, 100), 20, "#4ade80");
    console.log("Success!")
} catch (error) {
    console.log("Something went wrong: " + error);
}
