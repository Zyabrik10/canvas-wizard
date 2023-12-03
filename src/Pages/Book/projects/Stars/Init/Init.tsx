import {
  FormatP,
  FormatTitleH2,
  FormatTitleH3,
} from "code-components/format-components/format-components";

import { CodeBox } from "components/index";

import InfoBox from "components/InfoBox/InfoBox";
import {
  BracketExpression,
  ConstVariable,
  DecalreFor,
  FunctionDeclare,
  InitClassInstance,
  UseObject,
} from "code-components/js-code/js-code";
import { Br } from "code-components/colored-code-components/html/html";
import {
  Number,
  Semicoln,
} from "code-components/colored-code-components/js/js";

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
        <Br />
        <FunctionDeclare name="init">
          {" "}
          <DecalreFor
            variable={{
              name: "i",
              value: <Number value="0" />,
            }}
            compare={{
              sign: "<",
              value: "ballsNum",
            }}
            iteration={{
              oprator: "++",
              value: "",
            }}
          >
            <Br />
            {"  "}
            <UseObject name="balls" method="push">
              <InitClassInstance name="Ball">
                <BracketExpression brackets="{}" />
              </InitClassInstance>
            </UseObject>
            <Semicoln />
            <Br />{" "}
          </DecalreFor>
        </FunctionDeclare>
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
      <InfoBox type="extra" >
        <FormatP>
          It's essential to provide an explanation for why we've chosen the
          number 50 in our loop. Leaving numbers without context is not good
          practice.
        </FormatP>
      </InfoBox>
      <FormatTitleH3>Initialization Function</FormatTitleH3>
      <FormatP>
        Now, all we have to do is create a loop inside the init function, and in
        each iteration, we'll push a new Ball instance into the array.
      </FormatP>
      <CodeBox>
        <FunctionDeclare name="init">
          {" "}
          <DecalreFor
            variable={{
              name: "i",
              value: <Number value="0" />,
            }}
            compare={{
              sign: "<",
              value: "ballsNum",
            }}
            iteration={{
              oprator: "++",
              value: "",
            }}
          >
            <Br />
            {"  "}
            <UseObject name="balls" method="push">
              <InitClassInstance name="Ball">
                <BracketExpression brackets="{}" />
              </InitClassInstance>
            </UseObject>
            <Semicoln />
            <Br />{" "}
          </DecalreFor>
        </FunctionDeclare>
      </CodeBox>
    </>
  );
}
