import {
  Docytype,
  Br,
  OpenTagWithAttr,
  CloseTag,
} from "../colored-code-components/html/html";
import { Body, Canvas, Head, Html, Meta, Title } from "./snippets/snippets";

export function InitHTML() {
  return (
    <>
      <Docytype />
      <Html attrs={[{ name: "lang", value: "en" }]}>
        <Br />
        <Head>
          <Br /> <Meta attrs={[{ name: "charset", value: "utf-8" }]} />{" "}
          <Meta
            attrs={[
              { name: "name", value: "viewport" },
              { name: "content", value: "width=device-width" },
              { name: "initial-scale", value: "1" },
            ]}
          />{" "}
          <Title title="Canvas Project" />
        </Head>
        <Body>
          <Br /> <Canvas />{" "}
          <OpenTagWithAttr
            tagName="script"
            attrs={[{ name: "src", value: "./js/main.js"}, {name:"type", value:"module"}]}
          />
          <CloseTag tagName="script" />
        </Body>
      </Html>
    </>
  );
}
