import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../ts/theme/adapt-theme";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatLink,
  FormatTitleH3,
  FormatCode,
  FormatListUl,
} from "../../../../components/FormatedComponents/FormatedComponents";

import globalCss from "../../../css/global.module.css";

export default function DistanceBetweenObjects() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Distance between objects</FormatTitleH2>

      {/*  */}

      <FormatTitleH3>Function ready to be used</FormatTitleH3>
      <FormatCode id="">
        const getDist = (a, b) {"=>"} Math.sqrt(Math.pow(a.x - b.x, 2) +
        Math.pow(a.y - b.y, 2));
      </FormatCode>
      <FormatTitleH3>Theorem of Pythagoras</FormatTitleH3>
      <FormatP>
        Theorem of Pythagoras -{" "}
        <FormatMark>
          a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
        </FormatMark>
        .
      </FormatP>
      <FormatP>
        We have 2d coordinte system and two points in it. Points have their own
        coordinates <FormatMark>A(x, y) B(x, y)</FormatMark>.
      </FormatP>
      <FormatP>
        Let`s say point <FormatMark>A</FormatMark> has such coordinates{" "}
        <FormatMark>(2, 2)</FormatMark> and point <FormatMark>B</FormatMark>{" "}
        such <FormatMark>(8, 10)</FormatMark>.
      </FormatP>
      <FormatCode id="">{`const A = {
  x: 2,
  y: 2
}
const B = {
  x: 8,
  y: 10
}

console.log(A, B); // {x: 2, y: 2} {x: 8, y: 10}`}</FormatCode>
      <FormatP>
        Theorem of Pythagoras uses lengthes of sides of triangle. Our points
        make triangle if we connect point <FormatMark>A</FormatMark> and point{" "}
        <FormatMark>B</FormatMark> and draw lines from point{" "}
        <FormatMark>A</FormatMark> to <FormatMark>B</FormatMark> on{" "}
        <FormatMark>x axie</FormatMark> and from <FormatMark>A</FormatMark> to{" "}
        <FormatMark>B</FormatMark> on <FormatMark>y axie</FormatMark>.
      </FormatP>
      <FormatP>
        Now, all we have to do is just find the lengthes of sides of this
        triangle. Hypotenuse will be our distance between two points{" "}
        <FormatMark>modulus vector</FormatMark>.
      </FormatP>
      <FormatP>
        <FormatTitleH3>Lengthes between A and B</FormatTitleH3>
        Length between <FormatMark>A</FormatMark> and <FormatMark>B</FormatMark>{" "}
        on <FormatMark>x axie</FormatMark> is their difference{" "}
        <FormatMark>(A.x - B.x) 2 - 8 = -6</FormatMark> and between{" "}
        <FormatMark>A</FormatMark> and <FormatMark>B</FormatMark> on{" "}
        <FormatMark>y axie</FormatMark>is also thier difference{" "}
        <FormatMark>(A.y - B.y) 2 - 10 = -8</FormatMark>.
      </FormatP>
      <FormatCode id="">{`const A = {
  x: 2,
  y: 2
}
const B = {
  x: 8,
  y: 10
}
const xLength = A.x - B.x; // 2 - 8 = -6;
const yLength = A.y - B.y; // 2 - 10 = -8;`}</FormatCode>
      <FormatP>
        It`s hard to work with negative length so we need to multiply it by{" "}
        <FormatMark>-1</FormatMark> <FormatMark>(2 - 8) * -1 = 6</FormatMark>{" "}
        <FormatMark>(2 - 10) * -1 = 8</FormatMark> or just to find modulus of
        this number <FormatMark>[2 - 8] = 6</FormatMark>{" "}
        <FormatMark>[2 - 10] = 8</FormatMark>.
      </FormatP>
      <FormatP>
        There is a a method <FormatMark>abs()</FormatMark> in class{" "}
        <FormatMark>Math</FormatMark>. It returns the absolute value or just the
        value without its sign.
      </FormatP>
      <FormatCode id="">{`const A = {
  x: 2,
  y: 2
}
const B = {
  x: 8,
  y: 10
}
const xLength = (A.x - B.x) * -1; // (2 - 8) * -1 = 6;
const yLength = (A.y - B.y) * -1; // (2 - 10) * -1 = 8;

// or

const xLength = Math.abs(A.x - B.x); // [2 - 8] = 6;
const yLength = Math.abs(A.y - B.y); // [2 - 10] = 8;

