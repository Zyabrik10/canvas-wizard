import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Book from "./Pages/Book/Book";
import BookLayout from "./layouts/BookLayout/BookLayout";
import ErrorLayout from "./layouts/ErrorLayout/ErrorLayout";
import Wrapper from "./components/Wrapper/Wrapper";

export default function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about-us" element={<AboutUs />} /> */}
        </Route>
        <Route path="/" element={<BookLayout />}>
          <Route path="book" element={<Book />} />
        </Route>
        <Route path="*" element={<ErrorLayout />} />
      </Routes>
    </Wrapper>
  );
}
