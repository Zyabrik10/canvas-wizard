import ProjectsListItem from "./ProjectsListItem/ProjectsListItem";
import { nanoid } from "nanoid";
import img1 from "../../../../img/img1.png";
import img2 from "../../../../img/img2.png";
import img3 from "../../../../img/img3.png";
import css from '../styles/Projects.module.css';
import globalCss from '../../../../css/global.module.css';


export default function ProjectsList() {
  interface Item {
    logo: string;
    title: string;
  }
  const items: Array<Item> = [
    { logo: img1, title: "Game of Life" },
    { logo: img2, title: "Watching Eyes" },
    { logo: img3, title: "Pinball" },
  ];
  return (
    <ul className={`${css["project-list"]} ${globalCss["flex-container"]} ${globalCss["global-list"]}`}>
      {items.map(({ logo, title }: Item) => (
        <ProjectsListItem key={nanoid()} logo={logo} title={title} />
      ))}
    </ul>
  );
}
