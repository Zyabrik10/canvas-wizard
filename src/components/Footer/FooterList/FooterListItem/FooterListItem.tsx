import globalCss from "../../../../css/global.module.css";
import css from "../../styles/Footer.module.css";

interface Link {
  path: string;
  text: string;
  logo: string;
}

export default function FooterListItem({ path, text, logo }: Link) {
  return (
    <li>
      <a
        className={`${css["footer-link-button"]} switch-theme ${css["dark-theme"]} ${globalCss["global-link"]}`}
        data-dark-theme={css["dark-theme"]}
        data-light-theme={css["light-theme"]}
        href={path}
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} alt={text} />
      </a>
    </li>
  );
}
