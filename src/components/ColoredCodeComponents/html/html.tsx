import formatText from "../../../css/format-text.module.css";

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