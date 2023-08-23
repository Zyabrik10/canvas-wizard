import globalCss from "../../../css/global.module.css";
import css from "../styles/SideMenuMap.module.css";

import BookSidebarItem from "./BookSidebarItem/BookSidebarItem";

import { selectBooks } from "../../../redux/books/books-selector";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

export default function BookSidebarList() {
  type Term = {
    title: string;
    path: string;
  };

  type Book = {
    title: string;
    terms: Array<Term>;
  };

  const books: Array<Book> = useSelector(selectBooks);

  return (
    <ul className={`${css["book-sidebar-list"]} ${globalCss["global-list"]}`}>
      {books.map(({ title, terms }: Book) => (
        <BookSidebarItem key={nanoid()} title={title} terms={terms} />
      ))}
    </ul>
  );
}