console.log(xLength, yLength); // 6 8`}</FormatCode>
      <FormatTitleH3>Get distance between points</FormatTitleH3>
      <FormatP>
        So <FormatMark>legs</FormatMark> in our triangle are{" "}
        <FormatMark>a = 6</FormatMark> and <FormatMark>b = 8</FormatMark>. Now
        we have everything to use <FormatMark>Theorem of Pythagoras</FormatMark>{" "}
        <br />
        <FormatMark>36 + 64 = 100</FormatMark>{" "}
        <FormatMark>
          6<sup>2</sup> + 8<sup>2</sup> = 10<sup>2</sup>
        </FormatMark>
        .
      </FormatP>
      <FormatP>
        Let`s use <FormatMark>pow()</FormatMark> method in class{" "}
        <FormatMark>Math</FormatMark> in order not to copy numbers to power them
        by 2 <FormatMark>6 * 6</FormatMark> <FormatMark>8 * 8</FormatMark>{" "}
      </FormatP>
      <FormatP>
        <FormatMark>
          Math.pow(x, y) = x<sup>y</sup>
        </FormatMark>{" "}
        - returns the value of x to the power of y.
      </FormatP>
      <FormatCode id="">{`const A = {
  x: 2,
  y: 2
}
const B = {
  x: 8,
  y: 10
}
  
const xLength = (A.x - B.x) * -1; // (2 - 8) * -1 = 6;
const yLength = (A.y - B.y) * -1; // (2 - 10) * -1 = 8;
  
// or
  
const xLength = Math.abs(A.x - B.x); // [2 - 8] = 6;
const yLength = Math.abs(A.y - B.y); // [2 - 10] = 8;
  
const middleValue = Math.pow(xLength, 2) + Math.pow(yLength, 2); // (6 * 6) + (8 * 8) = 100
console.log(middleValue); // 100`}</FormatCode>
      <FormatP>
        But <FormatMark>100</FormatMark> is the length powerd by 2 so we need to
        find squer root of <FormatMark>100</FormatMark>{" "}
        <FormatMark>
          6<sup>2</sup> + 8<sup>2</sup> = 10<sup>2</sup>
        </FormatMark>
        .
      </FormatP>
      <FormatP>
        There is a method <FormatMark>sqrt()</FormatMark> in class{" "}
        <FormatMark>Math</FormatMark>.
      </FormatP>
      <FormatP>
        <FormatMark>Math.sqrt(x)</FormatMark> - returns the square root of a x.
      </FormatP>
      <FormatCode id="">{`const A = {
  x: 2,
  y: 2
}
const B = {
  x: 8,
  y: 10
}

const xLength = (A.x - B.x) * -1; // (2 - 8) * -1 = 6;
const yLength = (A.y - B.y) * -1; // (2 - 10) * -1 = 8;

// or

const xLength = Math.abs(A.x - B.x); // [2 - 8] = 6;
const yLength = Math.abs(A.y - B.y); // [2 - 10] = 8;

const middleValue = Math.pow(xLength, 2) + Math.pow(yLength, 2); // (6 * 6) + (8 * 8) = 100
const distanceBetweenAandB = Math.sqrt(middleValue); // 10
console.log(distanceBetweenAandB); // 10`}</FormatCode>
      <FormatP>
        The distance between two points <FormatMark>A(2, 2)</FormatMark> and{" "}
        <FormatMark>A(8, 10)</FormatMark> is 10.
      </FormatP>
      <FormatP>Let`s make a function to reuse this in the future.</FormatP>
      <FormatCode id="">{`function getDist(a, b){
    const xLength = Math.abs(A.x - B.x);
    const yLength = Math.abs(A.y - B.y);
    
    const middleValue = Math.pow(xLength, 2) + Math.pow(yLength, 2);
    const distanceBetweenAandB = Math.sqrt(middleValue);
    
    return distanceBetweenAandB;
}

const A = {
  x: 2,
  y: 2
}

const B = {
  x: 8,
  y: 10
}

const distance = getDist(A, B);

console.log(distance); // 10`}</FormatCode>
      <FormatP>
        Now we know how <FormatMark>getDist()</FormatMark> frunction works
        inside. Let`s make it smaller.
      </FormatP>
      <FormatCode id="">
        const getDist = (a, b) {"=>"} Math.sqrt(Math.pow(a.x - b.x, 2) +
        Math.pow(a.y - b.y, 2));
      </FormatCode>
    </>
  );
}
