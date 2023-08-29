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
    title: "How to use Canvas ?",
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
        path: "/book/random-value-between-min-max",
      },
      {
        title: "Random value from array",
        path: "/book/random-value-array",
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
        title: "Project configuration",
        path: "/book/projects/stars/project-configuration",
      },
      {
        title: "Math Variables",
        path: "/book/projects/stars/math-variables",
      },
      {
        title: "Class Ball",
        path: "/book/projects/stars/class-ball",
      },
      {
        title: "Init",
        path: "/book/projects/stars/init",
      },
      {
        title: "Update function",
        path: "/book/projects/stars/update-function",
      },
      {
        title: "React on window reszie",
        path: "/book/projects/stars/react-window-resize",
      },
    ],
  },
];