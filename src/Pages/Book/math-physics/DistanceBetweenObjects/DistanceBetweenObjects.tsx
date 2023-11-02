import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
} from "code-components/format-components/format-components";

import { CodeBox } from "components/index";

import { GetDistFunction } from "code-components/js-code/canvas-code/canvas-code";

import {
  CodeBox1,
  CodeBox2,
  CodeBox3,
  CodeBox4,
  CodeBox5,
  CodeBox6,
} from "./Code/codeBoxes/codeBox";

export default function DistanceBetweenObjects() {
  return (
    <>
      <FormatTitleH2>Distance between objects</FormatTitleH2>

      <FormatTitleH3>Function ready to be used</FormatTitleH3>

      <CodeBox>
        <GetDistFunction />
      </CodeBox>

      <FormatTitleH3>The Pythagorean Theorem</FormatTitleH3>

      <FormatP>
        The Pythagorean Theorem - a math rule written as
        <FormatMark>a² + b² = c²</FormatMark>.
      </FormatP>

      <FormatP>
        We have 2d coordinte system and two points in it. Points have their own
        coordinates <FormatMark>A(x, y) </FormatMark> and{" "}
        <FormatMark>B(x, y)</FormatMark>.
      </FormatP>

      <FormatP>
        Let's say point <FormatMark>A</FormatMark> has such coordinates{" "}
        <FormatMark>(2, 2)</FormatMark> and point <FormatMark>B</FormatMark> has
        such coordinates<FormatMark>(8, 10)</FormatMark>.
      </FormatP>

      <CodeBox>
        <CodeBox1 />
      </CodeBox>

      <FormatP>
        The Pythagorean Theorem helps us with the lengths of the sides of a
        triangle. In our case, when we connect Point A and Point B and draw
        lines from Point A to B along the horizontal (x-axis) and vertical
        (y-axis) directions, it forms a triangle.
      </FormatP>

      <FormatP>
        To find the lengths of these sides, we use the theorem. The longest
        side, called the hypotenuse, represents the distance between the two
        points.
      </FormatP>

      <FormatTitleH3>Lengthes between A and B</FormatTitleH3>

      <FormatP>
        To find the distance between points <FormatMark>A</FormatMark> and{" "}
        <FormatMark>B</FormatMark> on the <FormatMark>x-axis</FormatMark>, we
        subtract their x-coordinates:{" "}
        <FormatMark>A.x - B.x = 2 - 8 = -6</FormatMark>. Similarly, the distance
        between <FormatMark>A</FormatMark> and <FormatMark>B</FormatMark> on the{" "}
        <FormatMark>y-axis</FormatMark> is calculated by subtracting their
        y-coordinates:<FormatMark>(A.y - B.y) = (2 - 10) = -8</FormatMark>.
      </FormatP>

      <CodeBox>
        <CodeBox2 />
      </CodeBox>

      <FormatP>
        Working with negative distances can be tricky, so we can make them
        positive by using the
        <FormatMark>Math.abs()</FormatMark> method to get the absolute
        (positive) value of the number.
      </FormatP>

      <CodeBox>
        <CodeBox3 />
      </CodeBox>
      <FormatTitleH3>Get distance between points</FormatTitleH3>
      <FormatP>
        Now, let's find the distance between two points using the Pythagorean
        Theorem. In our triangle, the lengths of the legs are{" "}
        <FormatMark>a = 6</FormatMark> and <FormatMark>b = 8</FormatMark>.
      </FormatP>
      <FormatP>
        We can use the Pythagorean Theorem, which is expressed as:{" "}
        <FormatMark>a² + b² = c²</FormatMark>
        So, <FormatMark>6² + 8² = 36 + 64 = 100 = c²</FormatMark>
      </FormatP>

      <FormatP>
        To make our calculations easier, let's use the{" "}
        <FormatMark>Math.pow()</FormatMark> method from the{" "}
        <FormatMark>Math</FormatMark> class to raise numbers to the power of 2
        (square them):
      </FormatP>

      <FormatP>
        <FormatMark>
          Math.pow(x, y) = x<sup>y</sup>
        </FormatMark>{" "}
        - returns the value of x to the power of y.
      </FormatP>

      <CodeBox>
        <CodeBox4 />
      </CodeBox>

      <FormatP>
        However, this result (100) is the length squared, so we need to find the
        square root of 100, which is the final distance.
      </FormatP>

      <FormatP>
        To do this, we can use the <FormatMark>Math.sqrt()</FormatMark> method
        from the Math class:
      </FormatP>

      <FormatP>
        <FormatMark>Math.sqrt(x)</FormatMark> - returns the square root of a x.
      </FormatP>

      <CodeBox>
        <CodeBox5 />
      </CodeBox>

      <FormatP>
        The distance between two points <FormatMark>A(2, 2)</FormatMark> and{" "}
        <FormatMark>A(8, 10)</FormatMark> is 10 units.
      </FormatP>

      <FormatTitleH3>Creating a Reusable Function</FormatTitleH3>
      <FormatP>Let's make a function to reuse this in the future.</FormatP>
      <CodeBox>
        <CodeBox6 />
      </CodeBox>
      <FormatTitleH3>Simplified Function</FormatTitleH3>
      <FormatP>
        Now we know how <FormatMark>getDist()</FormatMark> works inside. Let's
        make it smaller.
      </FormatP>
      <CodeBox>
        <GetDistFunction />
      </CodeBox>
    </>
  );
}
