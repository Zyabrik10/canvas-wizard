import { Link } from "react-router-dom";
import globalCss from "../../../../../css/global.module.css";
import css from "../../styles/Projects.module.css";

interface Item {
  logo: string;
  title: string;
}

export default function ProjectsListItem({ logo, title }: Item) {
  return (
    <li>
      <Link className={globalCss["global-link"]} to="/book">
        <div
          className={`${css["project-list-item-box"]} ${globalCss["global-img"]} ${css["dark-theme"]} switch-theme`}
          data-dark-theme={css["dark-theme"]}
          data-light-theme={css["light-theme"]}
        >
          <img
            src={logo}
            alt={title}
            loading="lazy"
          />
        </div>
        <p
          className={`${css["project-list-item-title"]} ${globalCss["global-p"]}`}
        >
          {title}
        </p>
      </Link>
    </li>
  );
}
