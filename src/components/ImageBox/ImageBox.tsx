import globalCss from "css/global.module.css";
import css from "./ImageBox.module.css";

type ImageBoxType = {
  src: string;
  description?: string;
  number?: string;
};

export default function ImageBox({ src, description, number }: ImageBoxType) {
  return (
    <div className={css["image-box"]}>
      <img
        className={`${css["image-box-img"]} ${globalCss["global-img"]}`}
        src={src}
        alt={description}
      />
      <p className={`${globalCss["global-p"]} ${css["image-box-description"]}`}>
        <span className={css["image-box-num"]}>{number}</span>
        {description}
      </p>
    </div>
  );
}
