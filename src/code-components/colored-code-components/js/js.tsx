import jsCodeColor from "../../../css//code-color/js/js-code-color.module.css";

export function VarDec({ value }: { value: string }) {
  return <span className={jsCodeColor["varDec"]}>{value} </span>;
}

export function VarName({ value }: { value: string | JSX.Element}) {
  return <span className={jsCodeColor["varName"]}>{value}</span>;
}

export function Object({ value }: { value: string | null }) {
  return <span className={jsCodeColor["object"]}>{value}</span>;
}

export function Property({ value }: { value: string }) {
  return <span className={jsCodeColor["property"]}>{value}</span>;
}

export function Method({ value }: { value: string }) {
  return <span className={jsCodeColor["method"]}>{value}</span>;
}

export function Equal() {
  return <span className={jsCodeColor["equal"]}> = </span>;
}

export function Dot() {
  return <span className={jsCodeColor["dot"]}>.</span>;
}

export function Coma() {
  return <span className={jsCodeColor["coma"]}>, </span>;
}

export function Bracket({ value }: { value: string }) {
  return <span className={jsCodeColor["bracket"]}>{value}</span>;
}

export function Quote({ value }: { value: string }) {
  return <span className={jsCodeColor["quote"]}>{value}</span>;
}

export function Text({ value }: { value: string }) {
  return <span className={jsCodeColor["string"]}>{value}</span>;
}

export function Semicoln() {
  return <span className={jsCodeColor["semicoln"]}>; </span>
}

export function Comment({ value }: { value: string }) {
  return (
    <span className={jsCodeColor["comment"]}>
      {"// "}
      {value}
    </span>
  );
}

export function ArrowFunction() {
  return <span className={jsCodeColor["equal"]}> {"=>"} </span>;
}

export function Sign({ value }: { value: string }) {
  return <span className={jsCodeColor["sign"]}> {value} </span>;
}

export function Number({ value }: { value: string }) {
  return <span className={jsCodeColor["number"]}>{value}</span>;
}

export function Literal({ value }: { value: string }) {
  return <span className={jsCodeColor["literal"]}>{value} </span>;
}

export function FunctionName({ value }: { value: string }) {
  return <span className={jsCodeColor["functionName"]}>{value}</span>;
}
export function ClassName({ value }: { value: string }) {
  return <span className={jsCodeColor["className"]}>{value}</span>;
}

export function Colon() {
  return <span className={jsCodeColor["sign"]}>:</span>;
}