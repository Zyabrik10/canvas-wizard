import { nanoid } from "nanoid";
import AboutListItem from "./components/AboutListItem/AboutListItem";
import api_logo from 'img/logo/api-logo.svg';
import project_logo from 'img/logo/project-logo.svg';
import science_logo from 'img/logo/science-logo.svg';
import css from './AboutList.module.css';
import globalCss from 'css/global.module.css';

export default function Aboutlist() {
  interface Item {
    logo: string;
    title: string;
    text: string;
  }
  const items: Array<Item> = [
    {
      logo: api_logo,
      title: "Canvas API",
      text: `What is the Canvas API and How to Use It Properly`,
    },
    {
      logo: project_logo,
      title: "Canvas Project",
      text: `How to Build a Canvas Project Using JavaScript`,
    },
    {
      logo: science_logo,
      title: "Math And Physics",
      text: "How to Apply Math and Physics to Canvas Projects",
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
