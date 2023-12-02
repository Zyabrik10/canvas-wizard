import css from "./Hero.module.css";
import homeCss from "../Home.module.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "redux/user/user-selector";

import container from 'css/container.module.css';

export default function Hero() {
  const { theme } = useSelector(selectUser);
  const currentThem = `${theme}-theme`;

  const location = useLocation();
  return (
    <section
      className={`${css["hero"]} ${css["section"]} ${css[currentThem]} ${homeCss["section"]}`}
    >
      <div className={`${css["hero-container"]} ${container.container}`}>
        <h1 className={`${css["hero-title"]}`}>
          <span>Learn Canvas</span>{" "}
        </h1>
        <p
          className={`${css[currentThem]} ${css["hero-subtitle"]}`}
        >
          Right Now <span>For Free</span>
        </p>
        <Link
          className={`${css[currentThem]} ${css["hero-button"]}`}
          to="/book/about-canvas"
          state={location}
        >
          Start Learning
        </Link>
      </div>
    </section>
  );
}
