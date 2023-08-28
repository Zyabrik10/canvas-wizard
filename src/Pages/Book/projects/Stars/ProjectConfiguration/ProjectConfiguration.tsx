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
import { Colon, Object, Property, Semicoln, VarName } from "../../../../../code-components/colored-code-components/js/js";

export default function ProjectConfiguration() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Init</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <EditorOnline
        title="Stars"
        src="https://codepen.io/Zyabrik10/embed/OJrMONb?default-tab=html%2Cresult"
      >
        See the Pen <a href="https://codepen.io/Zyabrik10/pen/OJrMONb">Stars</a>{" "}
        by Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      <FormatTitleH3>Config files and folders</FormatTitleH3>
      <FormatP>
        Each project starts with creating files and folders of configuration.
      </FormatP>
      <FormatP>
        Our configuration will be so. We create main html file and name it{" "}
        <FormatMark>index.html</FormatMark>. Then create two folders{" "}
        <FormatMark>js</FormatMark> and <FormatMark>css</FormatMark>.
      </FormatP>

      <ImageBox
        src={initImage1}
        number="1.0"
        description="Creating config files and folders"
      />
      <FormatP>
        After, we create <FormatMark>main.js</FormatMark> and{" "}
        <FormatMark>main.css</FormatMark> accordingly.
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

      <InfoBox type="row">
        We make file <FormatMark>main.js</FormatMark> to be module in advance.
        To make in the furure seperates files
      </InfoBox>

      <FormatTitleH3>Edit main.js</FormatTitleH3>

      <FormatP>
        Let`s init our canvas to work with it in{" "}
        <FormatMark>main.js</FormatMark> file.
      </FormatP>

      <CodeBox filename="main.js">
        <DeclareCanvas />
        <Br />
        <DeclareCtx />
      </CodeBox>

      <FormatP>
        I`d like to make our canvas full width and height of{" "}
        <FormatMark>viewport</FormatMark>. Canvas has propertys like width and
        height for this.
      </FormatP>
      <FormatP>
        <FormatMark>window</FormatMark> has objects for this case:{" "}
        <FormatMark>innerWidth</FormatMark> and{" "}
        <FormatMark>innerHeight</FormatMark> return width and height accordignly
        of current <FormatMark>viewport</FormatMark>.
      </FormatP>
      <InfoBox type="column">
        Be careful! If you set <FormatMark>width</FormatMark> and{" "}
        <FormatMark>height</FormatMark> for canvas in{" "}
        <FormatMark>css</FormatMark> file. That will be{" "}
        <FormatMark>width</FormatMark> and <FormatMark>height</FormatMark> of
        <FormatMark>visible</FormatMark> canvas, but not{" "}
        <FormatMark>real</FormatMark> canvas. For displaying{" "}
        <FormatMark>real</FormatMark> canvas you need to use width and height
        <FormatMark>attributes</FormatMark> in <FormatMark>html</FormatMark> or{" "}
        width and height as <FormatMark>propertys</FormatMark> of canvas in{" "}
        <FormatMark>js</FormatMark>
      </InfoBox>
      <ImageBox src={img} description="innerWidth and innerHeight" />
      <CodeBox filename="main.js">
        <SetCanvasSize width="innerWidth" height="innerHeight" />
      </CodeBox>
      <InfoBox type="column">
        <FormatMark>innerWidth</FormatMark> and{" "}
        <FormatMark>innerHeight</FormatMark> are propertys of global object{" "}
        <FormatMark>window</FormatMark>. So we don`t need to write{" "}
        <FormatMark>window.innerWidth</FormatMark> or{" "}
        <FormatMark>window.innerHeight</FormatMark>
      </InfoBox>

      <FormatTitleH3>Edit main.css</FormatTitleH3>
      <FormatP>
        We need to reatore margin for body for canvas to be in right position.
      </FormatP>

      <CodeBox filename="main.css">
        <VarName value="body" />{" "}
        <BracketExpression brackets="{}" >
          <Br />
          {" "} <Property value="margin"/>
          <Colon />{" "}
          <Object value="none" />
          <Semicoln />
          <Br />
        </BracketExpression>
      </CodeBox>
    </>
  );
}
