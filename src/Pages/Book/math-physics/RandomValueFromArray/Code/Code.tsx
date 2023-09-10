import { Br } from "../../../../../code-components/colored-code-components/html/html";
import {
  Coma,
  Number,
  Sign,
  VarName,
} from "../../../../../code-components/colored-code-components/js/js";
import {
  BracketExpression,
  ConstVariable,
  UseObject,
  UseArrowFunction,
} from "../../../../../code-components/js-code/js-code";

export function GetNum() {
  return (
    <UseArrowFunction name="getNum" args={["...nums"]}>
      <VarName value="nums" />
      <BracketExpression brackets="[]">
        <UseObject name="Math" method="floor">
          <UseObject name="Math" method="random" />
          <Sign value="*" />
          <UseObject name="nums" propertys={["length"]} />
        </UseObject>
      </BracketExpression>
    </UseArrowFunction>
  );
}

export function StartArray() {
  return (
    <>
      <ConstVariable name="array">
        <BracketExpression brackets="[]">
          <Number value="10" />
          <Coma />
          <Number value="12" />
          <Coma />
          <Number value="33" />
          <Coma />
          <Number value="24" />
          <Coma />
          <Number value="45" />
          <Coma />
          <Number value="63" />
          <Coma />
          <Number value="72" />
          <Coma />
          <Number value="18" />
        </BracketExpression>
      </ConstVariable>
      <Br />
    </>
  );
}

export function LastElementIndex() {
  return (
    <>
      <ConstVariable name="lastElemntIndex">
        <UseObject name="array" propertys={["length"]} />
        <Sign value="-" />
        <Number value="1" />
      </ConstVariable>
      <Br />
    </>
  );
}

export function RandomElement() {
  return (
    <>
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
    </>
  );
}

export function LastElement() {
  return (
    <>
      <ConstVariable name="lastElemnt">
        <VarName value="array" />
        <BracketExpression brackets="[]">
          <VarName value="lastElemntIndex" />
        </BracketExpression>
      </ConstVariable>
      <Br />
    </>
  );
}
