import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./books-init";

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const booksReducer = booksSlice.reducer;
