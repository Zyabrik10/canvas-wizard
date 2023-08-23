import globalCss from "../../../../../css/global.module.css";
import css from "../../styles/About.module.css";

interface Item {
  logo: string;
  title: string;
  text: string;
}

export default function AboutListItem({ logo, title, text }: Item) {
  return (
    <li
      className={`${css["dark-theme"]} ${css["about-list-item"]} switch-theme`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <img
        className={`${css["about-item-logo"]} ${globalCss["global-img"]}`}
        src={logo}
        alt={title}
        loading="lazy"
      />
      <p
        className={`${css["dark-theme"]} switch-theme ${css["about-item-title"]} ${globalCss["global-p"]}`}
        data-dark-theme={css["dark-theme"]}
        data-light-theme={css["light-theme"]}
      >
        {title}
      </p>
      <p
        className={`${css["dark-theme"]} switch-theme ${css["about-item-text"]} ${globalCss["global-p"]}`}
        data-dark-theme={css["dark-theme"]}
        data-light-theme={css["light-theme"]}
      >
        {text}
      </p>
    </li>
  );
}
