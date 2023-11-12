import css from "./EditorOnline.module.css";

type EditorOnlineType = {
  src: string;
  title?: string;
  children: any;
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
