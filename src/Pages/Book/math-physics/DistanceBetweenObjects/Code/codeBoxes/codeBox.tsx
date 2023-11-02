import { Br } from "code-components/colored-code-components/html/html";
import {
  Coma,
  Comment,
  VarName,
} from "code-components/colored-code-components/js/js";
import {
  CallFunction,
  ConsoleLog,
  ConstVariable,
  UseObject,
} from "code-components/js-code/js-code";
import {
  AbsoluteLengthVars,
  FunctionGetDist,
  LengthVars1,
  ObjectA,
  ObjectB,
  PythagorasTheoremValue,
} from "../Code";

export function CodeBox1() {
  return (
    <>
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
    </>
  );
}

export function CodeBox2() {
  return (
    <>
      <ObjectA />
      <Br />
      <ObjectB />
      <Br />
      <Br />
      <LengthVars1 />
      <Br />
      <Br />

      <ConsoleLog>
        <VarName value="xLength" />
        <Coma />
        <VarName value="yLength" />
      </ConsoleLog>
      <Comment value="-6, -8" />
    </>
  );
}

export function CodeBox3() {
  return (
    <>
      <ObjectA />
      <Br />
      <ObjectB />
      <Br />
      <Br />
      <AbsoluteLengthVars />
      <ConsoleLog>
        <VarName value="xLength" />
        <Coma />
        <VarName value="yLength" />
      </ConsoleLog>
      <Comment value="6 8" />
      <Br />
    </>
  );
}

export function CodeBox4() {
  return (
    <>
      <ObjectA />
      <Br />
      <ObjectB />
      <Br />
      <Br />
      <AbsoluteLengthVars />
      <PythagorasTheoremValue />
      <Comment value="(6 * 6) + (8 * 8) = 100" />
      <Br />
      <Br />
      <ConsoleLog>
        <VarName value="PythagorasTheoremValue" />
      </ConsoleLog>
      <Comment value="100" />
    </>
  );
}

export function CodeBox5() {
  return (
    <>
      <ObjectA />
      <Br />
      <ObjectB />
      <Br />
      <Br />
      <AbsoluteLengthVars />

      <PythagorasTheoremValue />

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
    </>
  );
}

export function CodeBox6() {
  return (
    <>
      <FunctionGetDist />
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
    </>
  );
}
