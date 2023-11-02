import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
  FormatListUl,
  FormatLink,
} from "code-components/format-components/format-components";

import { CodeBox } from "components/CodeBox/CodeBox";

import InfoBox from "components/InfoBox/InfoBox";
import {
  CallFunction,
  ConsoleLog,
  ConstVariable,
  UseObject,
} from "code-components/js-code/js-code";
import { Br } from "code-components/colored-code-components/html/html";
import {
  GetDistFunction,
  RandIntFunction,
  RandNumFunction,
} from "code-components/js-code/canvas-code/canvas-code";
import {
  Comment,
  Number,
  VarName,
} from "code-components/colored-code-components/js/js";
import {
  ObjectA,
  ObjectB,
} from "../../../math-physics/DistanceBetweenObjects/Code/Code";
import { nanoid } from "nanoid";

export default function MathVariables() {
  return (
    <>
      <FormatTitleH2>Math variables</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox filename="main.js">
        <ConstVariable name="pi">
          <UseObject name="Math" propertys={["PI"]} />
        </ConstVariable>
        <Br />
        <ConstVariable name="floor">
          <UseObject name="Math" propertys={["floor"]} />
        </ConstVariable>
        <Br />
        <ConstVariable name="random">
          <UseObject name="Math" propertys={["random"]} />
        </ConstVariable>
        <Br />
        <ConstVariable name="sqrt">
          <UseObject name="Math" propertys={["sqrt"]} />
        </ConstVariable>
        <Br />
        <ConstVariable name="pow">
          <UseObject name="Math" propertys={["pow"]} />
        </ConstVariable>
        <Br />
        <Br />
        <RandIntFunction isMath={false} />
        <Br />
        <RandNumFunction isMath={false} />
        <Br />
        <GetDistFunction isMath={false} />
      </CodeBox>
      <FormatP>
        To make our code more flexible and easier to use, let's assign some{" "}
        <FormatMark>Math</FormatMark>
        methods to variables. This way, we won't have to keep referring to the
        <FormatMark>Math</FormatMark> class every time we need these methods.
      </FormatP>
      <CodeBox filename="main.js">
        <ConstVariable name="pi">
          <UseObject name="Math" propertys={["PI"]} />
        </ConstVariable>
        <Br />
        <ConstVariable name="floor">
          <UseObject name="Math" propertys={["floor"]} />
        </ConstVariable>
        <Br />
        <ConstVariable name="random">
          <UseObject name="Math" propertys={["random"]} />
        </ConstVariable>
        <Br />
        <ConstVariable name="sqrt">
          <UseObject name="Math" propertys={["sqrt"]} />
        </ConstVariable>
        <Br />
        <ConstVariable name="pow">
          <UseObject name="Math" propertys={["pow"]} />
        </ConstVariable>
        <Br />
        <Br />
        <ConsoleLog>
          <VarName value="pi" />
        </ConsoleLog>
        <Comment value="3.14" />
        <Br />
        <ConsoleLog>
          <CallFunction name="floor" args={[<Number key={""} value="5.8" />]} />
        </ConsoleLog>
        <Comment value="5" />
        <Br />
        <ConsoleLog>
          <CallFunction name="random" />
        </ConsoleLog>
        <Comment value="0.1052091339071819" />
        <Br />
        <ConsoleLog>
          <CallFunction
            name="pow"
            args={[
              <Number key={""} value="2" />,
              <Number key={""} value="2" />,
            ]}
          />
        </ConsoleLog>
        <Comment value="4" />
        <Br />
        <ConsoleLog>
          <CallFunction name="sqrt" args={[<Number key={""} value="36" />]} />
        </ConsoleLog>
        <Comment value="6" />
      </CodeBox>
      <FormatTitleH3>Our own functions</FormatTitleH3>
      <FormatP>We also will need some own functions.</FormatP>
      <InfoBox type="warn" dir="row">
        <FormatP>
          The code below is part of a code above, so we're omitting the Math
          class here. When you copy this code, remember to include the code
          above as well.
        </FormatP>
      </InfoBox>
      <CodeBox filename="main.js">
        <RandIntFunction isMath={false} />
        <Br />
        <RandNumFunction isMath={false} />
        <Br />
        <GetDistFunction isMath={false} />
        <Br />
        <Br />
        <ConsoleLog>
          <CallFunction name="randInt" args={["1", "10"]} />
        </ConsoleLog>
        <Comment value="7" />
        <Br />
        <ConsoleLog>
          <CallFunction
            name="randNum"
            args={[
              <Number value="1" key={nanoid()} />,
              <Number value="2" key={nanoid()} />,
              <Number value="3" key={nanoid()} />,
              <Number value="4" key={nanoid()} />,
              <Number value="5" key={nanoid()} />,
            ]}
          />
        </ConsoleLog>
        <Comment value="4" />
        <Br />
        <Br />
        <ObjectA />
        <Br />
        <ObjectB />
        <Br />
        <Br />
        <ConsoleLog>
          <CallFunction name="getDist" args={["A", "B"]} />
        </ConsoleLog>
        <Comment value="10" />
      </CodeBox>
      <InfoBox type="extra" dir="row">
        <FormatP>
          If you're unsure how these functions work, you can check these
          articles:
        </FormatP>
        <FormatListUl>
          <li>
            <FormatLink href="/book/random-value-between-min-max" isHere={true}>
              randInt()
            </FormatLink>
          </li>
          <li>
            <FormatLink href="/book/random-value-array" isHere={true}>
              randNum()
            </FormatLink>
          </li>
          <li>
            <FormatLink href="/book/distance-between-objects" isHere={true}>
              getDist()
            </FormatLink>
          </li>
        </FormatListUl>
      </InfoBox>
    </>
  );
}
