import { NavLink } from "react-router-dom";
import css from "./HeaderNavList.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "redux/user/user-selector";

export default function HeaderNav() {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  return (
    <nav>
      <ul className={css["header-nav-list"]}>
        <li>
          <NavLink
            to="/book"
            className={`${css[currentTheme]} ${css["header-nav-link"]}`}
          >
            Book
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/projects"
            className={`${css[currentTheme]} ${css["header-nav-link"]}`}
          >
            Projects
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
