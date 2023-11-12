import { Link, useLocation } from "react-router-dom";
import {AboutList} from "./components/index";

import css from "./About.module.css";
import homeCss from "../Home.module.css";

import arrow_logo from "img/logo/arrow1.svg";

import { useSelector } from "react-redux";
import { selectUser } from "redux/user/user-selector";

import container from 'css/container.module.css';

export default function About() {
  const location = useLocation();

  const { theme } = useSelector(selectUser);
  const currentThem = `${theme}-theme`;
  return (
    <section
      className={`${css["about"]} ${css[currentThem]} ${homeCss["section"]}`}
    >
      <div className={container.container}>
        <h2
          className={`${css["about-title"]} ${homeCss["section-title"]}`}
        >
          What are you going to learn ?
        </h2>
        <p className={css["about-p"]}>
          How to work with canvas <span>using js</span>
        </p>
        <div className={css["about-main-box"]}>
          <canvas id="stars-canvas"></canvas>
          <AboutList />
        </div>
        <div
          className={css["about-button-box"]}
        >
          <img
            className={css["about-box-logo"]}
            alt=""
            src={arrow_logo}
            loading="lazy"
            width="30"
          />
          <Link
            className={`${css["about-button"]}`}
            to="book/projects/stars/project-configuration"
            state={location}
          >
            How To Do
          </Link>
        </div>
      </div>
    </section>
  );
}
