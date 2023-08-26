import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../ts/theme/adapt-theme";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatLink,
  FormatTitleH3,
  FormatCode,
  FormatListUl,
} from "../../../../components/FormatedComponents/FormatedComponents";

import {
  Dot,
  VarDec,
  VarName,
  Equal,
  Bracket,
  Quote,
  Method,
  Object,
  Semicoln,
  Text,
  Comment,
  Br,
  Coma,
} from "../../../../components/ColoredCodeComponents/ColoredCodeComponents";

import globalCss from "../../../css/global.module.css";

export default function CanvasAPI() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Canvas API</FormatTitleH2>
      <FormatP>
        CANVAS API is a set of methods that allow you to create and manage your
        canvas. You can use the following functions in order to work with it:
      </FormatP>
      <FormatListUl>
        <li>fillRect</li>
        <li>clearRect</li>
        <li>fill</li>
        <li>stroke</li>
        <li>rect</li>
        <li>arc</li>
        <li>lineTo</li>
        <li>moveTo</li>
      </FormatListUl>

      <FormatTitleH3>Get access to CANVAS API</FormatTitleH3>
      <FormatP>
        Before we start, we need to get access to CANVAS API. Canvas context
        provides us it. The following code is how to do that.
      </FormatP>
      <FormatCode id="">
        <VarDec value="const" />
        <VarName value="canvas" />
        <Equal />
        <Object value="document" />
        <Dot />
        <Method value="querySelector" />
        <Bracket value="(" />
        <Quote value="'" />
        <Text value="canvas" />
        <Quote value="'" />
        <Bracket value=")" />
        <Semicoln />
        <Comment value="We need to find canvas first to get its context" />

        <Br />

        <VarDec value="const" />
        <VarName value="ctx" />
        <Equal />
        <Object value="canvas" />
        <Dot />
        <Method value="getContext" />
        <Bracket value="(" />
        <Quote value="'" />
        <Text value="2d" />
        <Quote value="'" />
        <Bracket value=")" />
        <Semicoln />
        <Comment value="Our context" />
      </FormatCode>
      <FormatP>
        First we declare a variable wich contains a canvas element. We can find
        canvas using:{" "}
        <FormatMark>
          document.querySelector(["canvas", ".canvas", "#canvas"])
        </FormatMark>
        .
      </FormatP>
      <FormatCode id="">
        <VarDec value="const" />
        <VarName value="canvas" />
        <Equal />
        <Object value="document" />
        <Dot />
        <Method value="querySelector" />
        <Bracket value="(" />
        <Quote value="'" />
        <Text value="canvas" />
        <Quote value="'" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>
        Then we need to get our context using canvas method getContext and "2d"
        as argument.
      </FormatP>
      <FormatCode id="">
        {" "}
        <VarDec value="const" />
        <VarName value="ctx" />
        <Equal />
        <Object value="canvas" />
        <Dot />
        <Method value="getContext" />
        <Bracket value="(" />
        <Quote value="'" />
        <Text value="2d" />
        <Quote value="'" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>Now we have an access to CANVAS API.</FormatP>

      <FormatTitleH3>fillRect</FormatTitleH3>
      <FormatCode id="">
        <Object value="ctx" />
        <Dot />
        <Method value="fillRect" />
        <Bracket value="(" />
        <VarName value="x" />
        <Coma />
        <VarName value="y" />
        <Coma />
        <VarName value="width" />
        <Coma />
        <VarName value="height" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>
        fillRect - is a method that draws reactangle and fills it at once.
      </FormatP>
      <FormatP>Method takes 4 parametrs:</FormatP>
      <FormatListUl>
        <li>x - an x position of reactangle</li>
        <li>y - an y position of reactangle</li>
        <li>width - width of reactangle</li>
        <li>height - height of reactangle</li>
      </FormatListUl>

      <iframe
        height="400"
        style={{ width: "100%", marginBottom: "30px" }}
        title="Untitled"
        src="https://codepen.io/Zyabrik10/embed/zYyvaRa?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/zYyvaRa">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <FormatTitleH3>clearRect</FormatTitleH3>
      <FormatCode id="">
        <Object value="ctx" />
        <Dot />
        <Method value="clearRect" />
        <Bracket value="(" />
        <VarName value="x" />
        <Coma />
        <VarName value="y" />
        <Coma />
        <VarName value="width" />
        <Coma />
        <VarName value="height" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>
        clearRect - clears rectangle area with transparent color.
      </FormatP>
      <FormatP>Method takes 4 parametrs:</FormatP>
      <FormatListUl>
        <li>x - an x position of reactangle</li>
        <li>y - an y position of reactangle</li>
        <li>width - width of reactangle</li>
        <li>height - height of reactangle</li>
      </FormatListUl>

      <iframe
        height="400"
        style={{ width: "100%", marginBottom: "30px" }}
        scrolling="no"
        title="clearReact(x, y, width, height)"
        src="https://codepen.io/Zyabrik10/embed/mdaeKGJ?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/mdaeKGJ">
          clearReact(x, y, width, height)
        </a>{" "}
        by Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <FormatTitleH3>fill</FormatTitleH3>
      <FormatCode id="">
        <Object value="ctx" />
        <Dot />
        <Method value="fill" />
        <Bracket value="(" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>fill - fill marked area.</FormatP>

      <iframe
        height="400"
        style={{ width: "100%", marginBottom: "30px" }}
        scrolling="no"
        title="Untitled"
        src="https://codepen.io/Zyabrik10/embed/mdaeKgV?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/mdaeKgV">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <FormatTitleH3>stroke</FormatTitleH3>
      <FormatCode id="">
        <Object value="ctx" />
        <Dot />
        <Method value="stroke" />
        <Bracket value="(" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>stroke - stroke area.</FormatP>

      <iframe
        height="400"
        style={{ width: "100%", marginBottom: "30px" }}
        scrolling="no"
        title="Untitled"
        src="https://codepen.io/Zyabrik10/embed/ZEVbRdj?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/ZEVbRdj">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <FormatTitleH3>rect</FormatTitleH3>
      <FormatCode id="">
        <Object value="ctx" />
        <Dot />
        <Method value="rect" />
        <Bracket value="(" />
        <VarName value="x" />
        <Coma />
        <VarName value="y" />
        <Coma />
        <VarName value="width" />
        <Coma />
        <VarName value="height" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>react - mark rectangle area with transparent color.</FormatP>
      <FormatP>
        To fill or stroke marked rectangle use <FormatMark>fill()</FormatMark>{" "}
        or <FormatMark>stroke()</FormatMark>.
      </FormatP>
      <FormatP>Method takes 4 parametrs:</FormatP>
      <FormatListUl>
        <li>x - an x position of reactangle</li>
        <li>y - an y position of reactangle</li>
        <li>width - width of reactangle</li>
        <li>height - height of reactangle</li>
      </FormatListUl>

      <iframe
        height="400"
        style={{ width: "100%", marginBottom: "30px" }}
        scrolling="no"
        title="Untitled"
        src="https://codepen.io/Zyabrik10/embed/mdaeKgV?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/mdaeKgV">Untitled</a> by
        Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <FormatTitleH3>arc</FormatTitleH3>
      <FormatCode id="">
        <Object value="ctx" />
        <Dot />
        <Method value="arc" />
        <Bracket value="(" />
        <VarName value="x" />
        <Coma />
        <VarName value="y" />
        <Coma />
        <VarName value="radius" />
        <Coma />
        <VarName value="startAngle" />
        <Coma />
        <VarName value="endAngle" />
        <Coma />
        <VarName value="counterClockWise" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>arc - mark a circle area with transparent color.</FormatP>
      <FormatP>
        To fill or stroke marked rectangle use <FormatMark>fill()</FormatMark>{" "}
        or <FormatMark>stroke()</FormatMark>.
      </FormatP>
      <FormatP>Method takes 4 parametrs:</FormatP>
      <FormatListUl>
        <li>x - x position of circle center</li>
        <li>y - y position of circle center</li>
        <li>radius - radius of circle</li>
        <li>height - height of reactangle</li>
        <li>startAngle - starting angle [in radians]</li>
        <li>endAngle - ending angle [in radians]</li>
      </FormatListUl>
      <iframe
        height="400"
        style={{ width: "100%", marginBottom: "30px" }}
        scrolling="no"
        title="arc(x, y, radius, startAngle, endAngle, counterClockWise)"
        src="https://codepen.io/Zyabrik10/embed/zYyvLqb?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/zYyvLqb">
          arc(x, y, radius, startAngle, endAngle, counterClockWise)
        </a>{" "}
        by Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>

      <FormatTitleH3>moveTo</FormatTitleH3>
      <FormatCode id="">
        <Object value="ctx" />
        <Dot />
        <Method value="moveTo" />
        <Bracket value="(" />
        <VarName value="x" />
        <Coma />
        <VarName value="y" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>moveTo - mark a start point of a line.</FormatP>
      <FormatP>
        In order to draw line we need use <FormatMark>lineTo()</FormatMark>{" "}
        method to mark end point and then use <FormatMark>stroke()</FormatMark>.
      </FormatP>
      <FormatP>Method takes 2 parametrs:</FormatP>
      <FormatListUl>
        <li>x - x position of point</li>
        <li>y - y position of point</li>
      </FormatListUl>

      <FormatTitleH3>lineTo</FormatTitleH3>
      <FormatCode id="">
        <Object value="ctx" />
        <Dot />
        <Method value="lineTo" />
        <Bracket value="(" />
        <VarName value="x" />
        <Coma />
        <VarName value="y" />
        <Bracket value=")" />
        <Semicoln />
      </FormatCode>
      <FormatP>lineTo - mark a endPoint point of a line.</FormatP>
      <FormatP>In order to use draw line we need lineTo method.</FormatP>
      <FormatP>Method takes 2 parametrs:</FormatP>
      <FormatListUl>
        <li>x - x position of point</li>
        <li>y - y position of point</li>
      </FormatListUl>
      <iframe
        height="400"
        style={{ width: "100%", marginBottom: "30px" }}
        scrolling="no"
        title="moveTo(x, y) and lineTo(x, y)"
        src="https://codepen.io/Zyabrik10/embed/KKbdbRw?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen{" "}
        <a href="https://codepen.io/Zyabrik10/pen/KKbdbRw">
          moveTo(x, y) and lineTo(x, y)
        </a>{" "}
        by Zyabrik10 (<a href="https://codepen.io/Zyabrik10">@Zyabrik10</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
}
