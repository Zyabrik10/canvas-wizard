import { JSX } from "react";

import css from "./styles/InfoBox.module.css";
// import globalCss from "../../css/global.module.css";

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
      className={`${css["info-box"]} ${css["dark-theme"]} switch-theme ${direction} ${infoTypeClass}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <div>
        <span className={css["info-box-marker"]}>{signs[type]}</span>
      </div>
      <div className={css["info-box-content"]}>{children}</div>
    </div>
  );
}
