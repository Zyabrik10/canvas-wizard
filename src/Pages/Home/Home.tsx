import { initCanvas } from "../../ts/canvas/home-canvas/canvas-config";
import { initCanvasUpdating } from "../../ts/canvas/home-canvas/main";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";
import { adaptTheme } from "../../ts/theme/adapt-theme";

import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";

export default function Home() {
  const { theme }:{ theme: string } = useSelector(selectUser);

  useEffect(() => {
    initCanvas();
    initCanvasUpdating();
  }, []);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}
