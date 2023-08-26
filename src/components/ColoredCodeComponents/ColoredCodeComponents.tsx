import { JSX } from "react";

import formatText from "../../css/format-text.module.css";

// HTML

type Tag = {
  tagName: string;
};

export function Docytype() {
  return (
    <>
      <span className={formatText["tag"]}>{"<"}</span>
      <span className={formatText["tagName"]}>!DOCYTYPE</span>{" "}
      <span className={formatText["attrName"]}>html</span>
      <span className={formatText["tag"]}>{">"}</span>
    </>
  );
}

export function OpenTag({ tagName }: Tag) {
  return (
    <>
      <span className={formatText["tag"]}>{"<"}</span>
      <span className={formatText["tagName"]}>{tagName}</span>
      <span className={formatText["tag"]}>{">"}</span>
    </>
  );
}

export function CloseTag({ tagName }: Tag) {
  return (
    <>
      <span className={formatText["tag"]}>{"<"}</span>
      <span className={formatText["tag"]}>{"/"}</span>
      <span className={formatText["tagName"]}>{tagName}</span>
      <span className={formatText["tag"]}>{">"}</span>
    </>
  );
}

export function OneTag({ tagName }: Tag) {
  return (
    <>
      <span className={formatText["tag"]}>{"<"}</span>
      <span className={formatText["tagName"]}>{tagName}</span>
      <span className={formatText["tag"]}>{"/"}</span>
      <span className={formatText["tag"]}>{">"}</span>
    </>
  );
}

export function OpenTagWithAttr({
  tagName,
  attrs,
}: {
  tagName: string;
  attrs: Array<{ name: string; value: string }>;
}) {
  return (
    <>
      <span className={formatText["tag"]}>{"<"}</span>
      <span className={formatText["tagName"]}>{tagName}</span>{" "}
      {attrs.map(({ name, value }, index) => (
        <span key={name}>
          <span className={formatText["attrName"]}>{name}</span>
          {value.length > 0 ? (
            <span key={name}>
              <span className={formatText["equal"]}>=</span>
              <span className={formatText["quote"]}>"</span>
              <span className={formatText["attrValue"]}>{value}</span>
              <span className={formatText["quote"]}>"</span>
            </span>
          ) : null}
          {index + 1 !== attrs.length ? " " : null}
        </span>
      ))}
      <span className={formatText["tag"]}>{">"}</span>
    </>
  );
}

export function CloseTagWithAttr({
  tagName,
  attrs,
}: {
  tagName: string;
  attrs: Array<{ name: string; value: string }>;
}) {
  return (
    <>
      <span className={formatText["tag"]}>{"<"}</span>
      <span className={formatText["tagName"]}>{tagName}</span>{" "}
      {attrs.map(({ name, value }, index) => (
        <span key={name}>
          <span className={formatText["attrName"]}>{name}</span>
          {value.length > 0 ? (
            <span key={name}>
              <span className={formatText["equal"]}>=</span>
              <span className={formatText["quote"]}>"</span>
              <span className={formatText["attrValue"]}>{value}</span>
              <span className={formatText["quote"]}>"</span>
            </span>
          ) : null}
          {index + 1 !== attrs.length ? " " : null}
        </span>
      ))}{" "}
      <span className={formatText["tag"]}>{"/"}</span>
      <span className={formatText["tag"]}>{">"}</span>
    </>
  );
}

export function Br() {
  return <span className="br">{`\n`}</span>;
}

// JAVASCRIPT

export function VarDec({ value }: { value: string }) {
  return <span className={formatText["varDec"]}>{value} </span>;
}

export function VarName({ value }: { value: string }) {
  return <span className={formatText["varName"]}>{value}</span>;
}

export function Object({ value }: { value: string }) {
  return <span className={formatText["object"]}>{value}</span>;
}

export function Property({ value }: { value: string }) {
  return <span className={formatText["property"]}>{value}</span>;
}

export function Method({ value }: { value: string }) {
  return <span className={formatText["method"]}>{value}</span>;
}

export function Equal() {
  return <span className={formatText["equal"]}> = </span>;
}

export function Dot() {
  return <span className={formatText["dot"]}>.</span>;
}

export function Coma() {
  return <span className={formatText["coma"]}>, </span>;
}

export function Bracket({ value }: { value: string }) {
  return <span className={formatText["bracket"]}>{value}</span>;
}

export function Quote({ value }: { value: string }) {
  return <span className={formatText["quote"]}>{value}</span>;
}

export function Text({ value }: { value: string }) {
  return <span className={formatText["text"]}>{value}</span>;
}

export function Semicoln() {
  return <span className={formatText["semicoln"]}>; </span>;
}

export function Comment({ value }: { value: string }) {
  return (
    <span className={formatText["comment"]}>
      {"// "}
      {value}
    </span>
  );
}

export function ArrowFunction() {
  return <span className={formatText["equal"]}> {"=>"} </span>;
}

export function Sign({ value }: { value: string }) {
  return <span className={formatText["sign"]}> {value} </span>;
}

export function Number({ value }: { value: string }) {
  return <span className={formatText["number"]}>{value}</span>;
}

export function Literal({ value }: { value: string }) {
  return <span className={formatText["literal"]}>{value}{" "}</span>;
}

export function FunctionName({ value }: { value: string }) {
  return <span className={formatText["functionName"]}>{value}</span>;
}
