export let canvas:HTMLCanvasElement;
export let ctx:CanvasRenderingContext2D;

export function initCanvas() {
  canvas = document.querySelector("#stars-canvas") as HTMLCanvasElement;

  if (canvas) {
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  
    canvas.width = 937;
    canvas.height = 440;
  }
}
