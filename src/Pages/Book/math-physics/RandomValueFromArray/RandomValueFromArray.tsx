import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../ts/theme/adapt-theme";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
  FormatListUl,
  FormatLink,
} from "../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../components/CodeBox/CodeBox";

import {
  VarName,
  Comment,
  Sign,
  Number,
  Coma,
} from "../../../../code-components/colored-code-components/js/js";
import { Br } from "../../../../code-components/colored-code-components/html/html";

import {
  BracketExpression,
  UseObject,
  ConstVariable,
  ConsoleLog,
  FunctionDeclare,
  Return,
  CallFunction,
  UseArrowFunction,
} from "../../../../code-components/js-code/js-code";

import { RandIntFunction } from "../../../../code-components/js-code/canvas-code/canvas-code";

import { DeclareRandom } from "../../../../code-components/js-code/snippets/snippets";
import InfoBox from "../../../../components/InfoBox/InfoBox";
import ImageBox from "../../../../components/ImageBox/ImageBox";

export default function RandomValueFromArray() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Random value from array</FormatTitleH2>

      {/*  */}

      <FormatTitleH3>Function ready to be used</FormatTitleH3>
      <CodeBox>
        <UseArrowFunction name="getNum" args={["...nums"]}>
          <VarName value="nums" />
          <BracketExpression brackets="[]">
            <UseObject name="Math" method="floor">
              <UseObject name="Math" method="random" />
              <Sign value="*" />
              <UseObject name="nums" propertys={["length"]} />
            </UseObject>
          </BracketExpression>
        </UseArrowFunction>
      </CodeBox>
      <InfoBox type="column">
        <FormatMark>...nums</FormatMark> is <FormatMark>rest</FormatMark>
        opration. It gathers all value into array.{" "}
        <FormatMark>(1, 2, 3)</FormatMark> into{" "}
        <FormatMark>[1, 2, 3]</FormatMark>. Now we don't need to pass array into
        function <FormatMark>randNum([1, 2, 3])</FormatMark>. We can just pass
        it like this <FormatMark>randNum(1, 2, 3)</FormatMark>
      </InfoBox>
      {/*  */}

      <FormatTitleH3>Get last element from array</FormatTitleH3>
      <InfoBox type="row">
        <FormatP>
          Read this{" "}
          <FormatLink href="book/random-value-between-min-max">
            Math.random()
          </FormatLink>{" "}
          if you don't know about it.
        </FormatP>
      </InfoBox>
      <FormatP>
        Each element in array has own index string from 0. That means each index
        equals postion of element - 1 if count normal starting from 1.
      </FormatP>
      <FormatP>
        To find the last one elemnt index of array we jsut need to take array
        length which is normal position of element and substract it by 1.
      </FormatP>
      <ImageBox src="https://digifisk.com/wp-content/uploads/2022/12/2-1.png" />
      <CodeBox>
        <ConstVariable name="array">
          <BracketExpression brackets="[]">
            <Number value="10" />
            <Coma />
            <Number value="12" />
            <Coma />
            <Number value="33" />
            <Coma />
            <Number value="24" />
            <Coma />
            <Number value="45" />
            <Coma />
            <Number value="63" />
            <Coma />
            <Number value="72" />
            <Coma />
            <Number value="18" />
          </BracketExpression>
        </ConstVariable>
        <Br />

        <ConstVariable name="lastElemntIndex">
          <UseObject name="array" propertys={["length"]} />
          <Sign value="-" />
          <Number value="1" />
        </ConstVariable>
        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="lastElemntIndex" />
        </ConsoleLog>
        <Comment value="7" />
      </CodeBox>
      <FormatP>
        Now to get first element we just need to pass 0 into brackets{" "}
        <FormatMark>array[0]</FormatMark> and to get last element we need to
        pass <FormatMark>array.length - 1</FormatMark> into brackets{" "}
        <FormatMark>array[array.length - 1]</FormatMark>
      </FormatP>
      <CodeBox>
        <ConstVariable name="array">
          <BracketExpression brackets="[]">
            <Number value="10" />
            <Coma />
            <Number value="12" />
            <Coma />
            <Number value="33" />
            <Coma />
            <Number value="24" />
            <Coma />
            <Number value="45" />
            <Coma />
            <Number value="63" />
            <Coma />
            <Number value="72" />
            <Coma />
            <Number value="18" />
          </BracketExpression>
        </ConstVariable>
        <Br />
        <ConstVariable name="lastElemntIndex">
          <UseObject name="array" propertys={["length"]} />
          <Sign value="-" />
          <Number value="1" />
        </ConstVariable>
        <Br />
        <ConstVariable name="lastElemnt">
          <VarName value="array" />
          <BracketExpression brackets="[]">
            <VarName value="lastElemntIndex" />
          </BracketExpression>
        </ConstVariable>
        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="lastElemnt" />
        </ConsoleLog>
        <Comment value="18" />
      </CodeBox>

      <FormatTitleH3>Get random element from array</FormatTitleH3>
      <FormatP>
        We already know that <FormatMark>Math.random()</FormatMark> return value
        from <FormatMark>0</FormatMark> to <FormatMark>1</FormatMark> (1 is not
        included). If we multiply <FormatMark>Math.random()</FormatMark> by{" "}
        <FormatMark>some value</FormatMark> then we get value from{" "}
        <FormatMark>0</FormatMark> to <FormatMark>some value</FormatMark> (some
        value is not included).
      </FormatP>
      <FormatP>
        That is exactly what we want. If we multiply{" "}
        <FormatMark>Math.random()</FormatMark> by{" "}
        <FormatMark>array.length</FormatMark> then we'll get value between 0 and{" "}
        <FormatMark>array.length - 1</FormatMark> which can be our index.
      </FormatP>
      <InfoBox type="column">
        <FormatMark>Math.random()</FormatMark> return float number. Inex can
        only be interger. So we need to nest our{" "}
        <FormatMark>Math.random() * array.length</FormatMark> in{" "}
        <FormatMark>Math.floor()</FormatMark>
      </InfoBox>
      <CodeBox>
        <ConstVariable name="array">
          <BracketExpression brackets="[]">
            <Number value="10" />
            <Coma />
            <Number value="12" />
            <Coma />
            <Number value="33" />
            <Coma />
            <Number value="24" />
            <Coma />
            <Number value="45" />
            <Coma />
            <Number value="63" />
            <Coma />
            <Number value="72" />
            <Coma />
            <Number value="18" />
          </BracketExpression>
        </ConstVariable>
        <Br />
        <ConstVariable name="randomElement">
          <VarName value="array" />
          <BracketExpression brackets="[]">
            <UseObject name="Math" method="floor">
              <UseObject name="Math" method="random" />
              <Sign value="*" />
              <UseObject name="array" propertys={["length"]} />
            </UseObject>
          </BracketExpression>
        </ConstVariable>
        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="randomElement" />
        </ConsoleLog>
        <Comment value="72" />
      </CodeBox>
      <FormatP>Let's make a function to reuse code in the future.</FormatP>
      <CodeBox>
        <FunctionDeclare name="randNum" parameters={["array"]}>
          {"  "}
          <ConstVariable name="randomElement">
            <VarName value="array" />
            <BracketExpression brackets="[]">
              <UseObject name="Math" method="floor">
                <UseObject name="Math" method="random" />
                <Sign value="*" />
                <UseObject name="array" propertys={["length"]} />
              </UseObject>
            </BracketExpression>
          </ConstVariable>
          <Br />
          <Br />
          {"  "}
          <Return>
            <VarName value="randomElement" />
          </Return>
        </FunctionDeclare>
        <Br />
        <Br />
        <ConstVariable name="array">
          <BracketExpression brackets="[]">
            <Number value="10" />
            <Coma />
            <Number value="12" />
            <Coma />
            <Number value="33" />
            <Coma />
            <Number value="24" />
            <Coma />
            <Number value="45" />
            <Coma />
            <Number value="63" />
            <Coma />
            <Number value="72" />
            <Coma />
            <Number value="18" />
          </BracketExpression>
        </ConstVariable>
        <Br />
        <Br />
        <ConsoleLog>
          <CallFunction name="randNum" args={["array"]} />
        </ConsoleLog>
        <Comment value="72" />
      </CodeBox>
      <FormatP>
        Now we know how to <FormatMark>randNum()</FormatMark> works inside.
        Let's make it smaller.
      </FormatP>
      <CodeBox>
        <UseArrowFunction name="getNum" args={["...nums"]}>
          <VarName value="nums" />
          <BracketExpression brackets="[]">
            <UseObject name="Math" method="floor">
              <UseObject name="Math" method="random" />
              <Sign value="*" />
              <UseObject name="nums" propertys={["length"]} />
            </UseObject>
          </BracketExpression>
        </UseArrowFunction>
      </CodeBox>
    </>
  );
}
