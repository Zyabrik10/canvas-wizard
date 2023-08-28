import css from "./styles/EditorOnline.module.css";
import { JSX } from "react";

type EditorOnlineType = {
  src: string;
  title?: string;
  children:
    | string
    | Array<string>
    | JSX.Element
    | Array<JSX.Element>
    | Array<string | JSX.Element>
    | null;
};

export default function EditorOnline({
  src,
  title,
  children,
}: EditorOnlineType) {
  return (
    <iframe
      height="500"
      className={css["editor-online"]}
      scrolling="no"
      title={title}
      src={src}
      loading="lazy"
    >
      {children}
    </iframe>
  );
}
