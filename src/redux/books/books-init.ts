type Term = {
  title: string;
  path: string;
};

type Book = {
  title: string;
  terms: Array<Term>;
};

export const initialState: Array<Book> = [
  {
    title: "How to use Canvas API ?",
    terms: [
      {
        title: "What is Canvas ?",
        path: "/book/about-canvas",
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