import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
} from "../../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";


export default function UpdateStars() {
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
      <FormatTitleH3>Clearing the Canvas</FormatTitleH3>
      <FormatP>
        Every time we call <FormatMark>update</FormatMark> function we clear
        canvas in order to make an animation.
      </FormatP>
      <CodeBox>{`ctx.clearRect(0, 0, canvas.width, canvas.height);`}</CodeBox>
      <FormatTitleH3>Drawing Balls</FormatTitleH3>
      <FormatP>
        Now, we need to iterate through the balls array using a loop to draw
        each ball and calculate if we should draw a line between one ball and
        another.
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
      <FormatTitleH3>Using requestAnimationFrame</FormatTitleH3>
      <FormatP>
        We use <FormatMark>requestAnimationFrame</FormatMark> to call the update function for each frame.
      </FormatP>
      <CodeBox>{`requestAnimationFrame(update);`}</CodeBox>
      <FormatTitleH3>Drawing a Line Function</FormatTitleH3>
      <FormatP>
        To draw a line between two points, we move from the center of one ball to the center of another.
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
