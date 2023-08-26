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

import globalCss from "../../../css/global.module.css";

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
        const randInt = (min, max) {"=>"} Math.floor(Math.random() * (max - min
        + 1) + min);
      </FormatCode>
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
        {`const randomValue = Math.random();
console.log(randomValue); // 0.09820142543127064`}
      </FormatCode>

      {/*  */}

      <FormatTitleH3>Get random value from 0 to any value</FormatTitleH3>
      <FormatP>
        In oreder to make value from <FormatMark>0</FormatMark> to{" "}
        <FormatMark>any value</FormatMark> we just need to multiply this{" "}
        <FormatMark>any value + 1</FormatMark> on random value.
      </FormatP>
      {/* make info that we need to add + 1 */}
      <FormatCode id="">
        {`const randomValue = Math.random(); // random value from 0 to 1
const anyValue = 10;
console.log(randomValue * (anyValue + 1)); // 5.9242883533580475`}
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
        {`const randomValue = Math.random(); // random value from 0 to 1
const anyValue = 10;
console.log(Math.floor(randomValue * anyValue)); // 7`}
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
        {`const randomValue = Math.random(); // random value from 0 to 1
const anyValue = 5;
console.log(randomValue + anyValue); // 5.256558353604628`}
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
        {`const randomValue = Math.random(); // random value from 0 to 1
const minValue = 2;
const maxValue = 5;

const minRandomValue = randomValue * (minValue + 1); // random value between 0 an 2
const randomValueBetweenMinAndMax = Math.floor(minRandomValue) + maxValue; // 0 + 5 = 5, 2 + 5 = 7!!!
console.log( Math.floor( randomValue * (minValue + 1)) + maxValue);

console.log(randomValueBetweenMinAndMax); // 5, 6, 7`}
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
        add it to <FormatMark>maxValue</FormatMark> <FormatMark>(0, 2) + 5 = (5, 7)</FormatMark>.
      </FormatP>
      {/* <FormatP>
        If we imagine that we got <FormatMark>0</FormatMark> as{" "}
        <FormatMark>minRandomValue</FormatMark> then add it to{" "}
        <FormatMark>5</FormatMark> as <FormatMark>maxValue</FormatMark> it would
        be <FormatMark>5</FormatMark> as{" "}
        <FormatMark>randomValueBetweenMinAndMax</FormatMark>.
      </FormatP>
      <FormatP>
        Now we do the same with <FormatMark>2</FormatMark> as{" "}
        <FormatMark>minRandomValue</FormatMark> and get{" "}
        <FormatMark>7</FormatMark> as{" "}
        <FormatMark>randomValueBetweenMinAndMax</FormatMark>
      </FormatP> */}
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
        {`const randomValue = Math.random(); // random value from 0 to 1
const minValue = 2;
const maxValue = 5;

const differenceBetweenMinAndMax = maxValue - minValue;
const randomValueBetweenDiffernce = Math.floor(Math.random() * (differenceBetweenMinAndMax + 1));

console.log(randomValueBetweenDiffernce); // 0, 1, 2, 3`}
      </FormatCode>
      <FormatP>
        Let`s see what we will get if add minValue to the random value of the
        range <FormatMark>(0, 3) + 2 = (2, 5)</FormatMark>.
      </FormatP>
      <FormatListUl>
        <li>0 + 2 = 2 - min output value</li>
        <li>3 + 2 = 5 - max output value</li>
      </FormatListUl>
      <FormatP>
        Congratulations, we finnaly get this range that we need for our random
        value between. Final result is below.
      </FormatP>
      <FormatCode id="">{`const randomValue = Math.random(); // random value from 0 to 1
const minValue = 2;
const maxValue = 5;

const rangeBetweenMinAndMax = maxValue - minValue;
const randomValueBetweenMinAndMax = Math.floor(Math.random() * (rangeBetweenMinAndMax + 1) + minValue);

console.log(randomValueBetweenMinAndMax); // 2, 3, 4, 5`}</FormatCode>
      <FormatP>
        Let`s replace this code into function to reuse it in the future.
      </FormatP>
      <FormatCode id="">{`function randInt(minValue, maxvalue){
    const randomValue = Math.random();
    
    const rangeBetweenMinAndMax = maxValue - minValue;
    
    const randomValueBetweenMinAndMax = Math.floor(Math.random() * (rangeBetweenMinAndMax + 1) + minValue);
    
    return randomValueBetweenMinAndMax;
}

const minValue = 50;
const maxValue = 100;

console.log(randInt(minValue, maxValue)); // 81`}</FormatCode>
      <FormatP>
        Now we understand what is going on inside of{" "}
        <FormatMark>randInt()</FormatMark>. Let`s make it smaller.
      </FormatP>
      <FormatCode id="">
        const randInt = (min, max) {"=>"} Math.floor(Math.random() * (max - min
        + 1) + min);
      </FormatCode>
    </>
  );
}
