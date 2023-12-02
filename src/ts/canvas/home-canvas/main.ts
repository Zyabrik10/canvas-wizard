import { canvas, ctx } from "./canvas-config";
import { getDist } from "./math";
import { init, minRad, balls, fillColor } from "./init";

export let canvasTimer: any;

export function initCanvasUpdating() {
  function drawLineBetwenTwoPoint(
    a: { x: number; y: number },
    b: { x: number; y: number }
  ) {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < balls.length; i++) {
      ctx.fillStyle = fillColor;
      const ball1 = balls[i];
      ball1.update();

      for (let j = i + 1; j < balls.length; j++) {
        const ball2 = balls[j];
        const dist = getDist(ball1.coor, ball2.coor);

        if (dist <= minRad) {
          ctx.lineWidth = 1 - dist / minRad;
          ctx.strokeStyle = fillColor;
          drawLineBetwenTwoPoint(ball1.coor, ball2.coor);
        }
      }
    }
  }

  init();
  canvasTimer = setInterval(() => {
    update()
  }, 10);
}
