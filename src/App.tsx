import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Home from "./Pages/Home/Home";
import Book from "./Pages/Book/Book";
import BookLayout from "./layouts/BookLayout/BookLayout";
import ErrorLayout from "./layouts/ErrorLayout/ErrorLayout";
import Wrapper from "./components/Wrapper/Wrapper";
import AboutCanvas from "./Pages/Book/use-canvas/AboutCanvas/AboutCanvas";
import CanvasAPI from "./Pages/Book/use-canvas/CanvasAPI/CanvasAPI";
import RandomValue from "./Pages/Book/math-physics/RandomValue/RandomValue";
import DistanceBetweenObjects from "./Pages/Book/math-physics/DistanceBetweenObjects/DistanceBetweenObjects";
import InitPreveiw from "./Pages/Book/projects/Stars/ProjectConfiguration/ProjectConfiguration";
import ClassBall from "./Pages/Book/projects/Stars/ClassBall/ClassBall";
import MathVariables from "./Pages/Book/projects/Stars/MathVariables/MathVariables";
import InitStars from "./Pages/Book/projects/Stars/Init/Init";
import UpdateStars from "./Pages/Book/projects/Stars/Update/Update";
import ReactOnWindowResizeStars from "./Pages/Book/projects/Stars/ReactOnWindowResize/ReactOnWindowResize";

export default function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/book" element={<BookLayout />}>
          <Route index element={<Book />} />
          <Route path="about-canvas" element={<AboutCanvas />} />
          <Route path="canvas-api" element={<CanvasAPI />} />
          <Route path="random-value" element={<RandomValue />} />
          <Route path="distance-between-objects" element={<DistanceBetweenObjects />} />
          <Route path="projects">
            <Route path="stars">
              <Route path="project-configuration" element={<InitPreveiw />} />
              <Route path="math-variables" element={<MathVariables />} />
              <Route path="class-ball" element={<ClassBall />} />
              <Route path="init" element={<InitStars />} />
              <Route path="update-function" element={<UpdateStars />} />
              <Route path="react-window-resize" element={<ReactOnWindowResizeStars />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorLayout />} />
      </Routes>
    </Wrapper>
  );
}
