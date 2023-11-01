import {
  DoubleTag,
  OneTagWithAttr,
} from "../../colored-code-components/html/html";
import { JSX } from "react";

type TitleType = {
  title: string;
};

type AttrType = {
  name: string;
  value: string;
};

type TagType = {
  children?:
    | string
    | Array<string>
    | JSX.Element
    | Array<JSX.Element>
    | Array<JSX.Element | string>
    | null;
  attrs?: Array<AttrType>;
};

export function Title({ title }: TitleType) {
  return (
    <>
      <DoubleTag tagName="title">{title}</DoubleTag>
    </>
  );
}

export function Canvas() {
  return (
    <>
      <DoubleTag tagName="canvas" />
    </>
  );
}

export function Body({ children, attrs }: TagType) {
  return (
    <>
      <DoubleTag tagName="body" attrs={attrs}>
        {children}
      </DoubleTag>
    </>
  );
}

export function Html({ children, attrs }: TagType) {
  return (
    <>
      <DoubleTag tagName="html" attrs={attrs}>
        {children}
      </DoubleTag>
    </>
  );
}

export function Head({ children, attrs }: TagType) {
  return (
    <>
      <DoubleTag tagName="head" attrs={attrs}>
        {children}
      </DoubleTag>
    </>
  );
}

export function Meta({ attrs }: { attrs: Array<AttrType> }) {
  return (
    <>
      <OneTagWithAttr tagName="meta" attrs={attrs} />
    </>
  );
}
