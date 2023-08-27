import {
  UseObject,
  ConstVariable,
} from "../../../components/JavaScriptCode/JavaScriptCode";

export function DeclareRandom() {
  return (
    <>
      <ConstVariable name="randomValue">
        <UseObject name="Math" method="random" />
      </ConstVariable>
    </>
  );
}
