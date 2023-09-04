import { Br } from "../../../../../code-components/colored-code-components/html/html";
import {
  Coma,
  Quote,
  Semicoln,
  Sign,
  Text,
} from "../../../../../code-components/colored-code-components/js/js";
import {
  FormatP,
  FormatTitleH2,
  FormatTitleH3,
} from "../../../../../code-components/format-components/format-components";
import { SetCanvasHeight, SetCanvasWidth } from "../../../../../code-components/js-code/canvas-code/canvas-code";
import {
  BracketExpression,
  UseObject,
} from "../../../../../code-components/js-code/js-code";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";

export default function ReactOnWindowResizeStars() {
  return (
    <>
      <FormatTitleH2>React on window resize</FormatTitleH2>
      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox filename="main.js">
        <UseObject name="window" propertys={["addEventListener"]} />
        <BracketExpression brackets="()">
          <Quote value='"'/>
          <Text value="resize" />
          <Quote value='"'/>
          <Coma />
          <BracketExpression brackets="()" />
          <Sign value="=>" />
          <BracketExpression brackets="{}">
            <Br />
            {" "} <SetCanvasWidth width="innerWidth" />
            <Br />
            {" "} <SetCanvasHeight height="innerHeight" />
            <Br />
          </BracketExpression>
        </BracketExpression>
        <Semicoln/>
      </CodeBox>
      <FormatP>
        Whenever the window is resized, we adjust the canvas's width and height
        to match the current width and height of the viewport.
      </FormatP>
    </>
  );
}
