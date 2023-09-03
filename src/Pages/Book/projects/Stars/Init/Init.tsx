import {
  FormatP,
  FormatTitleH2,
  FormatTitleH3,
} from "../../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";

import InfoBox from "../../../../../components/InfoBox/InfoBox";
import {
  BracketExpression,
  ConstVariable,
} from "../../../../../code-components/js-code/js-code";
import { Br } from "../../../../../code-components/colored-code-components/html/html";
import { Number } from "../../../../../code-components/colored-code-components/js/js";

export default function InitStars() {
  return (
    <>
      <FormatTitleH2>Declaring Initialization Variables</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox>
        <ConstVariable name="balls">
          <BracketExpression brackets="[]" />
        </ConstVariable>
        <Br />
        <ConstVariable name="minRad">
          <Number value="150" />
        </ConstVariable>
        <Br />
        <ConstVariable name="ballsNum">
          <Number value="50" />
        </ConstVariable>
        <Br />
        {`function init() {
  for (let i = 0; i < ballsNum; i++) {
    balls.push(new Ball({}));
  }
}`}
      </CodeBox>
      <FormatTitleH3>Declaring init variables</FormatTitleH3>
      <FormatP>
        The first step is to create an array of objects that will store all our
        ball instances.
      </FormatP>
      <CodeBox>
        <ConstVariable name="balls">
          <BracketExpression brackets="[]" />
        </ConstVariable>
      </CodeBox>
      <FormatP>
        Next, let's declare a variable for the minimum radius for drawing lines.
      </FormatP>
      <CodeBox>
        <ConstVariable name="minRad">
          <Number value="150" />
        </ConstVariable>
      </CodeBox>
      <FormatP>
        Also, declare a variable to specify the number of balls.
      </FormatP>
      <CodeBox>
        <ConstVariable name="ballsNum">
          <Number value="50" />
        </ConstVariable>
      </CodeBox>
      <InfoBox type="extra" dir="row">
        It's essential to provide an explanation for why we've chosen the number
        50 in our loop. Leaving numbers without context is not good practice.
      </InfoBox>
      <FormatTitleH3>Initialization Function</FormatTitleH3>
      <FormatP>
        Now, all we have to do is create a loop inside the init function, and in
        each iteration, we'll push a new Ball instance into the array.
      </FormatP>
      <CodeBox>{`function init() {
  for (let i = 0; i < ballsNum; i++) {
    balls.push(new Ball({}));
  }
}`}</CodeBox>
    </>
  );
}
