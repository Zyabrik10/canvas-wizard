import Ball from "./Ball";
import { getUser } from "../../local-storage/local-storage";

const { theme }: {theme:string} = getUser();

export let balls:Array<Ball>;

export const minRad:number = 100;

export let fillColor:string = theme !== "dark" ? "#141a1f" : "#fff";

export function setFillColor(color:string){
  fillColor = color;
}

export function init() {
  balls = [];

  const ballsNum:number = 50;

  for (let i: number = 0; i < ballsNum; i++) {
    const ball: Ball = new Ball({});

    balls.push(new Ball(ball));
  }
}
