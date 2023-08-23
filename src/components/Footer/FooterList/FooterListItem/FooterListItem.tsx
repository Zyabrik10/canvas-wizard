import globalCss from "../../../../css/global.module.css";
import css from '../../styles/Footer.module.css';

interface Link {
  path: string;
  text: string;
  logo: string;
}

export default function FooterListItem({ path, text, logo }: Link) {
  return (
    <li
      className={`switch-theme ${css["footer-list-item"]} ${css["dark-theme"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <a
        className={globalCss["global-link"]}
        href={path}
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} alt={text} />
      </a>
    </li>
  );
}
