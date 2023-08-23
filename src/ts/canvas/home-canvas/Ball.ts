import { nanoid } from "nanoid";
import { canvas, ctx } from "./canvas-config";
import { pi, randInt, randNum } from "./math";

type Coor = {
  x: number,
  y: number,
}
type Rad = number;
type Vel = {
  x: number,
  y: number
};

type BallType = {
  coor?: Coor,
  rad?: Rad,
  vel?: Vel
}

type Id = string;

export default class Ball {
  rad: Rad;
  id: Id;
  coor: Coor;
  vel: Vel;

  constructor({ coor, rad, vel }: BallType) {
    this.rad = rad || randInt(1, 10);

    this.id = nanoid();
    this.coor = coor || {
      x: randInt(this.rad, canvas.width - this.rad),
      y: randInt(this.rad, canvas.height - this.rad),
    };

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
