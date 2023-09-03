import globalCss from "../../css/global.module.css";
import formatText from "../../css/format-text.module.css";
import { JSX } from "react";
import { Link } from "react-router-dom";

type ChildrenType =
  | Array<string>
  | string
  | Array<JSX.Element>
  | JSX.Element
  | Array<string | JSX.Element>;

type FormatTextType = {
  children: ChildrenType;
  id?: string;
};

type FormatLinkType = {
  children: ChildrenType;
  href: string;
  isHere?: boolean;
};

type FormatListType = {
  children: Array<JSX.Element> | JSX.Element;
};

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

export function FormatTitleH3({ children, id }: FormatTextType) {
  return (
    <h3 className={`${globalCss["global-title"]} ${formatText["titleh3"]}`} id={id}>
      {children}
    </h3>
  );
}

export function FormatMark({ children }: FormatTextType) {
  return <mark className={`${formatText["mark"]}`}>{children}</mark>;
}

export function FormatLink({ children, href, isHere }: FormatLinkType) {
  return (
    <>
      {
        isHere ? <Link
        className={`switch-theme ${formatText["dark-theme"]} ${globalCss["global-link"]} ${formatText["link"]}`}
        data-dark-theme={formatText["dark-theme"]}
        data-light-theme={formatText["light-theme"]}
        to={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
        </Link>
          :
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
      }
    </>
  );
}

export function FormatListUl({ children }: FormatListType) {
  return <ul className={formatText["list"]}>{children}</ul>;
}
