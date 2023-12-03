import css from "./HeaderList.module.css";
import github_logo from "img/logo/github-logo.svg";
import dark_logo from "img/logo/moon.svg";
import light_logo from "img/logo/light-logo.svg";

import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "redux/user/user-selector";
import { switchTheme } from "redux/user/user-redux";
import { setFillColor } from "ts/canvas/home-canvas/init";

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
    <ul className={css["header-list"]}>
      {/* <li>
        <button
          className={`${css["header-language-button"]} ${css["header-link-button"]} ${css[currentTheme]}`}
          type="button"
        >
          en
        </button>
      </li> */}
      <li>
        <a
          className={`${css["header-link-button"]} ${css[currentTheme]}`}
          href="https://www.linkedin.com/in/alexander-mazurok-jfd/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3027 3.75C24.9657 3.75 25.6016 4.01339 26.0705 4.48223C26.5393 4.95107 26.8027
               5.58696 26.8027 6.25V23.75C26.8027 24.413 26.5393 25.0489 26.0705 25.5178C25.6016
               25.9866 24.9657 26.25 24.3027 26.25H6.8027C6.13966 26.25 5.50378 25.9866 5.03494 
               25.5178C4.5661 25.0489 4.3027 24.413 4.3027 23.75V6.25C4.3027 5.58696 4.5661 
               4.95107 5.03494 4.48223C5.50378 4.01339 6.13966 3.75 6.8027 3.75H24.3027ZM23.6777 
               23.125V16.5C23.6777 15.4192 23.2484 14.3828 22.4842 13.6185C21.72 12.8543 20.6835 
               12.425 19.6027 12.425C18.5402 12.425 17.3027 13.075 16.7027 14.05V12.6625H13.2152V23.125H16.7027V16.9625C16.7027 
               16 17.4777 15.2125 18.4402 15.2125C18.9043 15.2125 19.3495 15.3969 19.6776 
               15.7251C20.0058 16.0533 20.1902 16.4984 20.1902 16.9625V23.125H23.6777ZM9.1527 
               10.7C9.70966 10.7 10.2438 10.4788 10.6376 10.0849C11.0315 9.6911 11.2527 9.15695 
               11.2527 8.6C11.2527 7.4375 10.3152 6.4875 9.1527 6.4875C8.59243 6.4875 8.05511 
               6.71007 7.65894 7.10624C7.26277 7.50241 7.0402 8.03973 7.0402 8.6C7.0402 9.7625 
               7.9902 10.7 9.1527 10.7ZM10.8902 23.125V12.6625H7.4277V23.125H10.8902Z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          className={`${css["header-link-button"]} ${css[currentTheme]}`}
          rel="noreferrer"
          target="_blank"
          href="https://github.com/Zyabrik10"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219
               5.00043 6.16117 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875
               25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125
               24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15
               19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375
               23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375
               20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875
               10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875
               13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625
               7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975
               12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125
               21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925
               25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203
               8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835
               3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z"
            />
          </svg>
        </a>
      </li>
      <li>
        <button
          className={`${css["header-language-button"]} ${css["header-link-button"]} ${css[currentTheme]}`}
          type="button"
          onClick={changeColorButtonHandler}
        >
          <img src={theme === "dark" ? dark_logo : light_logo} alt="light" />
        </button>
      </li>
    </ul>
  );
}
