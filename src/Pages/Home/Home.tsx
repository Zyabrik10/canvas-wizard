import { initCanvas } from "ts/canvas/home-canvas/canvas-config";
import { initCanvasUpdating } from "ts/canvas/home-canvas/main";

import { useEffect } from "react";

import Hero from "./Hero/Hero";
import About from "./About/About";
// import Projects from "./Projects/Projects";

export default function Home() {

  useEffect(() => {
    initCanvas();
    initCanvasUpdating();
  });

  return (
    <>
      <Hero />
      <About />
      {/* <Projects /> */}
    </>
  );
}
