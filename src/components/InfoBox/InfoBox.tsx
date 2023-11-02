import { JSX } from "react";

import css from "./InfoBox.module.css";

import { selectUser } from 'redux/user/user-selector';
import { useSelector } from 'react-redux';

type InfoBoxType = {
  children:
    | string
    | Array<string>
    | JSX.Element
    | Array<JSX.Element>
    | Array<string | JSX.Element>;
  dir: "column" | "row";
  type: "extra" | "warn" | "error";
};

export default function InfoBox({ children, type, dir }: InfoBoxType) {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;
  
  const direction = dir === "row" ? css["row"] : css["column"];
  const signs = {
    extra: "!",
    warn: "⚠",
    error: "⚠",
  }

  let infoTypeClass;
  switch (type) {
    case "extra":
      infoTypeClass = css["extra"];
      break;
    case "warn":
      infoTypeClass = css["warn"];
      break;
    case "error":
      infoTypeClass = css["error"];
      break;
    default: infoTypeClass = css["extra"];
  };

  return (
    <div
      className={`${css["info-box"]} ${css[currentTheme]}  ${direction} ${infoTypeClass}`}
    >
      <div>
        <span className={css["info-box-marker"]}>{signs[type]}</span>
      </div>
      <div className={css["info-box-content"]}>{children}</div>
    </div>
  );
}
