import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
// import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Book from "./Pages/Book/Book";
import BookLayout from "./layouts/BookLayout/BookLayout";
import ErrorLayout from "./layouts/ErrorLayout/ErrorLayout";
import Wrapper from "./components/Wrapper/Wrapper";
import AboutCanvas from "./Pages/Book/AboutCanvas/AboutCanvas";

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
        </Route>

        <Route path="*" element={<ErrorLayout />} />
      </Routes>
    </Wrapper>
  );
}
