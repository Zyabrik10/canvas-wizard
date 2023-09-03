import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../../ts/theme/adapt-theme";

import img from "../../../../../img/projects/config/innerWidth-innerHeight.png";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
  FormatListUl,
  FormatLink,
} from "../../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";

import ImageBox from "../../../../../components/ImageBox/ImageBox";

import initImage1 from "../../../../../img/projects/config/img1.png";
import initImage2 from "../../../../../img/projects/config/img2.png";
import InfoBox from "../../../../../components/InfoBox/InfoBox";
import { InitHTML } from "../../../../../code-components/html-code/html-code";
import EditorOnline from "../../../../../components/EditorOnline/EditorOnline";
import {
  DeclareCanvas,
  DeclareCtx,
  SetCanvasSize,
} from "../../../../../code-components/js-code/canvas-code/canvas-code";
import { Br } from "../../../../../code-components/colored-code-components/html/html";
import { BracketExpression } from "../../../../../code-components/js-code/js-code";
import {
  Colon,
  Object,
  Property,
  Semicoln,
  VarName,
} from "../../../../../code-components/colored-code-components/js/js";

export default function ProjectConfiguration() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Project configuration</FormatTitleH2>
      <FormatTitleH3>Stars - project</FormatTitleH3>
      <InfoBox type="extra" dir="row">
        Before you start this project you should know:
        <FormatListUl>
          <li>
            <FormatLink href="/book/canvas-api" isHere>
              Canvas API
            </FormatLink>
          </li>
          <li>
            <FormatLink href="/book/random-value-between-min-max" isHere>
              randInt()
            </FormatLink>
          </li>
          <li>
            <FormatLink href="/book/random-value-array" isHere>
              randNum()
            </FormatLink>
          </li>
          <li>
            <FormatLink href="/book/distance-between-objects" isHere>
              getDist()
            </FormatLink>
          </li>
        </FormatListUl>
      </InfoBox>

      <FormatTitleH3>Preview</FormatTitleH3>
      <EditorOnline
        title="Stars"
        src="https://codepen.io/Zyabrik10/embed/OJrMONb?default-tab=html%2Cresult"
      >
        See the Pen <a href="https://codepen.io/Zyabrik10/pen/OJrMONb">Stars</a>{" "}
        by Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      <FormatTitleH3>Configuration Files and Folders</FormatTitleH3>
      <FormatP>
        Every project begins with the creation of configuration files and
        folders.
      </FormatP>
      <FormatP>
        In our configuration setup, we will follow these steps. First, we create
        the main <FormatMark>HTML file</FormatMark> and name it{" "}
        <FormatMark>index.html</FormatMark>. Next, we create two{" "}
        <FormatMark>folders</FormatMark>
        named <FormatMark>js</FormatMark> and <FormatMark>css</FormatMark>.
      </FormatP>

      <ImageBox
        src={initImage1}
        number="1.0"
        description="Creating configuration files and folders"
      />
      <FormatP>
        Then, we create the <FormatMark>main.js</FormatMark> and{" "}
        <FormatMark>main.css</FormatMark> files accordingly.
      </FormatP>

      <ImageBox
        src={initImage2}
        number="1.1"
        description="Creating main.js and main.css"
      />

      <FormatTitleH3>Edit index.html</FormatTitleH3>

      <FormatP>
        We just created <FormatMark>index.html</FormatMark> file. Now we need to
        edit this file in order to display it in browser.
      </FormatP>

      <CodeBox filename="index.html">
        <InitHTML />
      </CodeBox>

      <InfoBox type="extra" dir="row">
        We make file <FormatMark>main.js</FormatMark> to be module in advance.
        To make in the furure seperates files
      </InfoBox>

      <FormatTitleH3>Initializing Our Canvas</FormatTitleH3>

      <FormatP>
        Let's set up our canvas to work with it in the{" "}
        <FormatMark>main.js</FormatMark> file.
      </FormatP>

      <CodeBox filename="main.js">
        <DeclareCanvas />
        <Br />
        <DeclareCtx />
      </CodeBox>

      <FormatP>
        Now, let's make our canvas the full width and height of the viewport.
        The canvas has properties like <FormatMark>width</FormatMark> and{" "}
        <FormatMark>height</FormatMark> for this purpose.
      </FormatP>
      <FormatP>
        The <FormatMark>window</FormatMark> object provides us with{" "}
        <FormatMark>innerWidth</FormatMark> and{" "}
        <FormatMark>innerHeight</FormatMark>, which return the{" "}
        <FormatMark>width</FormatMark> and <FormatMark>height</FormatMark> of
        the <FormatMark>current viewport</FormatMark>.
      </FormatP>
      <InfoBox type="warn" dir="column">
        <FormatP>
          Be careful! If you set the width and height for the canvas in a CSS
          file, those values will affect the visible canvas but not the real
          canvas. To adjust the size of the actual canvas for drawing, you
          should use the <FormatMark>width</FormatMark> and{" "}
          <FormatMark>height</FormatMark> attributes in HTML or set them as
          properties of the canvas in JavaScript
        </FormatP>
      </InfoBox>
      <ImageBox src={img} description="innerWidth and innerHeight" />
      <CodeBox filename="main.js">
        <SetCanvasSize width="innerWidth" height="innerHeight" />
      </CodeBox>
      <InfoBox type="extra" dir="column">
        <FormatP>
          The <FormatMark>innerWidth</FormatMark> and <FormatMark>innerHeight</FormatMark> are properties of the global <FormatMark>window</FormatMark>
          object, so there's no need to write <FormatMark>window.innerWidth</FormatMark> or
          <FormatMark>window.innerHeight</FormatMark>
        </FormatP>
      </InfoBox>

      <FormatTitleH3>Restore margin</FormatTitleH3>
      <FormatP>
        We need to restore margin for body for canvas to be in right position.
      </FormatP>

      <CodeBox filename="main.css">
        <VarName value="body" />{" "}
        <BracketExpression brackets="{}">
          <Br /> <Property value="margin" />
          <Colon /> <Object value="0" />
          <Semicoln />
          <Br />
        </BracketExpression>
      </CodeBox>
    </>
  );
}
