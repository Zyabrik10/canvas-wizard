import {
  BracketExpression,
  ClassFunctionDeclare,
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
  Literal,
} from "../../../../../../../code-components/colored-code-components/js/js";
import { Br } from "../../../../../../../code-components/colored-code-components/html/html";

export default function CheckWallCollision() {
  return (
    <ClassFunctionDeclare name="checkWallCollision">
      {"  "}
      <VarDec value="const" />
      <BracketExpression brackets="{}">
        <VarName value="x" />
        <Coma />
        <VarName value="y" />
      </BracketExpression>
      <Equal />
      <UseObject name="this" propertys={["rad"]} />

      <Br />
      <Br />
      {"  "}
      <Literal value="if" />
      <BracketExpression brackets="()">
        <VarName value="x" />
        <Sign value="+" />
        <VarName value="rad" />
        <Sign value=">=" />
        <UseObject name="canvas" propertys={["width"]} />
      </BracketExpression>
      <BracketExpression brackets="{}">
        <Br />
        {"    "}
        <UseObject name="this" propertys={["vel", "x"]} />
        <Sign value="*=" />
        <Number value="-1" />
        <Semicoln />
        <Br />
        {"    "}
        <UseObject name="this" propertys={["coor", "x"]} />
        <Equal />
        <UseObject name="canvas" propertys={["width"]} />
        <Sign value="-" />
        <VarName value="rad" />
        <Semicoln />
        <Br />
        {"  "}
      </BracketExpression>
      <Literal value="else" />
      <Literal value="if" />
      <BracketExpression brackets="()">
        <VarName value="x" />
        <Sign value="-" />
        <VarName value="rad" />
        <Sign value="<=" />
        <Number value="0" />
      </BracketExpression>
      <BracketExpression brackets="{}">
        <Br />
        {"    "}
        <UseObject name="this" propertys={["vel", "x"]} />
        <Sign value="*=" />
        <Number value="-1" />
        <Semicoln />
        <Br />
        {"    "}
        <UseObject name="this" propertys={["coor", "x"]} />
        <Equal />
        <VarName value="rad" />
        <Semicoln />
        <Br />
        {"  "}
      </BracketExpression>
      <Br />
      <Br />
      {"  "}
      <Literal value="if" />
      <BracketExpression brackets="()">
        <VarName value="y" />
        <Sign value="+" />
        <VarName value="rad" />
        <Sign value=">=" />
        <UseObject name="canvas" propertys={["height"]} />
      </BracketExpression>
      <BracketExpression brackets="{}">
        <Br />
        {"    "}
        <UseObject name="this" propertys={["vel", "y"]} />
        <Sign value="*=" />
        <Number value="-1" />
        <Semicoln />
        <Br />
        {"    "}
        <UseObject name="this" propertys={["coor", "y"]} />
        <Equal />
        <UseObject name="canvas" propertys={["height"]} />
        <Sign value="-" />
        <VarName value="rad" />
        <Semicoln />
        <Br />
        {"  "}
      </BracketExpression>
      <Literal value="else" />
      <Literal value="if" />
      <BracketExpression brackets="()">
        <VarName value="y" />
        <Sign value="-" />
        <VarName value="rad" />
        <Sign value="<=" />
        <Number value="0" />
      </BracketExpression>
      <BracketExpression brackets="{}">
        <Br />
        {"    "}
        <UseObject name="this" propertys={["vel", "y"]} />
        <Sign value="*=" />
        <Number value="-1" />
        <Semicoln />
        <Br />
        {"    "}
        <UseObject name="this" propertys={["coor", "y"]} />
        <Equal />
        <VarName value="rad" />
        <Semicoln />
        <Br />
        {"  "}
      </BracketExpression>
    </ClassFunctionDeclare>
  );
}
