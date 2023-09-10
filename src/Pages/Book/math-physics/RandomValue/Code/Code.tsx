import { Br } from "../../../../../code-components/colored-code-components/html/html";
import {
  Comment,
  Number,
  Sign,
  VarName,
} from "../../../../../code-components/colored-code-components/js/js";
import {
  BracketExpression,
  ConstVariable,
  UseObject,
} from "../../../../../code-components/js-code/js-code";

export function SomeValue() {
  return (
    <>
      <ConstVariable name="someValue">
        <Number value="10" />
      </ConstVariable>
      <Br />
    </>
  );
}

export function MinValue() {
  return (
    <>
      <ConstVariable name="minValue">
        <Number value="2" />
      </ConstVariable>
      <Br />
    </>
  );
}

export function MaxValue() {
  return (
    <>
      <ConstVariable name="maxValue">
        <Number value="5" />
      </ConstVariable>
      <Br />
    </>
  );
}

export function MinMaxValue() {
  return (
    <>
      <MinValue />
      <MaxValue />
    </>
  );
}

export function MinRandomValue() {
  return (
    <>
      <ConstVariable name="minRandomValue">
        <VarName value="randomValue" />
        <Sign value="*" />
        <BracketExpression brackets="()">
          <VarName value="minValue" />
          <Sign value="+" />
          <Number value="1" />
        </BracketExpression>
      </ConstVariable>
      <Comment value="random value between 0 and 2" />
      <Br />
    </>
  );
}

export function RandomValueBetweenMinAndMax() {
  return (
    <>
      <ConstVariable name="randomValueBetweenMinAndMax">
        <UseObject name="Math" method="floor">
          <VarName value="minRandomValue" />
          <Sign value="+" />
          <VarName value="maxValue" />
        </UseObject>
      </ConstVariable>
    </>
  );
}

export function RangeBetweenMinAndMax() {
  return (
    <>
      <ConstVariable name="rangeBetweenMinAndMax">
        <VarName value="maxValue" />
        <Sign value="-" />
        <VarName value="minValue" />
      </ConstVariable>
    </>
  );
}

export function RandomValueBetweenDiffernce() {
  return (
    <>
      <ConstVariable name="randomValueBetweenDiffernce">
        <UseObject name="Math" method="floor">
          <UseObject name="Math" method="random" />
          <Sign value="*" />
          <BracketExpression brackets="()">
            <VarName value="rangeBetweenMinAndMax" />
            <Sign value="+" />
            <Number value="1" />
          </BracketExpression>
        </UseObject>
      </ConstVariable>
    </>
  );
}

export function RandomValueBetweenMinAndMax2() {
  return (
    <>
      <ConstVariable name="randomValueBetweenMinAndMax">
        <UseObject name="Math" method="floor">
          <UseObject name="Math" method="random" />
          <Sign value="*" />
          <BracketExpression brackets="()">
            <VarName value="rangeBetweenMinAndMax" />
            <Sign value="+" />
            <Number value="1" />
          </BracketExpression>
          <Sign value="+" />
          <VarName value="minValue" />
        </UseObject>
      </ConstVariable>
    </>
  );
}
