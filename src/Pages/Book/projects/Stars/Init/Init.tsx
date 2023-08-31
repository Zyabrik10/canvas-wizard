import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../../ts/theme/adapt-theme";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
} from "../../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";

import ImageBox from "../../../../../components/ImageBox/ImageBox";

import InfoBox from "../../../../../components/InfoBox/InfoBox";
import EditorOnline from "../../../../../components/EditorOnline/EditorOnline";
import { Br } from "../../../../../code-components/colored-code-components/html/html";
import { BracketExpression } from "../../../../../code-components/js-code/js-code";
import {
  Colon,
  Object,
  Property,
  Semicoln,
  VarName,
} from "../../../../../code-components/colored-code-components/js/js";

export default function InitStars() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Init</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox>{`const balls = [];

const minRad = 100;
const ballsNum = 50;

function init() {
  for (let i = 0; i < ballsNum; i++) {
    balls.push(new Ball({}));
  }
}`}</CodeBox>
      <FormatTitleH3>Declaring init variables</FormatTitleH3>
      <FormatP>
        The first thing we need to do is create an array of objects that will
        contain all our ball instances.
      </FormatP>
      <CodeBox>{`const balls = [];`}</CodeBox>
      <FormatP>
        Decalare a viariable of line drawing distance activision as well.
      </FormatP>
      <CodeBox>{`const minRad = 100;`}</CodeBox>
      <FormatP>And also decalre a variable of numbers of balls.</FormatP>
      <CodeBox>{`const ballsNum = 50;`}</CodeBox>
      <InfoBox type="row">
        We need just to describe number 50 in our loop. It i sbad practice to
        leave numbers without explanation why they so and etc.
      </InfoBox>
      <FormatTitleH3>Init function</FormatTitleH3>
      <FormatP>
        Now all we have to is just to make a loop inside of init function and
        each interaion push Ball instance in array.
      </FormatP>
      <CodeBox>{`function init() {
  for (let i = 0; i < ballsNum; i++) {
    balls.push(new Ball({}));
  }
}`}</CodeBox>
    </>
  );
}
