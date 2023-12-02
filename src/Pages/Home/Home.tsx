import { initCanvas } from "ts/canvas/home-canvas/canvas-config";
import { initCanvasUpdating, canvasTimer } from "ts/canvas/home-canvas/main";

import { useEffect } from "react";

import Hero from "./Hero/Hero";
import About from "./About/About";

export default function Home() {

  useEffect(() => {
    initCanvas();
    initCanvasUpdating();

    return function () {
      console.log("pnp");
      clearInterval(canvasTimer);
    }
  });

  return (
    <>
      <Hero />
      <About />
    </>
  );
}
