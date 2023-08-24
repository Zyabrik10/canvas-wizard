export let canvas: HTMLCanvasElement;
export let ctx: CanvasRenderingContext2D;

export function initCanvas() {
  canvas = document.querySelector("#stars-canvas") as HTMLCanvasElement;

  if (canvas) {
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    if (window.innerWidth <  937) {
      canvas.width = window.innerWidth - 20;
      canvas.height = 340;
    } else {
      canvas.width = 937;
      canvas.height = 440;
    }
  }
}