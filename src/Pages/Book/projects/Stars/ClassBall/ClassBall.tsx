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

export default function ClassBall() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Class Ball</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox>{`class Ball {
  constructor({ coor, rad, vel }) {
    // make object || default value in case we don't pass argument 
    // it will be undefined then
    // the right part will be pasted

    this.rad = rad || randInt(1, 10);

    // generate unic id for future optimization
    this.id = balls.length + 1;
    
    this.coor = coor || {
      x: randInt(this.rad, canvas.width - this.rad),
      y: randInt(this.rad, canvas.height - this.rad),
    };

    // Generate random direction and then velocity
    const minSpeed = 1;
    const maxSpeed = 10;
    const speedCoof = 50;
    const speedDirection = {
      left: -1,
      right: 1,
    };

    const speedX = randInt(minSpeed, maxSpeed) / speedCoof;
    const speedXDirection = randNum(speedDirection.left, speedDirection.right);
    const speedY = randInt(minSpeed, maxSpeed) / speedCoof;
    const speedYDirection = randNum(speedDirection.left, speedDirection.right);

    const velTem = {
      x: speedX * speedXDirection,
      y: speedY * speedYDirection,
    };

    this.vel = vel || velTem;
  }

  draw() {
    const { x, y } = this.coor;
    const rad = this.rad;

    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * pi);
    ctx.fill();
  }

  move() {
    const { x: vx, y: vy } = this.vel;

    this.coor.x += vx;
    this.coor.y += vy;
  }

  checkWallCollision() {
    const { x, y } = this.coor;
    const rad = this.rad;

    if (x + rad >= canvas.width) {
      this.vel.x *= -1;
      this.coor.x = canvas.width - rad;
    } else if (x - rad <= 0) {
      this.vel.x *= -1;
      this.coor.x = rad;
    }

    if (y + rad >= canvas.height) {
      this.vel.y *= -1;
      this.coor.y = canvas.height - rad;
    } else if (y - rad <= 0) {
      this.vel.y *= -1;
      this.coor.y = rad;
    }
  }

  update() {
    this.move();
    this.checkWallCollision();
    this.draw();
  }
}

function init() {
  for (let i = 0; i < ballsNum; i++) {
    balls.push(new Ball({}));
  }
}

function drawLineBetwenTwoPoint(a,b) {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
}`}</CodeBox>
      <FormatTitleH3>
        Why do we need class if we can just use objects?
      </FormatTitleH3>
      <FormatP>
        Class help us to mark tempelate wich can be used in future to create
        several idetical objects with different parameters.
      </FormatP>
    </>
  );
}
