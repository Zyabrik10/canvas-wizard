import {
  ConstVariable,
  FunctionDeclare,
  ObjectExpression,
  Return,
  UseObject,
} from "code-components/js-code/js-code";

import {
  Coma,
  Comment,
  Number,
  Sign,
  VarName,
} from "code-components/colored-code-components/js/js";
import { Br } from "code-components/colored-code-components/html/html";

export function ObjectA() {
  return (
    <ConstVariable name="A">
      <ObjectExpression
        propertys={[
          { property: "x", value: <Number value="2" /> },
          { property: "y", value: <Number value="2" /> },
        ]}
      />
    </ConstVariable>
  );
}

export function ObjectB() {
  return (
    <ConstVariable name="B">
      <ObjectExpression
        propertys={[
          { property: "x", value: <Number value="8" /> },
          { property: "y", value: <Number value="10" /> },
        ]}
      />
    </ConstVariable>
  );
}

export function LengthVars1() {
  return (
    <>
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
    </>
  );
}

export function AbsoluteLengthVars() {
  return (
    <>
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
    </>
  );
}

export function PythagorasTheoremValue() {
  return (
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
  );
}

export function FunctionGetDist() {
  return         <FunctionDeclare name="getDist" parameters={["a", "b"]}>
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
}