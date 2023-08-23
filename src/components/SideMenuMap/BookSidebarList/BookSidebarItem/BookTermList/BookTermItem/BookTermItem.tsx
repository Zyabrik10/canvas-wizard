import globalCss from "../../../../../../css/global.module.css";
import { NavLink } from "react-router-dom";

type Term = {
  title: string;
  path: string;
};

export default function BookTermItem({ title, path }: Term) {
  return (
    <li>
      <NavLink className={globalCss["global-link"]} to={path}>
        {title}
      </NavLink>
    </li>
  );
}
