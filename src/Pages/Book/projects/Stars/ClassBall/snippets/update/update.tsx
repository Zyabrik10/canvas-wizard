import {
  ClassFunctionDeclare,
  UseObject,
} from "../../../../../../../code-components/js-code/js-code";

import {
  Semicoln,
} from "../../../../../../../code-components/colored-code-components/js/js";
import { Br } from "../../../../../../../code-components/colored-code-components/html/html";

export default function Update() {
  return (
    <ClassFunctionDeclare name="update">
      {"  "}
      <UseObject name="this" method="move" />
      <Semicoln />
      <Br />
      {"  "}

      <UseObject name="this" method="checkWallCollision" />
      <Semicoln />
      <Br />

      {"  "}
      <UseObject name="this" method="draw" />
      <Semicoln />
    </ClassFunctionDeclare>
  );
}
