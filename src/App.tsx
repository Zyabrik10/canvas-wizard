import { Route, Routes } from "react-router-dom";

import { Wrapper } from "./components/index";

import { HomeLayout, BookLayout, ErrorLayout } from "./layouts/index";

import {
  Home,
  Book,
  AboutCanvas,
  CanvasAPI,
  RandomValue,
  DistanceBetweenObjects,
  InitPreveiw,
  ClassBall,
  MathVariables,
  InitStars,
  UpdateStars,
  ReactOnWindowResizeStars,
  RandomValueFromArray,
  Support,
  Projects,
} from "./Pages/index";

import "./App.module.css";

export default function App() {


  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="/book" element={<BookLayout />}>
          <Route index element={<Book />} />
          <Route path="support" element={<Support />} />
          <Route path="about-canvas" element={<AboutCanvas />} />
          <Route path="canvas-api" element={<CanvasAPI />} />
          <Route
            path="random-value-between-min-max"
            element={<RandomValue />}
          />
          <Route path="random-value-array" element={<RandomValueFromArray />} />
          <Route
            path="distance-between-objects"
            element={<DistanceBetweenObjects />}
          />
          <Route path="projects">
            <Route path="stars">
              <Route path="project-configuration" element={<InitPreveiw />} />
              <Route path="math-variables" element={<MathVariables />} />
              <Route path="class-ball" element={<ClassBall />} />
              <Route path="init" element={<InitStars />} />
              <Route path="update-function" element={<UpdateStars />} />
              <Route
                path="react-window-resize"
                element={<ReactOnWindowResizeStars />}
              />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorLayout />} />
      </Routes>
    </Wrapper>
  );
}
