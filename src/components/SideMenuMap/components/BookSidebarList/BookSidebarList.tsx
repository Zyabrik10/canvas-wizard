import css from "./BookSidebarList.module.css";

import BookSidebarItem from "./components/BookSidebarItem/BookSidebarItem";

import { selectBooks } from "redux/books/books-selector";
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
    <ul className={css["book-sidebar-list"]}>
      {books.map(({ title, terms }: Book) => (
        <BookSidebarItem key={nanoid()} title={title} terms={terms} />
      ))}
    </ul>
  );
}
