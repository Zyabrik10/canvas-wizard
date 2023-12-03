import { Br } from "code-components/colored-code-components/html/html";
import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
  FormatListUl,
  FormatLink,
} from "code-components/format-components/format-components";
import {
  BracketExpression,
  ClassFunctionDeclare,
  ConstVariable,
  DeclareClass,
  UseObject,
} from "code-components/js-code/js-code";

import { CodeBox } from "components/index";

import InfoBox from "components/InfoBox/InfoBox";

import {
  Coma,
  Equal,
  Sign,
  VarName,
  Number,
  Semicoln,
  VarDec,
} from "code-components/colored-code-components/js/js";

import Contructor from "./snippets/constructor/constructor";
import Draw from "./snippets/draw/draw";
import Move from "./snippets/move/move";
import Update from "./snippets/update/update";
import CheckWallCollision from "./snippets/checkWallCollision/checkWallCollision";

export default function ClassBall() {
  return (
    <>
      <FormatTitleH2>Class Ball</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox>
        <DeclareClass name="Ball">
          <Contructor />
          <Br />
          <Br />
          <Draw />
          <Br />
          <Br />
          <Move />
          <Br />
          <Br />
          <CheckWallCollision />
          <Br />
          <Br />
          <Update />
        </DeclareClass>
      </CodeBox>
      <FormatTitleH3>
        Why do we need class if we can just use objects?
      </FormatTitleH3>
      <FormatP>
        Class help us to mark tempelate wich can be used in future to create
        several idetical objects with different parameters.
      </FormatP>
      <FormatTitleH3>Constructor</FormatTitleH3>
      <FormatP>
        The constructor is a special method that gets called when an object of
        the type is created. It's also where you initialize your properties and
        set their initial values.
      </FormatP>
      <FormatP>Our constructor will be so:</FormatP>
      <CodeBox>
        <Contructor />
      </CodeBox>
      <InfoBox type="extra" >
        <FormatP>
          We use destruction for our object to get propertys, but if we don't
          pass any propertys they will be <FormatMark>undefined</FormatMark>.
          That is why we check <FormatMark>object || default</FormatMark>
        </FormatP>
      </InfoBox>
      <FormatP>In this constructor we have such parameters:</FormatP>
      <FormatListUl>
        <li>rad - radius</li>
        <li>coor - coordinates</li>
        <li>vel - velocity</li>
      </FormatListUl>
      <InfoBox type="extra" >
        <FormatP>
          We also use id. We need it in the future for optimization.
        </FormatP>
      </InfoBox>
      <FormatTitleH3>Draw function</FormatTitleH3>
      <FormatP>To display our balls we need to draw theme on canvas.</FormatP>
      <CodeBox>
        <ClassFunctionDeclare name="draw">
          {"   "}
          <VarDec value="const" />
          <BracketExpression brackets="{}">
            <VarName value="x" />
            <Coma />
            <VarName value="y" />
          </BracketExpression>
          <Equal />
          <UseObject name="this" propertys={["coor"]} />
          <Semicoln />
          <Br />
          {"   "}
          <ConstVariable name="rad">
            <UseObject name="this" propertys={["rad"]} />
          </ConstVariable>
          <Br />
          <Br />
          {"   "}
          <UseObject name="this" method="beginPath" />
          <Semicoln />
          <Br />
          {"   "}
          <UseObject name="this" method="arc">
            <VarName value="x" />
            <Coma />
            <VarName value="y" />
            <Coma />
            <VarName value="rad" />
            <Coma />
            <Number value="0" />
            <Coma />
            <Number value="2" />
            <Sign value="*" />
            <VarName value="pi" />
          </UseObject>
          <Semicoln />
          <Br />
          {"   "}
          <UseObject name="this" method="fill" />
          <Semicoln />
        </ClassFunctionDeclare>
      </CodeBox>
      <InfoBox type="extra" >
        <FormatP>
          If you don't remember how <FormatMark>ctx.arc()</FormatMark> works see
          this{" "}
          <FormatLink href="/book/canvas-api#arc" isHere>
            CANVAS API
          </FormatLink>
        </FormatP>
      </InfoBox>
      <FormatTitleH3>Move function</FormatTitleH3>
      <FormatP>
        Move function will use balls velocity to make diractional movement of
        balls.
      </FormatP>
      <CodeBox>
        <Move />
      </CodeBox>
      <FormatTitleH3>checkWallCollision function</FormatTitleH3>
      <FormatP>
        If we want balls not to go through walls we need to prohibit it.
      </FormatP>
      <CodeBox>
        <CheckWallCollision />
      </CodeBox>
      <FormatTitleH3>update function</FormatTitleH3>
      <FormatP>
        Every changes we do to our ball is its update. So let's put all our
        updates in one function update.
      </FormatP>
      <CodeBox>
        <Update />
      </CodeBox>
    </>
  );
}
