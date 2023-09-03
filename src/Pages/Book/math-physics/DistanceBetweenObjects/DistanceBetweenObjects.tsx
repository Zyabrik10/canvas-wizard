import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
} from "../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../components/CodeBox/CodeBox";

import {
  BracketExpression,
  CallFunction,
  ConsoleLog,
  ConstVariable,
  FunctionDeclare,
  Return,
  UseObject,
} from "../../../../code-components/js-code/js-code";

import { Br } from "../../../../code-components/colored-code-components/html/html";

import {
  Coma,
  Comment,
  Number,
  Sign,
  VarName,
} from "../../../../code-components/colored-code-components/js/js";

import { GetDistFunction } from "../../../../code-components/js-code/canvas-code/canvas-code";

import { ObjectA, ObjectB } from "./Code/Code";

export default function DistanceBetweenObjects() {
  return (
    <>
      <FormatTitleH2>Distance between objects</FormatTitleH2>

      {/*  */}

      <FormatTitleH3>Function ready to be used</FormatTitleH3>
      <CodeBox>
        <GetDistFunction />
      </CodeBox>
      <FormatTitleH3>The Pythagorean Theorem</FormatTitleH3>
      <FormatP>
        The Pythagorean Theorem - a math rule written as
        <FormatMark>a² + b² = c²</FormatMark>.
      </FormatP>
      <FormatP>
        We have 2d coordinte system and two points in it. Points have their own
        coordinates <FormatMark>A(x, y) </FormatMark> and{" "}
        <FormatMark>B(x, y)</FormatMark>.
      </FormatP>
      <FormatP>
        Let's say point <FormatMark>A</FormatMark> has such coordinates{" "}
        <FormatMark>(2, 2)</FormatMark> and point <FormatMark>B</FormatMark> has
        such coordinates<FormatMark>(8, 10)</FormatMark>.
      </FormatP>
      <CodeBox>
        <ObjectA />
        <Br />
        <ObjectB />
        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="A" />
          <Coma />
          <VarName value="B" />
        </ConsoleLog>
        <Comment value="{x: 2, y: 2} {x: 8, y: 10}" />
        <Br />
      </CodeBox>
      <FormatP>
        The Pythagorean Theorem helps us with the lengths of the sides of a
        triangle. In our case, when we connect Point A and Point B and draw
        lines from Point A to B along the horizontal (x-axis) and vertical
        (y-axis) directions, it forms a triangle.
      </FormatP>
      <FormatP>
        To find the lengths of these sides, we use the theorem. The longest
        side, called the hypotenuse, represents the distance between the two
        points.
      </FormatP>
      <FormatTitleH3>Lengthes between A and B</FormatTitleH3>
      <FormatP>
        To find the distance between points <FormatMark>A</FormatMark> and{" "}
        <FormatMark>B</FormatMark> on the <FormatMark>x-axis</FormatMark>, we
        subtract their x-coordinates:{" "}
        <FormatMark>A.x - B.x = 2 - 8 = -6</FormatMark>. Similarly, the distance
        between <FormatMark>A</FormatMark> and <FormatMark>B</FormatMark> on the{" "}
        <FormatMark>y-axis</FormatMark> is calculated by subtracting their
        y-coordinates:<FormatMark>(A.y - B.y) = (2 - 10) = -8</FormatMark>.
      </FormatP>
      <CodeBox>
        <ObjectA />
        <Br />
        <ObjectB />
        <Br />
        <Br />
        <ConstVariable name="xLength">
          <UseObject name="A" propertys={["x"]} />
          <Sign value="-" />
          <UseObject name="B" propertys={["x"]} />
        </ConstVariable>
        <Comment value="2 - 8 = -6" />
        <Br />
        <ConstVariable name="yLength">
          <UseObject name="A" propertys={["y"]} />
          <Sign value="-" />
          <UseObject name="B" propertys={["y"]} />
        </ConstVariable>
        <Comment value="2 - 10 = -8" />
        <Br />
        <Br />

        <ConsoleLog>
          <VarName value="xLength" />
          <Coma />
          <VarName value="yLength" />
        </ConsoleLog>
        <Comment value="-6, -8" />
      </CodeBox>
      <FormatP>
        Working with negative distances can be tricky, so we can make them
        positive by multiplying them by <FormatMark>-1</FormatMark>:{" "}
        <FormatMark>(-6) * -1 = 6</FormatMark>. Alternatively, we can use the
        <FormatMark>Math.abs()</FormatMark> method to get the absolute
        (positive) value of the number.
      </FormatP>
      <CodeBox>
        <ObjectA />
        <Br />
        <ObjectB />
        <Br />
        <Br />
        <ConstVariable name="xLength">
          <BracketExpression brackets="()">
            <UseObject name="A" propertys={["x"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["x"]} />
          </BracketExpression>
          <Sign value="*" />
          <Number value="-1" />
        </ConstVariable>
        <Comment value="(2 - 8) * -1 = 6" />
        <Br />
        <ConstVariable name="yLength">
          <BracketExpression brackets="()">
            <UseObject name="A" propertys={["y"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["y"]} />
          </BracketExpression>
          <Sign value="*" />
          <Number value="-1" />
        </ConstVariable>
        <Comment value="(2 - 10) * -1 = 8" />
        <Br />
        <Br />
        <Comment value="or" />
        <Br />
        <Br />
        <ConstVariable name="xLength">
          <UseObject name="Math" method="abs">
            <UseObject name="A" propertys={["x"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["x"]} />
          </UseObject>
        </ConstVariable>
        <Comment value="[2 - 8] = 6" />
        <Br />
        <ConstVariable name="yLength">
          <UseObject name="Math" method="abs">
            <UseObject name="A" propertys={["y"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["y"]} />
          </UseObject>
        </ConstVariable>
        <Comment value="[2 - 10] = 8" />
        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="xLength" />
          <Coma />
          <VarName value="yLength" />
        </ConsoleLog>
        <Comment value="6 8" />
        <Br />
      </CodeBox>
      <FormatTitleH3>Get distance between points</FormatTitleH3>
      <FormatP>
        Now, let's find the distance between two points using the Pythagorean
        Theorem. In our triangle, the lengths of the legs are{" "}
        <FormatMark>a = 6</FormatMark> and <FormatMark>b = 8</FormatMark>.
      </FormatP>
      <FormatP>
        We can use the Pythagorean Theorem, which is expressed as:{" "}
        <FormatMark>a² + b² = c²</FormatMark>
        So, <FormatMark>6² + 8² = 36 + 64 = 100 = c²</FormatMark>
      </FormatP>
      <FormatP>
        To make our calculations easier, let's use the{" "}
        <FormatMark>Math.pow()</FormatMark> method from the{" "}
        <FormatMark>Math</FormatMark> class to raise numbers to the power of 2
        (square them):
      </FormatP>
      <FormatP>
        <FormatMark>
          Math.pow(x, y) = x<sup>y</sup>
        </FormatMark>{" "}
        - returns the value of x to the power of y.
      </FormatP>
      <CodeBox>
        <ObjectA />
        <Br />
        <ObjectB />
        <Br />
        <Br />
        <ConstVariable name="xLength">
          <BracketExpression brackets="()">
            <UseObject name="A" propertys={["x"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["x"]} />
          </BracketExpression>
          <Sign value="*" />
          <Number value="-1" />
        </ConstVariable>
        <Comment value="(2 - 8) * -1 = 6" />
        <Br />
        <ConstVariable name="yLength">
          <BracketExpression brackets="()">
            <UseObject name="A" propertys={["y"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["y"]} />
          </BracketExpression>
          <Sign value="*" />
          <Number value="-1" />
        </ConstVariable>
        <Comment value="(2 - 10) * -1 = 8" />
        <Br />
        <Br />
        <Comment value="or" />
        <Br />
        <Br />
        <ConstVariable name="xLength">
          <UseObject name="Math" method="abs">
            <UseObject name="A" propertys={["x"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["x"]} />
          </UseObject>
        </ConstVariable>
        <Comment value="[2 - 8] = 6" />
        <Br />
        <ConstVariable name="yLength">
          <UseObject name="Math" method="abs">
            <UseObject name="A" propertys={["y"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["y"]} />
          </UseObject>
        </ConstVariable>
        <Comment value="[2 - 10] = 8" />
        <Br />
        <ConstVariable name="PythagorasTheoremValue">
          <UseObject name="Math" method="pow">
            <VarName value="xLength" />
            <Coma />
            <Number value="2" />
          </UseObject>
          <Sign value="+" />
          <UseObject name="Math" method="pow">
            <VarName value="yLength" />
            <Coma />
            <Number value="2" />
          </UseObject>
        </ConstVariable>
        <Comment value="(6 * 6) + (8 * 8) = 100" />
        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="PythagorasTheoremValue" />
        </ConsoleLog>
        <Comment value="100" />
      </CodeBox>
      <FormatP>
        However, this result (100) is the length squared, so we need to find the
        square root of 100, which is the final distance.
      </FormatP>
      <FormatP>
        To do this, we can use the <FormatMark>Math.sqrt()</FormatMark> method
        from the Math class:
      </FormatP>
      <FormatP>
        <FormatMark>Math.sqrt(x)</FormatMark> - returns the square root of a x.
      </FormatP>
      <CodeBox>
        <ObjectA />
        <Br />
        <ObjectB />
        <Br />
        <Br />

        <ConstVariable name="xLength">
          <UseObject name="Math" method="abs">
            <UseObject name="A" propertys={["x"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["x"]} />
          </UseObject>
        </ConstVariable>
        <Comment value="[2 - 8] = 6" />
        <Br />
        <ConstVariable name="yLength">
          <UseObject name="Math" method="abs">
            <UseObject name="A" propertys={["y"]} />
            <Sign value="-" />
            <UseObject name="B" propertys={["y"]} />
          </UseObject>
        </ConstVariable>
        <Comment value="[2 - 10] = 8" />
        <Br />
        <ConstVariable name="PythagorasTheoremValue">
          <UseObject name="Math" method="pow">
            <VarName value="xLength" />
            <Coma />
            <Number value="2" />
          </UseObject>
          <Sign value="+" />
          <UseObject name="Math" method="pow">
            <VarName value="yLength" />
            <Coma />
            <Number value="2" />
          </UseObject>
        </ConstVariable>
        <Comment value="(6 * 6) + (8 * 8) = 100" />
        <Br />
        <ConstVariable name="distanceBetweenAandB">
          <UseObject name="Math" method="sqrt">
            <VarName value="PythagorasTheoremValue" />
          </UseObject>
        </ConstVariable>
        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="distanceBetweenAandB" />
        </ConsoleLog>
        <Comment value="10" />
      </CodeBox>
      <FormatP>
        The distance between two points <FormatMark>A(2, 2)</FormatMark> and{" "}
        <FormatMark>A(8, 10)</FormatMark> is 10 units.
      </FormatP>

      <FormatTitleH3>Creating a Reusable Function</FormatTitleH3>
      <FormatP>Let's make a function to reuse this in the future.</FormatP>
      <CodeBox>
        <FunctionDeclare name="getDist" parameters={["a", "b"]}>
          {" "}
          <ConstVariable name="xLength">
            <UseObject name="Math" method="abs">
              <UseObject name="A" propertys={["x"]} />
              <Sign value="-" />
              <UseObject name="B" propertys={["x"]} />
            </UseObject>
          </ConstVariable>
          <Br />{" "}
          <ConstVariable name="yLength">
            <UseObject name="Math" method="abs">
              <UseObject name="A" propertys={["y"]} />
              <Sign value="-" />
              <UseObject name="B" propertys={["y"]} />
            </UseObject>
          </ConstVariable>
          <Br />
          <Br />{" "}
          <ConstVariable name="PythagorasTheoremValue">
            <UseObject name="Math" method="pow">
              <VarName value="xLength" />
              <Coma />
              <Number value="2" />
            </UseObject>
            <Sign value="+" />
            <UseObject name="Math" method="pow">
              <VarName value="yLength" />
              <Coma />
              <Number value="2" />
            </UseObject>
          </ConstVariable>
          <Br />{" "}
          <ConstVariable name="distanceBetweenAandB">
            <UseObject name="Math" method="sqrt">
              <VarName value="PythagorasTheoremValue" />
            </UseObject>
          </ConstVariable>
          <Br />
          <Br />{" "}
          <Return>
            <VarName value="distanceBetweenAandB" />
          </Return>
        </FunctionDeclare>
        <Br />
        <Br />
        <ObjectA />
        <Br />
        <ObjectB />
        <Br />
        <Br />

        <ConstVariable name="distance">
          <CallFunction name="getDist" args={["A", "B"]} />
        </ConstVariable>
        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="distance" />
        </ConsoleLog>

        <Comment value="10" />
      </CodeBox>
      <FormatTitleH3>Simplified Function</FormatTitleH3>
      <FormatP>
        Now we know how <FormatMark>getDist()</FormatMark> works inside. Let's
        make it smaller.
      </FormatP>
      <CodeBox>
        <GetDistFunction />
      </CodeBox>
    </>
  );
}
