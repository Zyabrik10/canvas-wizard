import {FooterListItem} from "./components/index";
import { nanoid } from "nanoid";
import globalCss from '../../../../css/global.module.css';
import css from './FooterList.module.css';

import linkedin_logo from "../../../../img/logo/linkedin-logo.svg";
import github_logo from "../../../../img/logo/github-logo.svg";
import instagram_logo from "../../../../img/logo/instagram-logo.svg";
import codepen_logo from "../../../../img/logo/codepen-logo.svg";

export default function FooterList() {
  interface Link {
    path: string;
    text: string;
    logo: string;
  }

  const items: Array<Link> = [
    {
      path: "https://www.linkedin.com/in/alexander-mazurok-jfd/",
      text: "Linkedin",
      logo: linkedin_logo
    },
    {
      path: "https://github.com/Zyabrik10",
      text: "GitHub",
      logo: github_logo
    },  
    {
      path: "https://www.instagram.com/zyabrik10/",
      text: "Instragram",
      logo: instagram_logo
    },
    {
      path: "https://codepen.io/Zyabrik10",
      text: "CodePen",
      logo: codepen_logo
    },
  ];
  
  return (
    <ul className={`${globalCss["global-list"]} ${css['footer-list']}`}>
      {items.map(({ path, text, logo }: Link) => (
        <FooterListItem key={nanoid()} path={path} text={text} logo={ logo} />
      ))}
    </ul>
  );
}

