import { NavLink, useLocation } from "react-router-dom";
import css from "./BookTermItem.module.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleMobileMenu } from "redux/mobileMenu/mobileMenu-redux";
import { selectUser } from "redux/user/user-selector";

type Term = {
  title: string;
  path: string;
};

export default function BookTermItem({ title, path }: Term) {
  const dispatch = useDispatch();

  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  const location = useLocation();

  function linkHandler() {
    dispatch(toggleMobileMenu(false));
    document.querySelector("body")?.setAttribute("style", "overflow: auto;");
  }

  return (
    <li>
      <NavLink
        className={`${css["book-term-link"]} ${css[currentTheme]}`}
        to={path}
        onClick={linkHandler}
        state={location}
      >
        {title}
      </NavLink>
    </li>
  );
}
