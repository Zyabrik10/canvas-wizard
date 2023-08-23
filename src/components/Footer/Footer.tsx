import globalCss from "../../css/global.module.css";
import FooterList from "./FooterList/FooterList";
import FooterLogo from "./FooterLogo/FooterLogo";
import css from "./styles/Footer.module.css";

function FooterContent() {
  return (
    <div className={css["footer-content"]}>
      <FooterLogo />
      <FooterList />
    </div>
  );
}

interface FooterProps {
  isContainer: boolean;
}

export default function Footer({ isContainer }: FooterProps) {
  return (
    <footer
      className={`${css["dark-theme"]} switch-theme ${globalCss["footer"]} ${css["footer"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      {isContainer ? (
        <div className={globalCss.container}>
          <FooterContent />
        </div>
      ) : (
        <FooterContent />
      )}
    </footer>
  );
}
