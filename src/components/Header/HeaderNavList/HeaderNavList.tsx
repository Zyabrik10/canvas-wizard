import { NavLink } from "react-router-dom";
import globalCss from "../../../css/global.module.css";
import css from '../styles/Header.module.css';

export function HeaderNav() {
  return (
    <nav>
      <ul className={`${globalCss["global-list"]} ${css["header-nav-list"]}`}>
        <li>
          <NavLink to="/book" className={`switch-theme ${css["dark-theme"]} ${css['header-nav-link']} ${globalCss["global-link"]}`} data-dark-theme={css['dark-theme']} data-light-theme={css['light-theme']}>
            Book
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/about-us" className={globalCss["global-link"]}>
            About Us
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
