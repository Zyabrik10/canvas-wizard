import globalCss from "css/global.module.css";
import css from "./FooterListItem.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "redux/user/user-selector";

interface Link {
  path: string;
  text: string;
  logo: string;
}

export default function FooterListItem({ path, text, logo }: Link) {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  return (
    <li>
      <a
        className={`${css["footer-link-button"]} ${css[currentTheme]} ${globalCss["global-link"]}`}
        href={path}
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} alt={text} />
      </a>
    </li>
  );
}
