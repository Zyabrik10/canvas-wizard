import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Home from "./Pages/Home/Home";
import Book from "./Pages/Book/Book";
import BookLayout from "./layouts/BookLayout/BookLayout";
import ErrorLayout from "./layouts/ErrorLayout/ErrorLayout";
import Wrapper from "./components/Wrapper/Wrapper";
import AboutCanvas from "./Pages/Book/AboutCanvas/AboutCanvas";
import CanvasAPI from "./Pages/Book/CanvasAPI/CanvasAPI";
import RandomValue from "./Pages/Book/RandomValue/RandomValue";
import DistanceBetweenObjects from "./Pages/Book/DistanceBetweenObjects/DistanceBetweenObjects";
import CollisionBetweenReactangles from "./Pages/Book/CollisionBetweenReactangles/CollisionBetweenReactangles";
import CollisionBetweenCircles from "./Pages/Book/CollisionBetweenCircles/CollisionBetweenCircles";
import CollisionBetweenReactangleCirlcle from "./Pages/Book/CollisionBetweenReactangleCirlcle/CollisionBetweenReactangleCirlcle";

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
          <Route path="collision-between-reactangles" element={<CollisionBetweenReactangles />} />
          <Route path="collision-between-circles" element={<CollisionBetweenCircles />} />
          <Route path="collision-between-reactangles-cirlcles" element={<CollisionBetweenReactangleCirlcle />} />
        </Route>
        <Route path="*" element={<ErrorLayout />} />
      </Routes>
    </Wrapper>
  );
}
