import {
  BracketExpression,
  ClassFunctionDeclare,
  UseObject,
} from "code-components/js-code/js-code";

import {
  Coma,
  Equal,
  Sign,
  VarName,
  Semicoln,
  VarDec,
} from "code-components/colored-code-components/js/js";
import { Br } from "code-components/colored-code-components/html/html";

export default function Move() {
  return (
    <ClassFunctionDeclare name="move">
      {"  "}
      <VarDec value="const" />
      <BracketExpression brackets="{}">
        <VarName value="x" />: <VarName value="vx" />
        <Coma />
        <VarName value="y" />: <VarName value="vy" />
      </BracketExpression>
      <Equal />
      <UseObject name="this" propertys={["vel"]} />
      <Semicoln />
      <Br />
      <Br />
      {"  "}
      <UseObject name="this" propertys={["coor", "x"]} />
      <Sign value="+=" />
      <VarName value="vx" />
      <Semicoln />
      <Br />
      {"  "}
      <UseObject name="this" propertys={["coor", "y"]} />
      <Sign value="+=" />
      <VarName value="vy" />
      <Semicoln />
    </ClassFunctionDeclare>
  );
}
