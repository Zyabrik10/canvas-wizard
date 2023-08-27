import {
  Semicoln,
  VarName,
  Coma,
  Sign,
  Number,
} from "../../../components/ColoredCodeComponents/js/js";

import {
  BracketExpression,
  ConstVariable,
  String,
  UseArrowFunction,
  UseObject,
} from "../../../components/JavaScriptCode/JavaScriptCode";

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
