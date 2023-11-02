import { Br } from "code-components/colored-code-components/html/html";
import {
  Comment,
  Number,
  Sign,
  VarName,
} from "code-components/colored-code-components/js/js";
import {
  BracketExpression,
  CallFunction,
  ConsoleLog,
  ConstVariable,
  Return,
  UseObject,
  FunctionDeclare,
} from "code-components/js-code/js-code";
import { DeclareRandom } from "code-components/js-code/snippets/snippets";
import {
  MinMaxValue,
  MinRandomValue,
  RandomValueBetweenDiffernce,
  RandomValueBetweenMinAndMax,
  RandomValueBetweenMinAndMax2,
  RangeBetweenMinAndMax,
  SomeValue,
} from "../Code";

export function CodeBox1() {
  return (
    <>
      <DeclareRandom />
      <Comment value="random value from 0 to 1" />
      <Br />
      <ConsoleLog>
        <VarName value="randomValue" />
      </ConsoleLog>
      <Comment value="0.09820142543127064" />
    </>
  );
}

export function CodeBox2() {
  return (
    <>
      <DeclareRandom />
      <Comment value="random value from 0 to 1" />
      <Br />
      <SomeValue />
      <Br />

      <ConsoleLog>
        <VarName value="randomValue" />
        <Sign value="*" />
        <BracketExpression brackets="()">
          <VarName value="someValue" />
          <Sign value="+" />
          <Number value="1" />
        </BracketExpression>
      </ConsoleLog>
      <Comment value="7.9242883533580475" />
      <Br />
      <ConsoleLog>
        <UseObject name="Math" method="floor">
          <VarName value="randomValue" />
          <Sign value="*" />
          <BracketExpression brackets="()">
            <VarName value="someValue" />
            <Sign value="+" />
            <Number value="1" />
          </BracketExpression>
        </UseObject>
      </ConsoleLog>
      <Comment value="7" />
    </>
  );
}

export function CodeBox3() {
  return (
    <>
      <DeclareRandom />
      <Comment value="random value from 0 to 1" />
      <Br />
      <SomeValue />
      <Br />
      <ConsoleLog>
        <VarName value="randomValue" />
        <Sign value="+" />
        <VarName value="someValue" />
      </ConsoleLog>
      <Comment value="10.437221276942248" />
    </>
  );
}

export function CodeBox4() {
  return (
    <>
      <DeclareRandom />
      <Comment value="random value from 0 to 1" />
      <Br />
      <MinMaxValue />
      <MinRandomValue />
      <RandomValueBetweenMinAndMax />
      <Comment value="0 + 5 = 5, 2 + 5 = 7!!!" />
      <Br />
      <Br />
      <ConsoleLog>
        <VarName value="randomValueBetweenMinAndMax" />
      </ConsoleLog>
      <Comment value="5, 6, 7" />
    </>
  );
}

export function CodeBox5() {
  return (
    <>
      <DeclareRandom />
      <Comment value="random value from 0 to 1" />
      <Br />
      <MinMaxValue />
      <RangeBetweenMinAndMax />
      <Comment value="5 - 2 = 3" />
      <Br />
      <RandomValueBetweenDiffernce />
      <Br />
      <Br />
      <ConsoleLog>
        <VarName value="randomValueBetweenDiffernce" />
      </ConsoleLog>
      <Comment value="0, 1, 2, 3" />
    </>
  );
}

export function CodeBox6() {
  return (
    <>
      <DeclareRandom />
      <Comment value="random value from 0 to 1" />
      <Br />
      <MinMaxValue />
      <RangeBetweenMinAndMax />
      <Comment value="5 - 2 = 3" />
      <Br />
      <RandomValueBetweenMinAndMax2 />
      <Br />
      <Br />
      <ConsoleLog>
        <VarName value="randomValueBetweenMinAndMax" />
      </ConsoleLog>
      <Comment value="2, 3, 4, 5" />
    </>
  );
}

export function CodeBox7() {
  return (
    <>
      <FunctionDeclare name="randInt" parameters={["minValue", "maxValue"]}>
        {" "}
        <DeclareRandom />
        <Br /> <RangeBetweenMinAndMax />
        <Br /> <RandomValueBetweenMinAndMax2 />
        <Br />
        <Br />{" "}
        <Return>
          <VarName value="randomValueBetweenMinAndMax" />
        </Return>
      </FunctionDeclare>
      <Br />
      <Br />
      <ConstVariable name="minValue">
        <Number value="50" />
      </ConstVariable>
      <Br />
      <ConstVariable name="maxValue">
        <Number value="100" />
      </ConstVariable>
      <Br />
      <Br />
      <ConsoleLog>
        <CallFunction name="randInt" args={["minValue", "maxValue"]} />
      </ConsoleLog>
      <Comment value="81" />
    </>
  );
}
