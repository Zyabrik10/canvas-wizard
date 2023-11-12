import { useSelector } from "react-redux";
import { selectUser } from "redux/user/user-selector";
import css from "./AboutListItem.module.css";

interface Item {
  logo: string;
  title: string;
  text: string;
}

export default function AboutListItem({ logo, title, text }: Item) {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  return (
    <li className={`${css[currentTheme]} ${css["about-list-item"]}`}>
      <img
        className={`${css["about-item-logo"]}`}
        src={logo}
        alt={title}
        loading="lazy"
      />
      <p
        className={`${css[currentTheme]} ${css["about-item-title"]}}`}
      >
        {title}
      </p>
      <p
        className={`${css[currentTheme]} ${css["about-item-text"]}`}
      >
        {text}
      </p>
    </li>
  );
}
