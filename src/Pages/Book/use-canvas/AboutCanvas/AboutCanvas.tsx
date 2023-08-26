import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../ts/theme/adapt-theme";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatLink,
  FormatCode,
} from "../../../../components/FormatedComponents/FormatedComponents";

export default function AboutCanvas() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>What is Canvas?</FormatTitleH2>
      <FormatCode id="canvas">{`<canvas></canvas>`}</FormatCode>
      <FormatCode id="canvas">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Canvas</title>
</head>
<body>
    <canvas></canvas>
    <script src="./js/main.js"></script>
</body>
</html>`}</FormatCode>
      <FormatP>
        {`<canvas>`} - HTML element that provides you with varaity functoins for
        drawing graphics.
      </FormatP>
      <FormatP>
        In order to start using it you should understand basics of HTML and you
        have to know basics of JavaScript. Without these knowledge you will
        encounter a non-understandable text problem.
      </FormatP>
      <FormatP>
        Also you will need some basics knowledge of math and physics. Don`t
        worry if you don`t remember almost anything. I will tell about them.
      </FormatP>
      <FormatP>
        With Canvas you develop interesting things. For example: for your website, for
        just relaxing, simulating physics or even game. This can, for instance,
        be used to draw graphs, combine photos, or create simple animations.
      </FormatP>
      <FormatP>
        Here is a few examples what you can do with only canvas and js.
      </FormatP>
      <iframe
        height="500"
        style={{ width: "100%" }}
        scrolling="no"
        title="Canvas Orbital Trails"
        src="https://codepen.io/jackrugile/embed/kMWyeM?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/jackrugile/pen/kMWyeM">
          Canvas Orbital Trails
        </a>{" "}
        by Jack Rugile (<a href="https://codepen.io/jackrugile">@jackrugile</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
      <iframe
        height="500"
        style={{ width: "100%" }}
        scrolling="no"
        title="Rainbow Spider"
        src="https://codepen.io/run-time/embed/abYeqZ?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/run-time/pen/abYeqZ">Rainbow Spider</a> by
        Dave Alger (<a href="https://codepen.io/run-time">@run-time</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
      <iframe
        height="500"
        style={{ width: "100%", marginBottom: "20px" }}
        scrolling="no"
        title="Lightning"
        src="https://codepen.io/akm2/embed/DbNJXr?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen <a href="https://codepen.io/akm2/pen/DbNJXr">Lightning</a>{" "}
        by Akimitsu Hamamuro (<a href="https://codepen.io/akm2">@akm2</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
      <FormatP>
        To see more just google it as
        <FormatMark>canvas js projects</FormatMark> to find more websites with
        canvas projects.
      </FormatP>
      <FormatP>
        Link on one of theme{" "}
        <FormatLink href="https://webdesign.tutsplus.com/21-ridiculously-impressive-html5-canvas-experiments--net-14210a">
          canvas projects
        </FormatLink>
      </FormatP>
    </>
  );
}
