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
      {
        title: "CANVAS API",
        path: "/book/canvas-api",
      },
    ],
  },
  {
    title: "Math And Physics",
    terms: [
      {
        title: "Random value between min and max value",
        path: "/book/random-value",
      },
      {
        title: "Distance between objects",
        path: "/book/distance-between-objects",
      },
      // {
      //   title: "Collision between reactangles",
      //   path: "/book/collision-between-reactangles",
      // },
      // {
      //   title: "Collision between circles",
      //   path: "/book/collision-between-circles",
      // },
      // {
      //   title: "Collision between reactangle and cirlcle",
      //   path: "/book/collision-between-reactangles-cirlcles",
      // },
    ],
  },
  {
    title: "Stars",
    terms: [
      {
        title: "Init and Preview",
        path: "/book/projects/stars/init-preview",
      },
      {
        title: "Class Ball",
        path: "/book/projects/stars/class-ball",
      },
      {
        title: "Function Init",
        path: "/book/projects/stars/init",
      },
      {
        title: "Function Update",
        path: "/book/projects/stars/function-update",
      },
    ],
  },
];