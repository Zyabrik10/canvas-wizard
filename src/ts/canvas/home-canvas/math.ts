export const pi:number = Math.PI;
export const floor:Function = Math.floor;
export const random:Function = Math.random;
export const pow:Function = Math.pow;
export const sqrt:Function = Math.sqrt;

type Point = {
    x: number,
    y: number
}

export const randInt = (min:number, max:number) => floor(random() * (max - min + 1) + min);
export const randNum = (...nums:Array<number>) => nums[floor(random() * nums.length)];
export const getDist = (a:Point, b:Point) => sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));
