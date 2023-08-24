import globalCss from "../../../../../../css/global.module.css";
import { NavLink } from "react-router-dom";
import css from "../../../../styles/SideMenuMap.module.css";

type Term = {
  title: string;
  path: string;
};

export default function BookTermItem({ title, path }: Term) {
  return (
    <li>
      <NavLink
        className={`${css["book-term-link"]} ${globalCss["global-link"]} ${css["dark-theme"]} switch-theme`}
        to={path}
        data-dark-theme={css["dark-theme"]}
        data-light-theme={css["light-theme"]}
      >
        {title}
      </NavLink>
    </li>
  );
}
