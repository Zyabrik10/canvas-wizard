import css from "./ProjectsList.module.css";
import container from 'css/container.module.css';

import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

export default function ProjectsList() {
  const arr = [
    {
      name: "Project One",
      src: "",
      imageSrc: "",
    },
    {
      name: "Project One",
      src: "",
      imageSrc: "",
    },
    {
      name: "Project One",
      src: "",
      imageSrc: "",
    },
  ];

  return (
      <section className={`${css["project-list-section"]} ${css.section}`}>
      <div className={container.container}>
        <h2>Canvas Projects</h2>

        <ul>
          {arr.map(({ name, imageSrc, src }) => (
            <li key={nanoid()}>
              <NavLink to={src}></NavLink>
              <img src={imageSrc} alt={name} />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
