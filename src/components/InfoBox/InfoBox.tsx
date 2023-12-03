import css from "./InfoBox.module.css";

import { selectUser } from "redux/user/user-selector";
import { useSelector } from "react-redux";

type InfoBoxType = {
  children: any;
  dir?: "column" | "row";
  type: "extra" | "warn" | "error";
};

export default function InfoBox({
  children,
  type,
  dir = "column",
}: InfoBoxType) {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  const direction = dir === "row" ? css["row"] : css["column"];
  const infoBoxName: any = {
    extra: {
      sign: "!",
      text: "Extra",
    },
    warn: { sign: "⚠", text: "warn" },
    error: { sign: "⚠", text: "error" },
  };

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
    default:
      infoTypeClass = css["extra"];
  }

  return (
    <div
      className={`${css["info-box"]} ${css[currentTheme]}  ${direction} ${infoTypeClass}`}
    >
      <div className={css["info-box-label"]}>
        {direction !== "row" ? (
          <span className={css["info-box-marker"]}>
            {infoBoxName[type].sign}
          </span>
        ) : (
          <>
            <span className={css["info-box-marker"]}>
              {infoBoxName[type].sign}
            </span>
            <span>{infoBoxName[type].text}</span>
          </>
        )}
      </div>
      <div className={css["info-box-content"]}>{children}</div>
    </div>
  );
}
