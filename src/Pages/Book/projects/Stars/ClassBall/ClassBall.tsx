import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
  FormatListUl,
  FormatLink,
} from "../../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";

import InfoBox from "../../../../../components/InfoBox/InfoBox";


export default function ClassBall() {
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
`}</CodeBox>
      <FormatTitleH3>
        Why do we need class if we can just use objects?
      </FormatTitleH3>
      <FormatP>
        Class help us to mark tempelate wich can be used in future to create
        several idetical objects with different parameters.
      </FormatP>
      <FormatTitleH3>Constructor</FormatTitleH3>
      <FormatP>
        The constructor is a special method that gets called when an object of
        the type is created. It's also where you initialize your properties and
        set their initial values.
        <b>Note:</b>
        <i>
          The name of the function should always match the name of its
          containing class.
        </i>
      </FormatP>
      <FormatP>Our constructor will be so</FormatP>
      <CodeBox>
        {`constructor({ coor, rad, vel }) {
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
  }`}
      </CodeBox>
      <InfoBox type="extra" dir="row">
        <FormatP>
          we distract our object to get propertys, but if we don't pass any
          propertys they will be <FormatMark>undefined</FormatMark>. That is why
          we check <FormatMark>object || default</FormatMark>
        </FormatP>
      </InfoBox>
      <FormatP>In this constructor we have such parameters:</FormatP>
      <FormatListUl>
        <li>rad - radius</li>
        <li>coor - coordination</li>
        <li>vel - velocity</li>
      </FormatListUl>
      <InfoBox type="extra" dir="row">
        We also use id. We need it in the future for optimization.
      </InfoBox>
      <FormatTitleH3>Draw function</FormatTitleH3>
      <FormatP>To display our balls we need to draw theme on canvas.</FormatP>
      <CodeBox>
        {`draw() {
   const { x, y } = this.coor;
   const rad = this.rad;

   ctx.beginPath();
   ctx.arc(x, y, rad, 0, 2 * pi);
   ctx.fill();
}`}
      </CodeBox>
      <InfoBox type="extra" dir="row">
        If you don't remember how <FormatMark>ctx.arc()</FormatMark> works see
        this{" "}
        <FormatLink href="/book/canvas-api" isHere>
          CANVAS API
        </FormatLink>
      </InfoBox>
      <FormatTitleH3>Move function</FormatTitleH3>
      <FormatP>
        Move function will use balls velocity to make diractional movement of
        balls.
      </FormatP>
      <CodeBox>
        {`move() {
  const { x: vx, y: vy } = this.vel;

  this.coor.x += vx;
  this.coor.y += vy;
}`}
      </CodeBox>
      <FormatTitleH3>checkWallCollision function</FormatTitleH3>
      <FormatP>
        If we want balls not to go through walls we need to prohibit it.
      </FormatP>
      <CodeBox>
        {`checkWallCollision() {
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
}`}
      </CodeBox>
      <FormatTitleH3>update function</FormatTitleH3>
      <FormatP>
        Every changes we do to our ball is its update. So let's put all our updates in one function update.
      </FormatP>
      <CodeBox>
        {`update() {
  this.move();
  this.checkWallCollision();
  this.draw();
}`}
      </CodeBox>
    </>
  );
}
