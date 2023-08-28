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
  FormatListUl,
  FormatLink,
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

export default function MathVariables() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Math variables</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox filename="main.js">
        {`const pi = Math.PI;
const floor = Math.floor;
const random = Math.random;
const pow = Math.pow;
const sqrt = Math.sqrt;

const randInt = (min, max) => floor(random() * (max - min + 1) + min);
const randNum = (...nums) => nums[floor(random() * nums.length)];
const getDist = (a, b) => sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));`}
      </CodeBox>
      <FormatP>
        Now to make quick access for our code expiriance to be more flexable and
        sutisfaying let`s put <FormatMark>Math</FormatMark> methods to a
        varibales accordingly. So now we won`t need to address by class{" "}
        <FormatMark>Math</FormatMark> to get this method.
      </FormatP>
      <CodeBox filename="main.js">
        {`const pi = Math.PI;
const floor = Math.floor;
const random = Math.random;
const pow = Math.pow;
const sqrt = Math.sqrt;

console.log(pi) // 3.14
console.log(floor(5.8)) // 5
console.log(random()) // 0.1052091339071819
console.log(pow(2, 2)) // 2
console.log(sqrt(36)) // 6`}
      </CodeBox>
      <FormatP>We also will need some own functions.</FormatP>
      <CodeBox filename="main.js">
              {`const randInt = (min, max) => floor(random() * (max - min + 1) + min);
const randNum = (...nums) => nums[floor(random() * nums.length)];
const getDist = (a, b) => sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));

console.log(randInt(1, 10)); // 7
console.log(randNum(1, 2, 3, 5, 6, 7, 8, 9, 10)); // 4

const A = {
    x: 2,
    y: 2,
}

const B = {
    x: 8,
    y: 10,
}

console.log(getDist(A, B)); // 10`}
          </CodeBox>
          <InfoBox type="row">
              <FormatP>
                If you  don`t understand how these functions work, here are links on their articles:
              </FormatP>
              <FormatListUl>
                  <li>
                      <FormatLink href="/book/random-value" isHere>
                          randInt()
                      </FormatLink>
                  </li>
                  <li>
                      <FormatLink href="/book/random-value" isHere>
                            randNum()
                      </FormatLink>
                  </li>
                  <li>
                      <FormatLink href="/book/distance-between-objects" isHere>
                            getDist()
                      </FormatLink>
                  </li>
              </FormatListUl>
          </InfoBox>
    </>
  );
}
