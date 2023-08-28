import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../ts/theme/adapt-theme";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatLink,
} from "../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../components/CodeBox/CodeBox";

import InfoBox from "../../../../components/InfoBox/InfoBox";

import {
  OpenTag,
  CloseTag,
  Br,
  OpenTagWithAttr,
  OneTagWithAttr,
  Docytype,
} from "../../../../code-components/colored-code-components/html/html";

import EditorOnline from "../../../../components/EditorOnline/EditorOnline";

import { Title, Canvas } from "../../../../code-components/html-code/snippets/snippets";
import { InitHTML } from "../../../../code-components/html-code/html-code";

export default function AboutCanvas() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>What is Canvas?</FormatTitleH2>
      <CodeBox>
        <Canvas />
      </CodeBox>
      <CodeBox>
        <InitHTML />
      </CodeBox>
      <FormatP>
        <OpenTag tagName="canvas" />
        <CloseTag tagName="canvas" /> - <FormatMark>HTML element</FormatMark>{" "}
        that provides you with varaity functoins for drawing graphics.
      </FormatP>
      <FormatP>
        In order to start using it you should understand basics of HTML and you
        have to know basics of JavaScript. Without these knowledge you will
        encounter a non-understandable text problem.
      </FormatP>
      <FormatP>
        Also you will need some basics knowledge of math and physics.
      </FormatP>
      <InfoBox type="row">
        <FormatP>
          Don`t worry if you don`t remember almost anything. I will tell about
          them
        </FormatP>
      </InfoBox>
      <FormatP>
        With Canvas you develop interesting things. This can, for instance, be
        used to draw graphs, combine photos, or create simple animations.
      </FormatP>
      <InfoBox type="row">
        <FormatP>
          You can use it: for your website, for just relaxing, simulating
          physics or even game.
        </FormatP>
      </InfoBox>
      <FormatP>
        Here is a few examples what you can do with only canvas and js.
      </FormatP>
      <EditorOnline
        src="https://codepen.io/jackrugile/embed/kMWyeM?default-tab=html%2Cresult"
        title="Canvas Orbital Trails"
      >
        See the Pen{" "}
        <a href="https://codepen.io/jackrugile/pen/kMWyeM">
          Canvas Orbital Trails
        </a>{" "}
        by Jack Rugile (<a href="https://codepen.io/jackrugile">@jackrugile</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>
      <EditorOnline
        src="https://codepen.io/run-time/embed/abYeqZ?default-tab=html%2Cresult"
        title="Rainbow Spider"
      >
        See the Pen{" "}
        <a href="https://codepen.io/run-time/pen/abYeqZ">Rainbow Spider</a> by
        Dave Alger (<a href="https://codepen.io/run-time">@run-time</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>
      <EditorOnline
        src="https://codepen.io/akm2/embed/DbNJXr?default-tab=html%2Cresult"
        title="Lightning"
      >
        See the Pen <a href="https://codepen.io/akm2/pen/DbNJXr">Lightning</a>{" "}
        by Akimitsu Hamamuro (<a href="https://codepen.io/akm2">@akm2</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>
      <InfoBox type="column">
        <FormatP>
          To see more just google it as
          <FormatMark>canvas js projects</FormatMark> to find more websites with
          canvas projects.
        </FormatP>
        <FormatP>
          Link on one of theme{" "}
          <FormatLink href="https://webdesign.tutsplus.com/21-ridiculously-impressive-html5-canvas-experiments--net-14210a">
            canvas projects
          </FormatLink>
        </FormatP>
      </InfoBox>
    </>
  );
}
