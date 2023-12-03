import { nanoid } from "nanoid";
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
  CallFunction,
  CallFunctionWithChildren,
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
              if (index + 1 === args.length) return <VarName key={nanoid()} value={name} />;

              return (
                <span key={nanoid()}>
                  <VarName value={name} />
                  <Coma />
                </span>
              );
            })
          : null}
      </UseObject>
      <Semicoln />
    </>
  );
}

export function UseCtxVar({
  varName,
  value,
}: {
  varName: string;
  value: string;
}) {
  return (
    <>
      <UseObject name="ctx" propertys={[varName]} />
      <Equal />
      <VarName value={value} />
      <Semicoln />
    </>
  );
}

export function RandIntFunction({ isMath }: { isMath?: boolean }) {
  if (isMath === undefined) isMath = true;
  return (
    <UseArrowFunction name="randInt" args={["min", "max"]}>
      {isMath ? (
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
      ) : (
        <CallFunctionWithChildren name="floor">
          <CallFunction name="random" />
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
        </CallFunctionWithChildren>
      )}
    </UseArrowFunction>
  );
}

export function RandNumFunction({ isMath }: { isMath?: boolean }) {
  if (isMath === undefined) isMath = true;
  return (
    <UseArrowFunction name="randNum" args={["...nums"]}>
      {isMath ? (
        <>
          <VarName value="nums" />
          <BracketExpression brackets="[]">
            <UseObject name={isMath ? "Math" : null} method="floor">
              <UseObject name={isMath ? "Math" : null} method="random" />
              <Sign value="*" />
              <UseObject name="nums" propertys={["length"]} />
            </UseObject>
          </BracketExpression>
        </>
      ) : (
        <>
          <VarName value="nums" />
          <BracketExpression brackets="[]">
            <CallFunctionWithChildren name="floor">
              <CallFunction name="random" />
              <Sign value="*" />
              <UseObject name="nums" propertys={["length"]} />
            </CallFunctionWithChildren>
          </BracketExpression>
        </>
      )}
    </UseArrowFunction>
  );
}

export function GetDistFunction({ isMath }: { isMath?: boolean }) {
  if (isMath === undefined) isMath = true;

  return (
    <UseArrowFunction name="getDist" args={["a", "b"]}>
      {isMath ? (
        <UseObject name={isMath ? "Math" : null} method="sqrt">
          <UseObject name={isMath ? "Math" : null} method="pow">
            <UseObject name="a" propertys={["x"]} />
            <Sign value="-" />
            <UseObject name="b" propertys={["x"]} />
            <Coma />
            <Number value="2" />
          </UseObject>
          <Sign value="+" />
          <UseObject name={isMath ? "Math" : null} method="pow">
            <UseObject name="a" propertys={["y"]} />
            <Sign value="-" />
            <UseObject name="b" propertys={["y"]} />
            <Coma />
            <Number value="2" />
          </UseObject>
        </UseObject>
      ) : (
        <>
          <CallFunctionWithChildren name="sqrt">
            <CallFunctionWithChildren name="pow">
              <UseObject name="a" propertys={["x"]} />
              <Sign value="-" />
              <UseObject name="b" propertys={["x"]} />
              <Coma />
              <Number value="2" />
            </CallFunctionWithChildren>
            <Sign value="+" />
            <CallFunctionWithChildren name="pow">
              <UseObject name="a" propertys={["y"]} />
              <Sign value="-" />
              <UseObject name="b" propertys={["y"]} />
              <Coma />
              <Number value="2" />
            </CallFunctionWithChildren>
          </CallFunctionWithChildren>
        </>
      )}
    </UseArrowFunction>
  );
}

type SetCanvasWidthType = {
  width: string;
};

export function SetCanvasWidth({ width }: SetCanvasWidthType) {
  return (
    <>
      <VarName value="canvas" />
      <Dot />
      <Property value="width" />
      <Equal />
      <VarName value={width} />
      <Semicoln />
    </>
  );
}

type SetCanvasHeightType = {
  height: string;
};

export function SetCanvasHeight({ height }: SetCanvasHeightType) {
  return (
    <>
      <VarName value="canvas" />
      <Dot />
      <Property value="height" />
      <Equal />
      <VarName value={height} />
      <Semicoln />
    </>
  );
}

type SetCanvasSizeType = {
  height: string;
  width: string;
};

export function SetCanvasSize({ width, height }: SetCanvasSizeType) {
  return (
    <>
      <SetCanvasWidth width={width} />
      <Br />
      <SetCanvasHeight height={height} />
    </>
  );
}
