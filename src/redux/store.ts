import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-redux";
import { booksReducer } from "./books/books-redux";
import { mobileMenuReducer } from "./mobileMenu/mobileMenu-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    books: booksReducer,
    mobileMenu: mobileMenuReducer
  },
});
