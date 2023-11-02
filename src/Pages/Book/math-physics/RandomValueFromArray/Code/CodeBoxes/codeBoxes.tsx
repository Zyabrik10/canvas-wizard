import { Br } from "code-components/colored-code-components/html/html";
import {
  Comment,
  Sign,
  VarName,
} from "code-components/colored-code-components/js/js";
import {
  BracketExpression,
  CallFunction,
  ConsoleLog,
  ConstVariable,
  UseObject,
  FunctionDeclare,
  Return,
} from "code-components/js-code/js-code";
import {
  LastElement,
  LastElementIndex,
  RandomElement,
  StartArray,
} from "../Code";

export function CodeBox1() {
  return (
    <>
      <StartArray />
      <LastElementIndex />
      <Br />
      <ConsoleLog>
        <VarName value="lastElemntIndex" />
      </ConsoleLog>
      <Comment value="7" />
    </>
  );
}

export function CodeBox2() {
  return (
    <>
      <StartArray />
      <LastElementIndex />
      <LastElement />
      <Br />
      <ConsoleLog>
        <VarName value="lastElemnt" />
      </ConsoleLog>
      <Comment value="18" />
    </>
  );
}

export function CodeBox3() {
  return (
    <>
      <StartArray />
      <RandomElement />
      <Br />
      <ConsoleLog>
        <VarName value="randomElement" />
      </ConsoleLog>
      <Comment value="72" />
    </>
  );
}

export function CodeBox4() {
  return (
    <>
      <FunctionDeclare name="randNum" parameters={["array"]}>
        {"  "}
        <ConstVariable name="randomElement">
          <VarName value="array" />
          <BracketExpression brackets="[]">
            <UseObject name="Math" method="floor">
              <UseObject name="Math" method="random" />
              <Sign value="*" />
              <UseObject name="array" propertys={["length"]} />
            </UseObject>
          </BracketExpression>
        </ConstVariable>
        <Br />
        <Br />
        {"  "}
        <Return>
          <VarName value="randomElement" />
        </Return>
      </FunctionDeclare>
      <Br />
      <Br />
      <StartArray />
      <Br />
      <ConsoleLog>
        <CallFunction name="randNum" args={["array"]} />
      </ConsoleLog>
      <Comment value="72" />
    </>
  );
}
