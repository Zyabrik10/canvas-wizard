import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
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

import InfoBox from "../../../../components/InfoBox/InfoBox";
import ImageBox from "../../../../components/ImageBox/ImageBox";

export default function RandomValueFromArray() {
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
      {/*  */}

      <FormatTitleH3>Get last element from array</FormatTitleH3>
      <InfoBox type="extra" dir="row">
        <FormatP>
          Read this{" "}
          <FormatLink
            href="/book/random-value-between-min-max#mathrandom"
            isHere
          >
            Math.random()
          </FormatLink>{" "}
          if you don't know about it.
        </FormatP>
      </InfoBox>
      <FormatP>
        Each element in array has own index string from 0. That means each index
        equals <FormatMark>element position - 1</FormatMark> if count normal
        starting from 1. Each element in an array has its own index, starting
        from 0. This means that each index corresponds to the{" "}
        <FormatMark>element's position - 1</FormatMark> if we count normally
        starting from 1.
      </FormatP>
      <FormatP>
        To find the index of the last element in an array, we just need to take
        the array's length, which represents the normal position of the element,
        and subtract 1 from it.
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
        We already know that when we use <FormatMark>Math.random()</FormatMark>,
        it returns a number between 0 and 1 (1 is excluded). If we multiply{" "}
        <FormatMark>Math.random()</FormatMark> by a number, we can get a value
        between 0 and that number (not including that number).
      </FormatP>
      <FormatP>
        That is exactly what we want. If we multiply{" "}
        <FormatMark>Math.random()</FormatMark> by{" "}
        <FormatMark>array.length</FormatMark> then we'll get value between 0 and{" "}
        <FormatMark>array.length - 1</FormatMark> which represents our index of
        last element.
      </FormatP>
      <InfoBox type="extra" dir="column">
        However, there is one thing to keep in mind.
        <FormatMark>Math.random()</FormatMark> gives us a number with decimals,
        but array indices are whole numbers (integers). So, we should use
        Math.floor() to round down our result to a whole number.
      </InfoBox>
      <FormatP>Here's how you can do it: </FormatP>
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
      <FormatP>
        With this code, we can easily pick a random element from the array.
      </FormatP>
      <FormatTitleH3>Creating a Reusable Function</FormatTitleH3>
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
      <FormatTitleH3>Simplified Function</FormatTitleH3>
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
      <InfoBox type="extra" dir="column">
        <FormatMark>...nums</FormatMark> is <FormatMark>rest</FormatMark>
        opration. It gathers all value into array.{" "}
        <FormatMark>(1, 2, 3)</FormatMark> into{" "}
        <FormatMark>[1, 2, 3]</FormatMark>. Now we don't need to pass array into
        function <FormatMark>randNum([1, 2, 3])</FormatMark>. We can just pass
        it like this <FormatMark>randNum(1, 2, 3)</FormatMark>
      </InfoBox>
    </>
  );
}
