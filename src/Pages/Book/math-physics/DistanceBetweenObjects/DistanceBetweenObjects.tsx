import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../ts/theme/adapt-theme";

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
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Distance between objects</FormatTitleH2>

      {/*  */}

      <FormatTitleH3>Function ready to be used</FormatTitleH3>
      <CodeBox>
        <GetDistFunction />
      </CodeBox>
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
      <CodeBox>
        <ObjectA />
        <Br />
        <ObjectB />
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
        <FormatMark>A(8, 10)</FormatMark> is 10.
      </FormatP>
      <FormatP>Let`s make a function to reuse this in the future.</FormatP>
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
      <FormatP>
        Now we know how <FormatMark>getDist()</FormatMark> works
        inside. Let`s make it smaller.
      </FormatP>
      <CodeBox>
        <GetDistFunction />
      </CodeBox>
    </>
  );
}
