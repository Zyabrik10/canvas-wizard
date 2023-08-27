import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../ts/theme/adapt-theme";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
  FormatCode,
  FormatListUl,
} from "../../../../components/FormatedComponents/FormatedComponents";

import {
  VarName,
  Comment,
  Sign,
  Number,
} from "../../../../components/ColoredCodeComponents/js/js";
import { Br } from "../../../../components/ColoredCodeComponents/html/html";

import {
  BracketExpression,
  UseObject,
  ConstVariable,
  ConsoleLog,
  FunctionDeclare,
  Return,
  CallFunction,
} from "../../../../components/JavaScriptCode/JavaScriptCode";

import { RandIntFunction } from "../../../../components/JavaScriptCode/CanvasCode/CanvasCode";

import { DeclareRandom } from "../../../../components/JavaScriptCode/Code/Code";

export default function RandomValue() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Random value between min and max value</FormatTitleH2>

      {/*  */}

      <FormatTitleH3>Function ready to be used</FormatTitleH3>
      <FormatCode id="">
        <RandIntFunction />
      </FormatCode>

      {/*  */}

      <FormatTitleH3>Inroducing Math.random()</FormatTitleH3>
      <FormatP>
        Method <FormatMark>random()</FormatMark> in class{" "}
        <FormatMark>Math</FormatMark> returns random value from{" "}
        <FormatMark>0</FormatMark> to <FormatMark>1</FormatMark>.
      </FormatP>
      <FormatP>
        But it doesn`t include <FormatMark>1</FormatMark>.
      </FormatP>
      <FormatP>
        So actualy it returns value from <FormatMark>0</FormatMark> to{" "}
        <FormatMark>0.999...</FormatMark>.
      </FormatP>
      <FormatCode id="">
        <DeclareRandom />
        <Comment value="random value from 0 to 1" />
        <Br />
        <ConsoleLog>
          <VarName value="randomValue" />
        </ConsoleLog>
        <Comment value="0.09820142543127064" />
      </FormatCode>

      {/*  */}

      <FormatTitleH3>Get random value from 0 to any value</FormatTitleH3>
      <FormatP>
        In oreder to make value from <FormatMark>0</FormatMark> to{" "}
        <FormatMark>any value</FormatMark> we just need to multiply this{" "}
        <FormatMark>any value + 1</FormatMark> on random value.
      </FormatP>
      <FormatCode id="">
        <DeclareRandom />
        <Comment value="random value from 0 to 1" />

        <Br />
        <ConstVariable name="anyValue">
          <Number value="10" />
        </ConstVariable>
        <Br />
        <ConsoleLog>
          <VarName value="randomValue" />
          <Sign value="*" />
          <BracketExpression brackets="()">
            <VarName value="anyValue" />
            <Sign value="+" />
            <Number value="1" />
          </BracketExpression>
        </ConsoleLog>
        <Comment value="5.9242883533580475" />
      </FormatCode>
      <FormatP>
        As you can see now we have random value from <FormatMark>0</FormatMark>{" "}
        to <FormatMark>10</FormatMark>. But random method returns random value
        with a big amount of decimals [digits after decimal point].
      </FormatP>
      <FormatP>
        So, to get random value from <FormatMark>0</FormatMark> to{" "}
        <FormatMark>10</FormatMark> we just need to floor this number.
      </FormatP>
      <FormatP>
        We can use <FormatMark>floor()</FormatMark> method in class{" "}
        <FormatMark>Math</FormatMark>.
      </FormatP>
      <FormatCode id="">
        <DeclareRandom />
        <Comment value="random value from 0 to 1" />
        <Br />
        <ConstVariable name="anyValue">
          <Number value="10" />
        </ConstVariable>
        <Br />
        <ConsoleLog>
          <UseObject name="Math" method="floor">
            <VarName value="randomValue" />
            <Sign value="*" />
            <BracketExpression brackets="()">
              <VarName value="anyValue" />
              <Sign value="+" />
              <Number value="1" />
            </BracketExpression>
          </UseObject>
        </ConsoleLog>
        <Comment value="7" />
      </FormatCode>

      {/*  */}

      <FormatTitleH3>
        Get random value from 0 to 1 starting from any value
      </FormatTitleH3>
      <FormatP>
        Now, we want to get random value from <FormatMark>0</FormatMark> to{" "}
        <FormatMark>1</FormatMark> starting from{" "}
        <FormatMark>any value</FormatMark>.
      </FormatP>
      <FormatP>
        All we have to do is just to add <FormatMark>any value</FormatMark> to
        our random value.
      </FormatP>
      <FormatCode id="">
        <DeclareRandom />
        <Comment value="random value from 0 to 1" />

        <Br />
        <ConstVariable name="anyValue">
          <Number value="5" />
        </ConstVariable>
        <Br />
        <ConsoleLog>
          <UseObject name="Math" method="floor">
            <VarName value="randomValue" />
            <Sign value="+" />
            <VarName value="anyValue" />
          </UseObject>
        </ConsoleLog>
        <Comment value="5.256558353604628" />

        <Br />
      </FormatCode>

      {/*  */}

      <FormatTitleH3>
        Get random value from any value to any value
      </FormatTitleH3>
      <FormatP>
        Now we have knowledge how get random value from{" "}
        <FormatMark>0</FormatMark> to <FormatMark>any value</FormatMark> and get
        random value from <FormatMark>0</FormatMark> to{" "}
        <FormatMark>1</FormatMark> starting from{" "}
        <FormatMark>any value</FormatMark>.
      </FormatP>
      <FormatP>Let`s try to combine theme.</FormatP>
      <FormatCode id="">
        <DeclareRandom />
        <Comment value="random value from 0 to 1" />

        <Br />
        <ConstVariable name="minValue">
          <Number value="2" />
        </ConstVariable>
        <Br />

        <ConstVariable name="maxValue">
          <Number value="5" />
        </ConstVariable>

        <Br />

        <ConstVariable name="minRandomValue">
          <VarName value="randomValue" />
          <Sign value="*" />
          <BracketExpression brackets="()">
            <VarName value="minValue" />
            <Sign value="+" />
            <Number value="1" />
          </BracketExpression>
        </ConstVariable>
        <Comment value="random value between 0 and 2" />
        <Br />

        <ConstVariable name="randomValueBetweenMinAndMax">
          <UseObject name="Math" method="floor">
            <VarName value="minRandomValue" />
            <Sign value="+" />
            <VarName value="maxValue" />
          </UseObject>
        </ConstVariable>
        <Comment value="0 + 5 = 5, 2 + 5 = 7!!!" />
        <Br />
        <Br />
        <Comment value="console.log(Math.floor(randomValue * (minValue + 1)) + maxValue);" />
        <Br />
        <Br />

        <ConsoleLog>
          <VarName value="randomValueBetweenMinAndMax" />
        </ConsoleLog>
        <Comment value="5, 6, 7" />
      </FormatCode>
      <FormatP>
        Unfortunately we encountered a broblem. We get random value between{" "}
        <FormatMark>5</FormatMark>
        and <FormatMark>7</FormatMark>. But not what we expected to see from{" "}
        <FormatMark>2</FormatMark> to <FormatMark>5</FormatMark>. Why is it
        happening so?
      </FormatP>
      <FormatP>Let`s see what is actually happening in our code.</FormatP>
      <FormatP>
        From <FormatMark>minRandomValue</FormatMark> we get random value between{" "}
        <FormatMark>0</FormatMark> and <FormatMark>2</FormatMark> and then we
        add it to <FormatMark>maxValue</FormatMark>{" "}
        <FormatMark>(0, 2) + 5 = (5, 7)</FormatMark>.
      </FormatP>
      <FormatListUl>
        <li>0 + 5 = 5 - min output value</li>
        <li>2 + 5 = 7 - max output value</li>
      </FormatListUl>
      <FormatP>
        Now we undestand why we weren`t getting random value between{" "}
        <FormatMark>2</FormatMark> and <FormatMark>5</FormatMark>.
      </FormatP>
      <FormatP>
        So, we need to somehow get lowwer{" "}
        <FormatMark>minRandomValue</FormatMark>
      </FormatP>
      <FormatP>
        Let`s get random value between range values of{" "}
        <FormatMark>minValue</FormatMark> and <FormatMark>maxValue</FormatMark>{" "}
        <FormatMark>5 - 2 = 3</FormatMark>.
      </FormatP>
      <FormatCode id="">
        <DeclareRandom />
        <Comment value="random value from 0 to 1" />

        <Br />
        <ConstVariable name="minValue">
          <Number value="2" />
        </ConstVariable>
        <Br />

        <ConstVariable name="maxValue">
          <Number value="5" />
        </ConstVariable>

        <Br />

        <ConstVariable name="rangeBetweenMinAndMax">
          <VarName value="maxValue" />
          <Sign value="-" />
          <VarName value="minValue" />
        </ConstVariable>
        <Br />

        <ConstVariable name="randomValueBetweenDiffernce">
          <UseObject name="Math" method="floor">
            <UseObject name="Math" method="random" />
            <Sign value="*" />
            <BracketExpression brackets="()">
              <VarName value="rangeBetweenMinAndMax" />
              <Sign value="+" />
              <Number value="1" />
            </BracketExpression>
          </UseObject>
        </ConstVariable>
        <Br />
        <Br />

        <ConsoleLog>
          <VarName value="randomValueBetweenDiffernce" />
        </ConsoleLog>
        <Comment value="0, 1, 2, 3" />
      </FormatCode>
      <FormatP>
        Let`s see what we will get if add <FormatMark>minValue</FormatMark> to
        the random value of the range{" "}
        <FormatMark>(0, 3) + 2 = (2, 5)</FormatMark>.
      </FormatP>
      <FormatListUl>
        <li>0 + 2 = 2 - min output value</li>
        <li>3 + 2 = 5 - max output value</li>
      </FormatListUl>
      <FormatP>
        Congratulations, we finnaly get this range that we need for our random
        value between. Final result is below.
      </FormatP>
      <FormatCode id="">
        <DeclareRandom />
        <Comment value="random value from 0 to 1" />

        <Br />
        <ConstVariable name="minValue">
          <Number value="2" />
        </ConstVariable>
        <Br />

        <ConstVariable name="maxValue">
          <Number value="5" />
        </ConstVariable>

        <Br />

        <ConstVariable name="rangeBetweenMinAndMax">
          <VarName value="maxValue" />
          <Sign value="-" />
          <VarName value="minValue" />
        </ConstVariable>
        <Br />

        <ConstVariable name="randomValueBetweenMinAndMax">
          <UseObject name="Math" method="floor">
            <UseObject name="Math" method="random" />
            <Sign value="*" />
            <BracketExpression brackets="()">
              <VarName value="rangeBetweenMinAndMax" />
              <Sign value="+" />
              <Number value="1" />
            </BracketExpression>
            <Sign value="+" />
            <VarName value="minValue" />
          </UseObject>
        </ConstVariable>

        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="randomValueBetweenMinAndMax" />
        </ConsoleLog>
        <Comment value="2, 3, 4, 5" />
      </FormatCode>
      <FormatP>
        Let`s replace this code into function to reuse it in the future.
      </FormatP>
      <FormatCode id="">
        <FunctionDeclare name="randInt" parameters={["minValue", "maxValue"]}>
          {" "}
          <DeclareRandom />
          <Br />{" "}
          <ConstVariable name="rangeBetweenMinAndMax">
            <VarName value="maxValue" />
            <Sign value="-" />
            <VarName value="minValue" />
          </ConstVariable>
          <Br />{" "}
          <ConstVariable name="randomValueBetweenMinAndMax">
            <UseObject name="Math" method="floor">
              <UseObject name="Math" method="random" />
              <Sign value="*" />
              <BracketExpression brackets="()">
                <VarName value="rangeBetweenMinAndMax" />
                <Sign value="+" />
                <Number value="1" />
              </BracketExpression>
              <Sign value="+" />
              <VarName value="minValue" />
            </UseObject>
          </ConstVariable>
          <Br />
          <Br />{" "}
          <Return>
            <VarName value="randomValueBetweenMinAndMax" />
          </Return>
        </FunctionDeclare>
        <Br />
        <Br />
        <ConstVariable name="minValue">
          <Number value="50" />
        </ConstVariable>
        <Br />
        <ConstVariable name="maxValue">
          <Number value="100" />
        </ConstVariable>
        <Br />
        <Br />
        <ConsoleLog>
          <CallFunction name="randInt" args={["minValue", "maxValue"]} />
        </ConsoleLog>
        <Comment value="81" />
      </FormatCode>
      <FormatP>
        Now we understand what is going on inside of{" "}
        <FormatMark>randInt()</FormatMark>. Let`s make it smaller.
      </FormatP>
      <FormatCode id="">
        <RandIntFunction />
      </FormatCode>
    </>
  );
}
