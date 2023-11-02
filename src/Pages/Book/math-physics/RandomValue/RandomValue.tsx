import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
  FormatListUl,
} from "code-components/format-components/format-components";

import { CodeBox } from "components/index";

import { RandIntFunction } from "code-components/js-code/canvas-code/canvas-code";

import InfoBox from "components/InfoBox/InfoBox";
import {
  CodeBox1,
  CodeBox2,
  CodeBox3,
  CodeBox4,
  CodeBox5,
  CodeBox6,
  CodeBox7,
} from "./Code/CodeBox/codeBox";

export default function RandomValue() {
  return (
    <>
      <FormatTitleH2>Random value between min and max value</FormatTitleH2>

      <FormatTitleH3>Function ready to be used</FormatTitleH3>
      <CodeBox>
        <RandIntFunction />
      </CodeBox>

      <FormatTitleH3 id="mathrandom">Inroducing Math.random()</FormatTitleH3>

      <FormatP>
        The <FormatMark>Math.random()</FormatMark> method in
        <FormatMark>Math</FormatMark> class returns random value between{" "}
        <FormatMark>0</FormatMark> and <FormatMark>1</FormatMark>.
      </FormatP>

      <InfoBox type="extra" dir="row">
        <FormatP>
          But it doesn't include <FormatMark>1</FormatMark>. So actualy it
          returns value from <FormatMark>0</FormatMark> to{" "}
          <FormatMark>0.999...</FormatMark>
        </FormatP>
      </InfoBox>

      <CodeBox>
        <CodeBox1 />
      </CodeBox>

      <FormatTitleH3>
        Getting a Random Value within a Range starting from 0
      </FormatTitleH3>

      <FormatP>
        To get a random value within a specific range (for example, from 0 to
        10), we multiply the random value by (the range's upper limit + 1) and
        then round it down using
        <FormatMark>Math.floor() </FormatMark> because of a big amout of
        decimals.
      </FormatP>

      <CodeBox>
        <CodeBox2 />
      </CodeBox>

      <FormatTitleH3>Getting a Random Value with an Offset</FormatTitleH3>
      <FormatP>
        Now we want to start from a certain value (e.g., from 10 to 11), you can
        add that value to the random result. Here's how:
      </FormatP>

      <CodeBox>
        <CodeBox3 />
      </CodeBox>

      <FormatTitleH3>
        Getting a Random Value within a Specified Range
      </FormatTitleH3>

      <FormatP>
        We have knowledge how to get a random value within a range starting from
        0 and with offset.
      </FormatP>

      <FormatP>Let's try to combine theme:</FormatP>

      <CodeBox>
        <CodeBox4 />
      </CodeBox>

      <FormatP>
        Unfortunately we encountered a problem. We get random value between{" "}
        <FormatMark>5</FormatMark>
        and <FormatMark>7</FormatMark>. But not what we expected to see from{" "}
        <FormatMark>2</FormatMark> to <FormatMark>5</FormatMark>. Why is it
        happening so?
      </FormatP>

      <FormatP>Let's see what is actually happening in our code.</FormatP>

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
        That is why we weren't getting random value between{" "}
        <FormatMark>2</FormatMark> and <FormatMark>5</FormatMark>.
      </FormatP>

      <FormatP>
        So, we need to somehow get lowwer{" "}
        <FormatMark>min output value</FormatMark>
      </FormatP>
      
      <FormatP>
        Let's get random value between range values of{" "}
        <FormatMark>minValue</FormatMark> and <FormatMark>maxValue</FormatMark>{" "}
        <FormatMark>5 - 2 = 3</FormatMark>.
      </FormatP>

      <CodeBox>
       <CodeBox5 />
      </CodeBox>

      <FormatP>
        Let's see what we will get if we add <FormatMark>minValue</FormatMark>{" "}
        to the random value of the range{" "}
        <FormatMark>(0, 3) + 2 = (2, 5)</FormatMark>.
      </FormatP>

      <FormatListUl>
        <li>0 + 2 = 2 - min output value</li>
        <li>3 + 2 = 5 - max output value</li>
      </FormatListUl>
      
      <FormatP>
        Congratulations, we finnaly get this range that we need. Final result is
        below:
      </FormatP>

      <CodeBox>
          <CodeBox6 />
      </CodeBox>

      <FormatTitleH3>Creating a Reusable Function</FormatTitleH3>

      <FormatP>
        Let's wrapp this code in function to reuse it in the future:
      </FormatP>

      <CodeBox>
        <CodeBox7 />
      </CodeBox>

      <FormatTitleH3>Simplified Function</FormatTitleH3>
      <FormatP>
        We understand what is going on inside of{" "}
        <FormatMark>randInt()</FormatMark>. Let's make it smaller.
      </FormatP>

      <CodeBox>
        <RandIntFunction />
      </CodeBox>
    </>
  );
}
