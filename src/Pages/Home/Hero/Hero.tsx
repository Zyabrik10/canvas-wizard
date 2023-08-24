import globalCss from "../../../css/global.module.css";
import css from "./styles/Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className={`${css["hero"]} ${css["dark-theme"]} ${globalCss["global-section"]} switch-theme`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <div className={`${css["hero-container"]} ${globalCss["container"]}`}>
        <h1 className={`${css["hero-title"]} ${globalCss["global-title"]}`}>
          <span>Learn Canvas</span>{" "}
        </h1>
        <p
          className={`switch-theme ${css["dark-theme"]} ${css["hero-subtitle"]} ${globalCss["global-p"]}`}
          data-dark-theme={css["dark-theme"]}
          data-light-theme={css["light-theme"]}
        >
          Right Now <span>For Free</span>
        </p>
        <Link
          className={`switch-theme ${css["dark-theme"]} ${css["hero-button"]} ${globalCss["global-link"]}`}
          to="/book/about-canvas"
          data-dark-theme={css["dark-theme"]}
          data-light-theme={css["light-theme"]}
        >
          Start Learning
        </Link>
      </div>
    </section>
  );
}
