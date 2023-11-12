import htmlCodeColor from "css/code-color/html/html-code-color.module.css";

type Tag = {
  tagName: string;
};

export function Docytype() {
  return (
    <>
      <span className={htmlCodeColor["tag"]}>{"<"}</span>
      <span className={htmlCodeColor["tagName"]}>!DOCYTYPE</span>{" "}
      <span className={htmlCodeColor["attrName"]}>html</span>
      <span className={htmlCodeColor["tag"]}>{">"}</span>
      <Br />
    </>
  );
}

export function OpenTag({ tagName }: Tag) {
  return (
    <>
      <span className={htmlCodeColor["tag"]}>{"<"}</span>
      <span className={htmlCodeColor["tagName"]}>{tagName}</span>
      <span className={htmlCodeColor["tag"]}>{">"}</span>
    </>
  );
}

export function CloseTag({ tagName }: Tag) {
  return (
    <>
      <span className={htmlCodeColor["tag"]}>{"<"}</span>
      <span className={htmlCodeColor["tag"]}>{"/"}</span>
      <span className={htmlCodeColor["tagName"]}>{tagName}</span>
      <span className={htmlCodeColor["tag"]}>{">"}</span>
      <Br />
    </>
  );
}

export function OneTag({ tagName }: Tag) {
  return (
    <>
      <span className={htmlCodeColor["tag"]}>{"<"}</span>
      <span className={htmlCodeColor["tagName"]}>{tagName}</span>
      <span className={htmlCodeColor["tag"]}>{"/"}</span>
      <span className={htmlCodeColor["tag"]}>{">"}</span>
      <Br />
    </>
  );
}

type AttrType = {
  name: string;
  value: string;
};

type DoubleTagType = {
  tagName: string;
  attrs?: Array<AttrType>;
  children?: any;
};

export function DoubleTag({ tagName, attrs, children }: DoubleTagType) {
  return (
    <>
      <OpenTagWithAttr tagName={tagName} attrs={attrs} />
      {children}
      <CloseTag tagName={tagName} />
    </>
  );
}

export function OpenTagWithAttr({
  tagName,
  attrs,
}: {
  tagName: string;
  attrs?: Array<AttrType>;
}) {
  return (
    <>
      <span className={htmlCodeColor["tag"]}>{"<"}</span>
      <span className={htmlCodeColor["tagName"]}>{tagName}</span>
      {attrs !== undefined && attrs.length > 0 ? (
        <>
          {" "}
          {attrs.map(({ name, value }: AttrType, index) => (
            <span key={name}>
              <span className={htmlCodeColor["attrName"]}>{name}</span>
              {value.length > 0 ? (
                <span key={name}>
                  <span className={htmlCodeColor["equal"]}>=</span>
                  <span className={htmlCodeColor["quote"]}>"</span>
                  <span className={htmlCodeColor["attrValue"]}>{value}</span>
                  <span className={htmlCodeColor["quote"]}>"</span>
                </span>
              ) : null}
              {index + 1 !== attrs.length ? " " : null}
            </span>
          ))}
        </>
      ) : null}
      <span className={htmlCodeColor["tag"]}>{">"}</span>
    </>
  );
}

export function OneTagWithAttr({
  tagName,
  attrs,
}: {
  tagName: string;
  attrs: Array<{ name: string; value: string }>;
}) {
  return (
    <>
      <span className={htmlCodeColor["tag"]}>{"<"}</span>
      <span className={htmlCodeColor["tagName"]}>{tagName}</span>{" "}
      {attrs.map(({ name, value }, index) => (
        <span key={name}>
          <span className={htmlCodeColor["attrName"]}>{name}</span>
          {value.length > 0 ? (
            <span key={name}>
              <span className={htmlCodeColor["equal"]}>=</span>
              <span className={htmlCodeColor["quote"]}>"</span>
              <span className={htmlCodeColor["attrValue"]}>{value}</span>
              <span className={htmlCodeColor["quote"]}>"</span>
            </span>
          ) : null}
          {index + 1 !== attrs.length ? " " : null}
        </span>
      ))}{" "}
      <span className={htmlCodeColor["tag"]}>{"/"}</span>
      <span className={htmlCodeColor["tag"]}>{">"}</span>
      <Br />
    </>
  );
}

export function Br() {
  return <span className="br">{`\n`}</span>;
}
