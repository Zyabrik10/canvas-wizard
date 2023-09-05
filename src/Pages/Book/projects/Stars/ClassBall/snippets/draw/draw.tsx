import {
  BracketExpression,
  ClassFunctionDeclare,
  ConstVariable,
  UseObject,
} from "../../../../../../../code-components/js-code/js-code";

import {
  Coma,
  Equal,
  Sign,
  VarName,
  Number,
  Semicoln,
  VarDec,
} from "../../../../../../../code-components/colored-code-components/js/js";
import { Br } from "../../../../../../../code-components/colored-code-components/html/html";

export default function Draw() {
  return (
    <ClassFunctionDeclare name="draw">
      {"   "}
      <VarDec value="const" />
      <BracketExpression brackets="{}">
        <VarName value="x" />
        <Coma />
        <VarName value="y" />
      </BracketExpression>
      <Equal />
      <UseObject name="this" propertys={["coor"]} />
      <Semicoln />
      <Br />
      {"   "}
      <ConstVariable name="rad">
        <UseObject name="this" propertys={["rad"]} />
      </ConstVariable>
      <Br />
      <Br />
      {"   "}
      <UseObject name="this" method="beginPath" />
      <Semicoln />
      <Br />
      {"   "}
      <UseObject name="this" method="arc">
        <VarName value="x" />
        <Coma />
        <VarName value="y" />
        <Coma />
        <VarName value="rad" />
        <Coma />
        <Number value="0" />
        <Coma />
        <Number value="2" />
        <Sign value="*" />
        <VarName value="pi" />
      </UseObject>
      <Semicoln />
      <Br />
      {"   "}
      <UseObject name="this" method="fill" />
      <Semicoln />
    </ClassFunctionDeclare>
  );
}
