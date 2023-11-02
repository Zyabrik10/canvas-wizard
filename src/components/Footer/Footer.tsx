import globalCss from "../../css/global.module.css";

import { FooterList, FooterLogo } from "./components/index";

import css from "./Footer.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";

function FooterContent() {
  return (
    <div className={css["footer-content"]}>
      <FooterLogo />
      <a
        className={`${css["footer-author-link"]} ${globalCss["global-link"]}`}
        href="https://github.com/Zyabrik10"
      >
        2023 Made by @Zyabrik10{" "}
      </a>
      <FooterList />
    </div>
  );
}

interface FooterProps {
  isContainer: boolean;
}

export default function Footer({ isContainer }: FooterProps) {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  return (
    <footer
      className={`${css[currentTheme]} ${css["footer"]}`}
    >
      {isContainer ? (
        <div className={globalCss.container} style={{ padding: "0" }}>
          <FooterContent />
        </div>
      ) : (
        <FooterContent />
      )}
    </footer>
  );
}
