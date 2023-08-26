import globalCss from "../../css/global.module.css";
import formatText from "../../css/format-text.module.css";
import { JSX, useRef } from "react";

type ChildrenType =
  | Array<string>
  | string
  | Array<JSX.Element>
  | JSX.Element
  | Array<string | JSX.Element>;

type FormatTextType = {
  children: ChildrenType;
};

type FormatLinkType = {
  children: ChildrenType;
  href: string;
};

type FormatCodeType = {
  children?: ChildrenType;
  id: string;
};

type FormatListType = {
    children: Array<JSX.Element> | JSX.Element
}

export function FormatP({ children }: FormatTextType) {
  return (
    <p className={`${globalCss["global-p"]} ${formatText["p"]}`}>{children}</p>
  );
}

export function FormatTitleH2({ children }: FormatTextType) {
  return (
    <h2 className={`${globalCss["global-title"]} ${formatText["titleh2"]}`}>
      {children}
    </h2>
  );
}

export function FormatTitleH3({ children }: FormatTextType) {
  return (
    <h3 className={`${globalCss["global-title"]} ${formatText["titleh3"]}`}>
      {children}
    </h3>
  );
}

export function FormatMark({ children }: FormatTextType) {
  return <span className={`${formatText["mark"]}`}>{children}</span>;
}

export function FormatLink({ children, href }: FormatLinkType) {
  return (
    <a
      className={`switch-theme ${formatText["dark-theme"]} ${globalCss["global-link"]} ${formatText["link"]}`}
      data-dark-theme={formatText["dark-theme"]}
      data-light-theme={formatText["light-theme"]}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export function FormatCode({ id, children }: FormatCodeType) {

  const buttonRef = useRef<HTMLButtonElement>(null);

  function buttonHandler() {
    const parentElement = buttonRef.current?.parentElement!;
    const copyText = parentElement.querySelector(".code")!; 

    navigator.clipboard.writeText(copyText.textContent!);
  }

  return (
    <div id={id} className={formatText["code-box"]}>
      <button
        ref={buttonRef}
        className={`${globalCss["global-button"]} ${formatText["copy-button"]}`}
        type="button"
        onClick={buttonHandler}
      >
        copy
      </button>
      <pre className={globalCss["global-p"]}>
        <code className="code">{children ? children : null}</code>
      </pre>
    </div>
  );
}

export function FormatListUl({ children }: FormatListType) {
  return (
      <ul className={formatText['list']}>{children}</ul>
  );
}