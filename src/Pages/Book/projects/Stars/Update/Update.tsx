import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../../ts/theme/adapt-theme";

import img from "../../../../../img/projects/config/innerWidth-innerHeight.png";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
} from "../../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";

import ImageBox from "../../../../../components/ImageBox/ImageBox";

import initImage1 from "../../../../../img/projects/config/img1.png";
import initImage2 from "../../../../../img/projects/config/img2.png";
import InfoBox from "../../../../../components/InfoBox/InfoBox";
import { InitHTML } from "../../../../../code-components/html-code/html-code";
import EditorOnline from "../../../../../components/EditorOnline/EditorOnline";
import {
  DeclareCanvas,
  DeclareCtx,
  SetCanvasSize,
} from "../../../../../code-components/js-code/canvas-code/canvas-code";
import { Br } from "../../../../../code-components/colored-code-components/html/html";
import { BracketExpression } from "../../../../../code-components/js-code/js-code";
import {
  Colon,
  Object,
  Property,
  Semicoln,
  VarName,
} from "../../../../../code-components/colored-code-components/js/js";

export default function UpdateStars() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Update function</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox>{`function drawLineBetwenTwoPoint(a,b) {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < balls.length; i++) {
        ctx.fillStyle = "#fff";
        const ball1 = balls[i];
        ball1.update();

        for (let j = i + 1; j < balls.length; j++) {
        const ball2 = balls[j];
        const dist = getDist(ball1.coor, ball2.coor);

            if (dist <= minRad) {
                ctx.lineWidth = 1 - dist / minRad;
                ctx.strokeStyle = "#fff";
                drawLineBetwenTwoPoint(ball1.coor, ball2.coor);
            }
        }
    }

    requestAnimationFrame(update);
}`}</CodeBox>
      <FormatTitleH3>Clear canvas</FormatTitleH3>
      <FormatP>
        Each canvas update we clear canvas in order to make an animation.
      </FormatP>
      <CodeBox>{`ctx.clearRect(0, 0, canvas.width, canvas.height);`}</CodeBox>
      <FormatTitleH3>Draw balls</FormatTitleH3>
      <FormatP>
        Now we need go through the balls array with loop to draw each ball and
        also to calculate if we can draw line between one ball and another.
      </FormatP>
      <CodeBox>
        {`for (let i = 0; i < balls.length; i++) {
  ctx.fillStyle = "#fff";
  const ball1 = balls[i];
  ball1.update();

  for (let j = i + 1; j < balls.length; j++) {
    const ball2 = balls[j];
    const dist = getDist(ball1.coor, ball2.coor);

    if (dist <= minRad) {
      ctx.lineWidth = 1 - dist / minRad;
      ctx.strokeStyle = "#fff";
      drawLineBetwenTwoPoint(ball1.coor, ball2.coor);
    }
  }
}`}
      </CodeBox>
      <FormatP>
        The last one we use requestAnimationFrame to call update function each frame.
      </FormatP>
      <CodeBox>{`requestAnimationFrame(update);`}</CodeBox>
      <FormatTitleH3>Draw line function</FormatTitleH3>
      <FormatP>
        We just move point to first ball center and draw line to other ball
        center.
      </FormatP>
      <CodeBox>{`function drawLineBetwenTwoPoint(a,b) {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
}`}</CodeBox>
    </>
  );
}
