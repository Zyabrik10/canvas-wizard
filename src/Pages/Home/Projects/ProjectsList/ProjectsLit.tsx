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
    link: string
  }
  const items: Array<Item> = [
    { logo: img1, title: "Game of Life", link:"https://github.com/Zyabrik10/game-of-life/" },
    { logo: img2, title: "Eyes Watcher", link:"https://github.com/Zyabrik10/eyes_watcher" },
    { logo: img3, title: "Pinball", link: "https://github.com/Zyabrik10/pinball_js" },
  ];
  return (
    <ul className={`${css["project-list"]} ${globalCss["flex-container"]} ${globalCss["global-list"]}`}>
      {items.map(({ logo, title, link }: Item) => (
        <ProjectsListItem key={nanoid()} logo={logo} title={title} link={link} />
      ))}
    </ul>
  );
}
