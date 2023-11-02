import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatLink,
} from "code-components/format-components/format-components";

import { CodeBox } from "components/CodeBox/CodeBox";

import InfoBox from "components/InfoBox/InfoBox";

import {
  OpenTag,
  CloseTag,
} from "code-components/colored-code-components/html/html";

import EditorOnline from "components/EditorOnline/EditorOnline";

import { Canvas } from "code-components/html-code/snippets/snippets";
import { InitHTML } from "code-components/html-code/html-code";

export default function AboutCanvas() {

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
        <CloseTag tagName="canvas" /> - an <FormatMark>HTML element</FormatMark>{" "}
        that provides you with a variety of functions for drawing graphics.
      </FormatP>
      <FormatP>
        In order to start using it, you should understand the basics of HTML,
        and you must have a grasp of JavaScript fundamentals. Without this
        knowledge, you may encounter difficulties understanding the content.
      </FormatP>
      <FormatP>
        Additionally, you will need a basic understanding of math and physics.
      </FormatP>
      <InfoBox type="extra" dir="row">
        <FormatP>
          Don't worry if you don't remember much about these subjects; I will
          explain them.
        </FormatP>
      </InfoBox>
      <FormatP>
        With Canvas, you can develop interesting things. This can include
        drawing graphs, combining photos, or creating simple animations, for
        instance.
      </FormatP>
      <InfoBox type="extra" dir="row">
        <FormatP>
          You can use it for your website, for relaxation, simulating physics,
          or even for games.
        </FormatP>
      </InfoBox>
      <FormatP>
        Here are a few examples of what you can do with just canvas and
        JavaScript.
      </FormatP>
      <InfoBox dir="column" type="warn">
        On weaker devices, these projects may either not be displayed at all or
        may be displayed with freezes. On mobile phones, you might not be able
        to try these projects because the authors of the projects haven't
        included touch screen functionality.
      </InfoBox>
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
      <InfoBox type="extra" dir="column">
        <FormatP>
          To see more just google it as
          <FormatMark>canvas js projects</FormatMark> to find more websites with
          canvas projects.
        </FormatP>
        <FormatP>
          Link on one of them{" "}
          <FormatLink href="https://webdesign.tutsplus.com/21-ridiculously-impressive-html5-canvas-experiments--net-14210a">
            canvas projects
          </FormatLink>
        </FormatP>
      </InfoBox>
    </>
  );
}
