import { Br } from "../../colored-code-components/html/html";
import {
  Semicoln,
  VarName,
  Coma,
  Sign,
  Number,
  Dot,
  Property,
  Equal,
} from "../../colored-code-components/js/js";

import {
  BracketExpression,
  ConstVariable,
  String,
  UseArrowFunction,
  UseObject,
} from "../js-code";

export function DeclareCanvas() {
  return (
    <ConstVariable name="canvas">
      <UseObject name="document" method="querySelector">
        <String quote='"' text="canvas" />
      </UseObject>
    </ConstVariable>
  );
}

export function DeclareCtx() {
  return (
    <ConstVariable name="ctx">
      <UseObject name="canvas" method="getContext">
        <String quote='"' text="2d" />
      </UseObject>
    </ConstVariable>
  );
}

export function UseCtxFunction({
  method,
  args,
}: {
  method: string;
  args?: Array<string>;
}) {
  return (
    <>
      <UseObject name="ctx" method={method}>
        {args !== undefined && args.length !== 0
          ? args.map((name, index) => {
              if (index + 1 === args.length) return <VarName value={name} />;

              return (
                <>
                  <VarName value={name} />
                  <Coma />
                </>
              );
            })
          : null}
      </UseObject>
      <Semicoln />
    </>
  );
}

export function RandIntFunction() {
  return (
    <UseArrowFunction name="randInt" args={["min", "max"]}>
      <UseObject name="Math" method="floor">
        <UseObject name="Math" method="random" />
        <Sign value="*" />
        <BracketExpression brackets="()">
          <VarName value="max" />
          <Sign value="-" />
          <VarName value="min" />
          <Sign value="+" />
          <Number value="1" />
        </BracketExpression>
        <Sign value="+" />
        <VarName value="min" />
      </UseObject>
    </UseArrowFunction>
  );
}

export function GetDistFunction() {
  return (
    <UseArrowFunction name="getDist" args={["a", "b"]}>
      <UseObject name="Math" method="sqrt">
        <UseObject name="Math" method="pow">
          <UseObject name="a" propertys={["x"]} />
          <Sign value="-" />
          <UseObject name="b" propertys={["x"]} />
          <Coma />
          <Number value="2" />
        </UseObject>
        <Sign value="+" />
        <UseObject name="Math" method="pow">
          <UseObject name="a" propertys={["y"]} />
          <Sign value="-" />
          <UseObject name="b" propertys={["y"]} />
          <Coma />
          <Number value="2" />
        </UseObject>
      </UseObject>
    </UseArrowFunction>
  );
}

type SetCanvasWidthType = {
  width: string;
};

export function SetCanvasWidth({ width }: SetCanvasWidthType) {
  return <>
    <VarName value="canvas" />
    <Dot />
    <Property value="width" />
    <Equal />
    <VarName value={width} />
    <Semicoln />
  </>;
}

type SetCanvasHeightType = {
  height: string;
};

export function SetCanvasHeight({ height }: SetCanvasHeightType) {
  return <>
    <VarName value="canvas" />
    <Dot />
    <Property value="height" />
    <Equal />
    <VarName value={height} />
    <Semicoln />
  </>;
}

type SetCanvasSizeType = {
  height: string;
  width: string;
};

export function SetCanvasSize({ width, height }: SetCanvasSizeType) {
  return <>
    <SetCanvasWidth width={width} />
    <Br />
    <SetCanvasHeight height={height} />
  </>;
}
