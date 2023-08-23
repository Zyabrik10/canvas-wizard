import { nanoid } from "nanoid";
import AboutListItem from "./AboutListItem/AboutListItem";
import api_logo from '../../../../img/logo/api-logo.svg';
import project_logo from '../../../../img/logo/project-logo.svg';
import science_logo from '../../../../img/logo/science-logo.svg';
import css from '../styles/About.module.css';
import globalCss from '../../../../css/global.module.css';

export default function Aboutlist() {
  interface Item {
    logo: string;
    title: string;
    text: string;
  }
  const items: Array<Item> = [
    {
      logo: api_logo,
      title: "API Canvas",
      text: `What is API Canvas and how to deal with it properly`,
    },
    {
      logo: project_logo,
      title: "Canvas Project",
      text: `How to built Canvas project using JavaScript`,
    },
    {
      logo: science_logo,
      title: "Math And Physics",
      text: "How to use math and physics for canvas projects",
    },
  ];
  return (
    <ul className={`${css["about-list"]} ${globalCss["global-list"]}`}>
      {items.map(({ logo, text, title }: Item) => (
        <AboutListItem key={nanoid()} logo={logo} text={text} title={title} />
      ))}
    </ul>
  );
}
