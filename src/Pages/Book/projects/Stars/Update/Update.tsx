import { nanoid } from "nanoid";
import { Br } from "../../../../../code-components/colored-code-components/html/html";
import {
  Coma,
  Literal,
  Number,
  Semicoln,
  Sign,
  VarName,
} from "../../../../../code-components/colored-code-components/js/js";
import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
} from "../../../../../code-components/format-components/format-components";
import { UseCtxVar } from "../../../../../code-components/js-code/canvas-code/canvas-code";
import {
  BracketExpression,
  CallFunction,
  ConstVariable,
  DecalreFor,
  FunctionDeclare,
  UseObject,
} from "../../../../../code-components/js-code/js-code";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";

export default function UpdateStars() {
  return (
    <>
      <FormatTitleH2>Update function</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox>
        <FunctionDeclare name="drawLineBetwenTwoPoint" parameters={["a", "b"]}>
          {"  "}
          <UseObject name="ctx" method="beginPath" />
          <Semicoln />
          <Br />
          {"  "}

          <UseObject name="ctx" method="moveTo">
            <UseObject name="a" propertys={["x"]} />
            <Coma />
            <UseObject name="a" propertys={["y"]} />
          </UseObject>
          <Semicoln />
          <Br />
          {"  "}

          <UseObject name="ctx" method="lineTo">
            <UseObject name="b" propertys={["x"]} />
            <Coma />
            <UseObject name="b" propertys={["y"]} />
          </UseObject>
          <Semicoln />
          <Br />
          {"  "}
          <UseObject name="ctx" method="stroke" />
          <Semicoln />
        </FunctionDeclare>
        <Br />
        <Br />
        <FunctionDeclare name="update">
          {"  "}
          <UseObject name="ctx" method="clearRect">
            <Number value="0" />
            <Coma />
            <Number value="0" />
            <Coma />
            <UseObject name="canvas" propertys={["width"]} />
            <Coma />
            <UseObject name="canvas" propertys={["height"]} />
          </UseObject>
          <Semicoln />
          <Br />
          <Br />
          {"  "}

          <DecalreFor
            variable={{
              name: "i",
              value: <Number value="0" />,
            }}
            compare={{
              sign: "<",
              value: "balls.length",
            }}
            iteration={{
              oprator: "++",
              value: "",
            }}
          >
            <Br />
            {"   "}
            <UseCtxVar varName="fillStyle" value="#fff" />
            <Br />
            {"   "}
            <ConstVariable name="ball1">
              <VarName value="balls" />
              <BracketExpression brackets="[]">
                <VarName value="i" />
              </BracketExpression>
            </ConstVariable>
            <Br />
            {"   "}
            <UseObject name="ball1" method="update" />
            <Semicoln />
            <Br />
            <Br />
            {"   "}

            <DecalreFor
              variable={{
                name: "j",
                value: <Number value="0" />,
              }}
              compare={{
                sign: "<",
                value: "balls.length",
              }}
              iteration={{
                oprator: "++",
                value: "",
              }}
            >
              <Br />
              {"     "}

              <ConstVariable name="ball2">
                <VarName value="balls" />
                <BracketExpression brackets="[]">
                  <VarName value="j" />
                </BracketExpression>
              </ConstVariable>
              <Br />
              {"     "}
              <ConstVariable name="dist">
                <CallFunction
                  name="getDist"
                  args={[
                    <UseObject
                      key={nanoid()}
                      name="ball1"
                      propertys={["coor"]}
                    />,
                    <UseObject
                      key={nanoid()}
                      name="ball2"
                      propertys={["coor"]}
                    />,
                  ]}
                />
              </ConstVariable>
              <Br />
              <Br />
              {"      "}
              <Literal value="if" />
              <BracketExpression brackets="()">
                <VarName value="dist" />
                <Sign value="<=" />
                <VarName value="minRad" />
              </BracketExpression>
              <BracketExpression brackets="{}">
                <Br />
                {"        "}
                <UseCtxVar varName="lineWidth" value="1 - dist / minRad" />
                <Br />
                {"        "}
                <UseCtxVar varName="strokeStyle" value='"#fff"' />
                <Br />
                {"        "}
                <CallFunction
                  name="drawLineBetwenTwoPoint"
                  args={[
                    <UseObject
                      name="ball1"
                      key={nanoid()}
                      propertys={["coor"]}
                    />,
                    <UseObject
                      name="ball1"
                      key={nanoid()}
                      propertys={["coor"]}
                    />,
                  ]}
                />
                <Br />
                {"      "}
              </BracketExpression>
              <Br />
              {"    "}
            </DecalreFor>
            <Br />
            {"  "}
          </DecalreFor>
          <Br />
          <Br />
          {"  "}

          <CallFunction name="requestAnimationFrame" args={["update"]} />
          <Semicoln />
        </FunctionDeclare>
      </CodeBox>
      <FormatTitleH3>Clearing the Canvas</FormatTitleH3>
      <FormatP>
        Every time we call <FormatMark>update</FormatMark> function we clear
        canvas in order to make an animation.
      </FormatP>
      <CodeBox>
        <UseObject name="ctx" method="clearRect">
          <Number value="0" />
          <Coma />
          <Number value="0" />
          <Coma />
          <UseObject name="canvas" propertys={["width"]} />
          <Coma />
          <UseObject name="canvas" propertys={["height"]} />
        </UseObject>
        <Semicoln />
      </CodeBox>
      <FormatTitleH3>Drawing Balls</FormatTitleH3>
      <FormatP>
        Now, we need to iterate through the balls array using a loop to draw
        each ball and calculate if we should draw a line between one ball and
        another.
      </FormatP>
      <CodeBox>
        <DecalreFor
          variable={{
            name: "i",
            value: <Number value="0" />,
          }}
          compare={{
            sign: "<",
            value: "balls.length",
          }}
          iteration={{
            oprator: "++",
            value: "",
          }}
        >
          <Br />
          {"   "}
          <UseCtxVar varName="fillStyle" value="#fff" />
          <Br />
          {"   "}
          <ConstVariable name="ball1">
            <VarName value="balls" />
            <BracketExpression brackets="[]">
              <VarName value="i" />
            </BracketExpression>
          </ConstVariable>
          <Br />
          {"   "}
          <UseObject name="ball1" method="update" />
          <Semicoln />
          <Br />
          <Br />
          {"   "}

          <DecalreFor
            variable={{
              name: "j",
              value: <Number value="0" />,
            }}
            compare={{
              sign: "<",
              value: "balls.length",
            }}
            iteration={{
              oprator: "++",
              value: "",
            }}
          >
            <Br />
            {"   "}

            <ConstVariable name="ball2">
              <VarName value="balls" />
              <BracketExpression brackets="[]">
                <VarName value="j" />
              </BracketExpression>
            </ConstVariable>
            <Br />
            {"   "}
            <ConstVariable name="dist">
              <CallFunction
                name="getDist"
                args={[
                  <UseObject
                    key={nanoid()}
                    name="ball1"
                    propertys={["coor"]}
                  />,
                  <UseObject
                    key={nanoid()}
                    name="ball2"
                    propertys={["coor"]}
                  />,
                ]}
              />
            </ConstVariable>
            <Br />
            <Br />
            {"    "}
            <Literal value="if" />
            <BracketExpression brackets="()">
              <VarName value="dist" />
              <Sign value="<=" />
              <VarName value="minRad" />
            </BracketExpression>
            <BracketExpression brackets="{}">
              <Br />
              {"      "}
              <UseCtxVar varName="lineWidth" value="1 - dist / minRad" />
              <Br />
              {"      "}
              <UseCtxVar varName="strokeStyle" value='"#fff"' />
              <Br />
              {"      "}
              <CallFunction
                name="drawLineBetwenTwoPoint"
                args={[
                  <UseObject
                    name="ball1"
                    key={nanoid()}
                    propertys={["coor"]}
                  />,
                  <UseObject
                    name="ball1"
                    key={nanoid()}
                    propertys={["coor"]}
                  />,
                ]}
              />
              <Br />
              {"    "}
            </BracketExpression>
            <Br />
            {"  "}
          </DecalreFor>
          <Br />
        </DecalreFor>
      </CodeBox>
      <FormatTitleH3>Using requestAnimationFrame</FormatTitleH3>
      <FormatP>
        We use <FormatMark>requestAnimationFrame</FormatMark> to call the update
        function for each frame.
      </FormatP>
      <CodeBox>
        {" "}
        <CallFunction name="requestAnimationFrame" args={["update"]} />
        <Semicoln />
      </CodeBox>
      <FormatTitleH3>Drawing a Line Function</FormatTitleH3>
      <FormatP>
        To draw a line between two points, we move from the center of one ball
        to the center of another.
      </FormatP>
      <CodeBox>
        {" "}
        <FunctionDeclare name="drawLineBetwenTwoPoint" parameters={["a", "b"]}>
          {"  "}
          <UseObject name="ctx" method="beginPath" />
          <Semicoln />
          <Br />
          {"  "}

          <UseObject name="ctx" method="moveTo">
            <UseObject name="a" propertys={["x"]} />
            <Coma />
            <UseObject name="a" propertys={["y"]} />
          </UseObject>
          <Semicoln />
          <Br />
          {"  "}

          <UseObject name="ctx" method="lineTo">
            <UseObject name="b" propertys={["x"]} />
            <Coma />
            <UseObject name="b" propertys={["y"]} />
          </UseObject>
          <Semicoln />
          <Br />
          {"  "}
          <UseObject name="ctx" method="stroke" />
          <Semicoln />
        </FunctionDeclare>
      </CodeBox>
    </>
  );
}
