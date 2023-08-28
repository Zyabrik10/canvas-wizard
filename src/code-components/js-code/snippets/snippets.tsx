import {
  UseObject,
  ConstVariable,
} from "../../js-code/js-code";

export function DeclareRandom() {
  return (
    <>
      <ConstVariable name="randomValue">
        <UseObject name="Math" method="random" />
      </ConstVariable>
    </>
  );
}
