"use strict";
(() => {
  // out/view/view.js
  var GameView = class {
    constructor(canvasId) {
      const element = document.getElementById(canvasId);
      if (!element || !(element instanceof HTMLCanvasElement)) {
        throw new Error(`Fatal: Could not find canvas with id "${canvasId}"`);
      }
      this.canvas = element;
      const ctx = this.canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Fatal: Could not get 2D context");
      }
      this.context = ctx;
    }
    clear() {
      this.context.clearRect(0, 0, this.getWidth(), this.getHeight());
    }
    drawSquare(p, size, color) {
      this.context.fillStyle = color;
      this.context.fillRect(p.x, p.y, size, size);
    }
    getWidth() {
      return this.canvas.width;
    }
    getHeight() {
      return this.canvas.height;
    }
  };

  // out/model/primitives.js
  var Direction;
  (function(Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
  })(Direction || (Direction = {}));
  var Point = class {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  };

  // out/main.js
  try {
    const view = new GameView("gameCanvas");
    view.clear();
    view.drawSquare(new Point(100, 100), 20, "#4ade80");
    console.log("Success!");
  } catch (error) {
    console.log("Something went wrong: " + error);
  }
})();
