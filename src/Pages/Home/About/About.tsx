import { Link } from "react-router-dom";
import Aboutlist from "./AboutList/AboutList";

import globalCss from "../../../css/global.module.css";
import css from "./styles/About.module.css";

import arrow_logo from "../../../img/logo/arrow1.svg";

export default function About() {
  return (
    <section
      className={`switch-theme ${css['about']} ${css["dark-theme"]} ${globalCss["global-section"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <div className={globalCss["container"]}>
        <h2
          className={`${globalCss["section-title"]} ${css["about-title"]} ${globalCss["global-title"]}`}
        >
          What are you going to learn ?
        </h2>
        <p className={`${css["about-p"]} ${globalCss["global-p"]}`}>
          How to work with canvas <span>using js</span>
        </p>
        <div className={css["about-main-box"]}>
          <canvas id="stars-canvas"></canvas>
          <Aboutlist />
        </div>
        <div
          className={`${css["about-button-box"]} ${globalCss["global-button"]}`}
        >
          <img
            className={css["about-box-logo"]}
            alt=""
            src={arrow_logo}
            loading="lazy"
            width="30"
          />
          <Link
            className={`${css["about-button"]} ${globalCss["global-link"]}`}
            to="Book"
          >
            How To Do
          </Link>
        </div>
      </div>
    </section>
  );
}
