import globalCss from "../../../../css/global.module.css";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
  FormatListUl,
} from "../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../components/CodeBox/CodeBox";

import { Comment } from "../../../../code-components/colored-code-components/js/js";
import { Br } from "../../../../code-components/colored-code-components/html/html";

import {
  DeclareCanvas,
  DeclareCtx,
  UseCtxFunction,
  UseCtxVar,
} from "../../../../code-components/js-code/canvas-code/canvas-code";

import InfoBox from "../../../../components/InfoBox/InfoBox";
import ImageBox from "../../../../components/ImageBox/ImageBox";

import fillRectImg from "../../../../img/canvas-api/fillRect.png";
import clearRectImg from "../../../../img/canvas-api/clearRect.png";
import strokeImg from "../../../../img/canvas-api/stroke.png";
import FillRectImg from "../../../../img/canvas-api/fill.png";
import arcImg from "../../../../img/canvas-api/arc.png";
import mlToImg from "../../../../img/canvas-api/mlTo.png";
import strokeStyleImg from "../../../../img/canvas-api/strokeStyle.png";
import fillStyleImg from "../../../../img/canvas-api/fillStyle.png";
import lineWidthImg from "../../../../img/canvas-api/lineWidth.png";

import EditorOnline from "../../../../components/EditorOnline/EditorOnline";

