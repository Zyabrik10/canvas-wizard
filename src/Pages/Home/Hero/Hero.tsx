import globalCss from "../../../css/global.module.css";
import css from "./styles/Hero.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/user/user-selector";

export default function Hero() {
  const { theme } = useSelector(selectUser);
  const currentThem = `${theme}-theme`;

  const location = useLocation();
  return (
    <section
      className={`${css["hero"]} ${css[currentThem]} ${globalCss["global-section"]}`}
    >
      <div className={`${css["hero-container"]} ${globalCss["container"]}`}>
        <h1 className={`${css["hero-title"]} ${globalCss["global-title"]}`}>
          <span>Learn Canvas</span>{" "}
        </h1>
        <p
          className={`${css[currentThem]} ${css["hero-subtitle"]} ${globalCss["global-p"]}`}
        >
          Right Now <span>For Free</span>
        </p>
        <Link
          className={`${css[currentThem]} ${css["hero-button"]} ${globalCss["global-link"]}`}
          to="/book/about-canvas"
          state={location}
        >
          Start Learning
        </Link>
      </div>
    </section>
  );
}
