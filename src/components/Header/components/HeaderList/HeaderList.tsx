import globalCss from "../../../../css/global.module.css";
import css from "./HeaderList.module.css";
import linkedin_logo from "../../../../img/logo/linkedin-logo.svg";
import github_logo from "../../../../img/logo/github-logo.svg";
import dark_logo from "../../../../img/logo/moon.svg";
import light_logo from "../../../../img/logo/light-logo.svg";

import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { switchTheme } from "../../../../redux/user/user-redux";
import { setFillColor } from "../../../../ts/canvas/home-canvas/init";

export default function HeaderList() {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  function changeColorButtonHandler() {
    switch (theme) {
      case "dark":
        dispatch(switchTheme("light"));
        setFillColor("#141a1f");
        break;
      case "light":
        dispatch(switchTheme("dark"));
        setFillColor("#fff");
        break;
    }
  }

  return (
    <ul className={`${globalCss["global-list"]} ${css["header-list"]}`}>
      <li>
        <button
          className={`${css["header-language-button"]} ${globalCss["global-button"]} ${css["header-link-button"]} ${css[currentTheme]}`}
          type="button"
        >
          en
        </button>
      </li>
      <li>
        <a
          className={`${css["header-link-button"]} ${css[currentTheme]} ${globalCss["global-link"]}`}
          href="https://www.linkedin.com/in/alexander-mazurok-jfd/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin_logo} alt="linkedin" />
        </a>
      </li>
      <li>
        <a
          className={`${css["header-link-button"]} ${css[currentTheme]} ${globalCss["global-link"]}`}
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Zyabrik10"
        >
          <img src={github_logo} alt="github" />
        </a>
      </li>
      <li>
        <button
          className={`${css["header-language-button"]} ${globalCss["global-button"]} ${css["header-link-button"]} ${css[currentTheme]}`}
          type="button"
          onClick={changeColorButtonHandler}
        >
          <img src={theme === "dark" ? dark_logo : light_logo} alt="light" />
        </button>
      </li>
    </ul>
  );
}
