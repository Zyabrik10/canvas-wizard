import { JSX } from "react";

import css from "./styles/InfoBox.module.css";
import globalCss from "../../css/global.module.css";

type InfoBoxType = {
  children:
    | string
    | Array<string>
    | JSX.Element
    | Array<JSX.Element>
    | Array<string | JSX.Element>;
  type: "column" | "row";
};

export default function InfoBox({ children, type }: InfoBoxType) {
  return (
    <div
      className={`${css["info-box"]} ${css["dark-theme"]} switch-theme ${type === "row" ? css["row"] : css["column"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <p className={`${globalCss["global-p"]} ${css["info-box-title"]}`}>
        <span className={css["info-box-marker"]}>!</span>
      </p>
      <div className={css["info-box-content"]}>{children}</div>
    </div>
  );
}