export default function CanvasAPI() {
  return (
    <>
      <FormatTitleH2>Canvas API</FormatTitleH2>
      <FormatP>
        <FormatMark>CANVAS API</FormatMark> is a collection of methods that
        allow you to create and manage your canvas. You can use the following
        functions in order to work with it:
      </FormatP>
      <FormatListUl>
        <li>
          <a href="#fillRect" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            fillRect
          </a>
        </li>
        <li>
          <a href="#clearRect" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            clearRect
          </a>
        </li>
        <li>
          <a href="#beginPath" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            beginPath
          </a>
        </li>
        <li>
          <a href="#fill" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            fill
          </a>
        </li>
        <li>
          <a href="#stroke" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            stroke
          </a>
        </li>
        <li>
          <a href="#fillStyle" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            fillStyle
          </a>
        </li>
        <li>
          <a href="#strokeStyle" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            strokeStyle
          </a>
        </li>
        <li>
          <a href="#rect" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            rect
          </a>
        </li>
        <li>
          <a href="#arc" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            arc
          </a>
        </li>
        <li>
          <a href="#lineTo" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            lineTo
          </a>
        </li>
        <li>
          <a href="#moveTo" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            moveTo
          </a>
        </li>
        <li>
          <a href="#lineWidth" className={`${globalCss["global-link"]}`} style={{borderBottom: "1px solid currentColor"}}>
            lineWidth
          </a>
        </li>
      </FormatListUl>

      <table>
        <thead>
          <tr>
            <th>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <FormatTitleH3>Get access to CANVAS API</FormatTitleH3>
      <FormatP>
        Before we start, we need to get access to{" "}
        <FormatMark>CANVAS API</FormatMark>. Canvas context provides us it. The
        following code is how to do that.
      </FormatP>
      <CodeBox>
        <DeclareCanvas />
        <Comment value="We need to find canvas first to get its context" />
        <Br />
        <DeclareCtx />
        <Comment value="Our context" />
      </CodeBox>
      <FormatP>
        First, we declare a variable that contains the canvas element. We can
        find the canvas using the{" "}
        <FormatMark>document.querySelector</FormatMark> method with appropriate
        selectors like <FormatMark>canvas</FormatMark>,{" "}
        <FormatMark>.canvas</FormatMark>, or <FormatMark>#canvas</FormatMark>.
      </FormatP>
      <CodeBox>
        <DeclareCanvas />
      </CodeBox>
      <FormatP>
        Then we need to get our context using canvas method{" "}
        <FormatMark>getContext</FormatMark> and pass <FormatMark>2d</FormatMark>
        as an argument.
      </FormatP>
      <InfoBox type="extra" dir="row">
        <FormatP>
          There are more kind of parametrs of{" "}
          <FormatMark>getContext</FormatMark>. But we don't need them right now.
        </FormatP>
      </InfoBox>
      <CodeBox>
        <DeclareCtx />
      </CodeBox>
      <InfoBox type="extra" dir="row">
        <FormatP>
          Now we have an access to <FormatMark>CANVAS API</FormatMark>.
        </FormatP>
      </InfoBox>

      <FormatTitleH3>Canvas coordinates</FormatTitleH3>
      <ImageBox
        src="https://www.javascripttutorial.net/wp-content/uploads/2020/09/JavaScript-Canvas.png"
        description="Canvas coordinates"
        number="1.0"
      />
      <ImageBox
        src="data:image/png;base64,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"
        description="Canvas coordinates"
        number="1.1"
      />
      <InfoBox type="extra" dir="row">
        <FormatP>
          Canvas coordinates (0, 0) start from upper left corner.{" "}
        </FormatP>
      </InfoBox>

      {/* FILL RECT */}

      <FormatTitleH3 id="fillRect">fillRect</FormatTitleH3>
      <CodeBox>
        <UseCtxFunction
          method="fillRect"
          args={["x", "y", "width", "height"]}
        />
      </CodeBox>
      <FormatP>
        fillRect - is a method that draws rectangle and fills it at once.
      </FormatP>
      <FormatP>Method takes 4 parametrs:</FormatP>
      <FormatListUl>
        <li>x - an x position of rectangle</li>
        <li>y - an y position of rectangle</li>
        <li>width - width of rectangle</li>
        <li>height - height of rectangle</li>
      </FormatListUl>
      <ImageBox
        src={fillRectImg}
        description="ctx.fillRect(x, y, width, height)"
      />
      <EditorOnline
        title="Untitled"
        src="https://codepen.io/Zyabrik10/embed/zYyvaRa?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/zYyvaRa">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      {/* CLEAR RECT */}

      <FormatTitleH3 id="clearRect">clearRect</FormatTitleH3>
      <CodeBox>
        <UseCtxFunction
          method="clearRect"
          args={["x", "y", "width", "height"]}
        />
      </CodeBox>
      <FormatP>
        clearRect - clears rectangle area with transparent color.
      </FormatP>
      <FormatP>Method takes 4 parametrs:</FormatP>
      <FormatListUl>
        <li>x - an x position of rectangle</li>
        <li>y - an y position of rectangle</li>
        <li>width - width of rectangle</li>
        <li>height - height of rectangle</li>
      </FormatListUl>

      <ImageBox
        src={clearRectImg}
        description="ctx.clearRect
        (x, y, width, height)"
      />
      <EditorOnline
        title="clearReact(x, y, width, height)"
        src="https://codepen.io/Zyabrik10/embed/mdaeKGJ?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/mdaeKGJ">
          clearReact(x, y, width, height)
        </a>{" "}
        by Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      {/* BEGIN PATH */}

      <FormatTitleH3 id="beginPath">beginPath</FormatTitleH3>
      <CodeBox>
        <UseCtxFunction method="beginPath" />
      </CodeBox>
      <FormatP>
        beginPath - begins a new path or resets the current path.
      </FormatP>
      <InfoBox type="extra" dir="row">
        Image path like a box. Inside of this box elements will be connected
        with each other. New path - new element
      </InfoBox>

      {/* FILL */}

      <FormatTitleH3 id="fill">fill</FormatTitleH3>
      <CodeBox>
        <UseCtxFunction method="fill" />
      </CodeBox>
      <FormatP>
        fill - fills the current path with the current fillStyle
      </FormatP>
      <ImageBox src={FillRectImg} description="ctx.fill()" />
      <EditorOnline
        title="Untitled"
        src="https://codepen.io/Zyabrik10/embed/mdaeKgV?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/mdaeKgV">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      {/* FILL STYLE */}

      <FormatTitleH3 id="fillStyle">fillStyle</FormatTitleH3>
      <CodeBox>
        <UseCtxVar varName="fillStyle" value="<your color code>" />
      </CodeBox>
      <FormatP>fillStyle - set color wich will be used to fill path.</FormatP>
      <InfoBox type="extra" dir="row">
        <FormatP>#fff - by default</FormatP>
      </InfoBox>
      <ImageBox src={fillStyleImg} description="ctx.fillStyle" />
      <FormatP>
        Color can be passed by <FormatMark>rgba</FormatMark>
        <FormatMark>words</FormatMark>
        <FormatMark>hex</FormatMark>
        <FormatMark>hsl</FormatMark>
      </FormatP>
      <EditorOnline
        title="fillStyle"
        src="https://codepen.io/Zyabrik10/embed/VwqjJaV?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/mdaeKgV">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      {/* STROKE */}

      <FormatTitleH3 id="stroke">stroke</FormatTitleH3>
      <CodeBox>
        <UseCtxFunction method="stroke" />
      </CodeBox>
      <FormatP>
        stroke - stroke the current path with the current strokeStyle [#fff - by
        default]
      </FormatP>
      <ImageBox src={strokeImg} description="ctx.stroke();" />
      <EditorOnline
        title="Untitled"
        src="https://codepen.io/Zyabrik10/embed/ZEVbRdj?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/ZEVbRdj">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      {/* STROKE  STYLE */}

      <FormatTitleH3 id="strokeStyle">strokeStyle</FormatTitleH3>
      <CodeBox>
        <UseCtxVar varName="strokeStyle" value="<your color code>" />
      </CodeBox>
      <FormatP>
        strokeStyle - set color wich will be used to stroke path.
      </FormatP>
      <InfoBox type="extra" dir="row">
        <FormatP>#fff - by default</FormatP>
      </InfoBox>
      <ImageBox src={strokeStyleImg} description="ctx.strokeStyle" />
      <FormatP>
        Color can be passed by <FormatMark>rgba</FormatMark>
        <FormatMark>words</FormatMark>
        <FormatMark>hex</FormatMark>
        <FormatMark>hsl</FormatMark>
      </FormatP>
      <EditorOnline
        title="strokeStyle"
        src="https://codepen.io/Zyabrik10/embed/qBLNzay?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/mdaeKgV">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      {/* RECT */}

      <FormatTitleH3 id="rect">rect</FormatTitleH3>
      <CodeBox>
        <UseCtxFunction method="rect" args={["x", "y", "width", "height"]} />
      </CodeBox>
      <FormatP>rect - mark rectangle area with transparent color.</FormatP>
      <InfoBox type="extra" dir="row">
        <FormatP>
          To fill or stroke marked rectangle use <FormatMark>fill()</FormatMark>{" "}
          or <FormatMark>stroke()</FormatMark>
        </FormatP>
      </InfoBox>
      <FormatP>Method takes 4 parametrs:</FormatP>
      <FormatListUl>
        <li>x - an x position of rectangle</li>
        <li>y - an y position of rectangle</li>
        <li>width - width of rectangle</li>
        <li>height - height of rectangle</li>
      </FormatListUl>
      <ImageBox src={FillRectImg} description="ctx.rect(x, y, width, height)" />
      <EditorOnline
        title="Untitled"
        src="https://codepen.io/Zyabrik10/embed/mdaeKgV?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/mdaeKgV">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      {/* ARC */}

      <FormatTitleH3 id="arc">arc</FormatTitleH3>
      <CodeBox>
        <UseCtxFunction
          method="arc"
          args={[
            "x",
            "y",
            "radius",
            "startAngle",
            "endAngle",
            "counterClockWise",
          ]}
        />
      </CodeBox>
      <FormatP>arc - mark a circle area with transparent color.</FormatP>
      <InfoBox type="extra" dir="row">
        <FormatP>
          To fill or stroke marked arc use <FormatMark>fill()</FormatMark> or{" "}
          <FormatMark>stroke()</FormatMark>
        </FormatP>
      </InfoBox>
      <FormatP>Method takes 4 parametrs:</FormatP>
      <FormatListUl>
        <li>x - x position of circle center</li>
        <li>y - y position of circle center</li>
        <li>radius - radius of circle</li>
        <li>height - height of rectangle</li>
        <li>startAngle - starting angle [in radians]</li>
        <li>endAngle - ending angle [in radians]</li>
      </FormatListUl>

      <ImageBox
        src={arcImg}
        description="ctx.arc(x, y, radius, startAngle, endAngle, counterClockWise)"
      />
      <EditorOnline
        title="arc(x, y, radius, startAngle, endAngle, counterClockWise)"
        src="https://codepen.io/Zyabrik10/embed/zYyvLqb?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/zYyvLqb">
          arc(x, y, radius, startAngle, endAngle, counterClockWise)
        </a>{" "}
        by Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      {/* MOVETO */}

      <FormatTitleH3 id="moveTo">moveTo</FormatTitleH3>
      <CodeBox>
        <UseCtxFunction method="moveTo" args={["x", "y"]} />
      </CodeBox>
      <FormatP>moveTo - mark a start point of a line.</FormatP>
      <InfoBox type="extra" dir="row">
        <FormatP>
          In order to draw line we need use <FormatMark>lineTo()</FormatMark>{" "}
          method to mark end point and then use{" "}
          <FormatMark>stroke()</FormatMark>.
        </FormatP>
      </InfoBox>
      <FormatP>Method takes 2 parametrs:</FormatP>
      <FormatListUl>
        <li>x - x position of point</li>
        <li>y - y position of point</li>
      </FormatListUl>

      {/* LINETO */}

      <FormatTitleH3 id="lineTo">lineTo</FormatTitleH3>
      <CodeBox>
        <UseCtxFunction method="lineTo" args={["x", "y"]} />
      </CodeBox>
      <FormatP>lineTo - mark a endPoint point of a line.</FormatP>
      <FormatP>In order to use draw line we need lineTo method.</FormatP>
      <FormatP>Method takes 2 parametrs:</FormatP>
      <FormatListUl>
        <li>x - x position of point</li>
        <li>y - y position of point</li>
      </FormatListUl>

      <ImageBox src={mlToImg} description="ctx.moveTo(x, y) ctx.moveTo(x, y)" />
      <EditorOnline
        title="moveTo(x, y) and lineTo(x, y)"
        src="https://codepen.io/Zyabrik10/embed/KKbdbRw?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/KKbdbRw">
          moveTo(x, y) and lineTo(x, y)
        </a>{" "}
        by Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>

      {/* LINEWIDTH */}

      <FormatTitleH3 id="lineWidth">lineWidth</FormatTitleH3>
      <CodeBox>
        <UseCtxVar varName="lineWidth" value="<width>" />
      </CodeBox>
      <FormatP>
        lineWidth - set <FormatMark>width</FormatMark> of line to stroke in{" "}
        <FormatMark>pixels</FormatMark>.
      </FormatP>
      <ImageBox src={lineWidthImg} description="ctx.lineWidth" />
      <EditorOnline
        title="lineWidth"
        src="https://codepen.io/Zyabrik10/embed/YzdWorM?default-tab=html%2Cresult"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/mdaeKgV">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </EditorOnline>
    </>
  );
}
