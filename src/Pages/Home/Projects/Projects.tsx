import ProjectsList from "./ProjectsList/ProjectsLit";
import globalCss from "../../../css/global.module.css";
import css from "./Projects.module.css";

export default function Projects() {
  return (
    <section
      className={`switch-theme ${css["dark-theme"]} ${css["project"]} ${globalCss["global-section"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <div className={globalCss["container"]}>
        <h2
          className={`${globalCss["section-title"]} ${globalCss["global-title"]} ${css["project-title"]}`}
        >
          What are projects there?
        </h2>
        <p className={`${globalCss["global-p"]} ${css["project-p"]}`}>
          Projects on canvas <span>for work</span> or <span>just relax</span>
        </p>
        <ProjectsList />
      </div>
    </section>
  );
}
