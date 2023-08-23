import { createSlice } from "@reduxjs/toolkit";

type Term = {
  title: string;
  path: string;
};

type Book = {
  title: string;
  terms: Array<Term>;
};

const initialState: Array<Book> = [
  {
    title: "How to use Canvas API ?",
    terms: [
      {
        title: "What is Canvas ?",
        path: "/",
      },
    ],
  },
  {
    title: "Math And Physics",
    terms: [
      {
        title: "Get distance between two objects",
        path: "/",
      },
    ],
  },
];

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const booksReducer = booksSlice.reducer;
