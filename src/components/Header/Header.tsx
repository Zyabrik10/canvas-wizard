import globalCss from "../../css/global.module.css";
import HeaderList from "./HeaderList/HeaderList";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import { HeaderNav } from "./HeaderNavList/HeaderNavList";
import css from "./styles/Header.module.css";

type HeaderProps = {
  isContainer: boolean;
  position?: "fixed" | "static";
};

function HeaderContent() {
  return (
    <div className={css["header-content"]}>
      <HeaderLogo />
      <HeaderNav />
      <HeaderList />
    </div>
  );
}

export default function Header({
  isContainer,
  position = "fixed",
}: HeaderProps) {


  return (
    <header
      className={`switch-theme ${css["header"]} ${css["dark-theme"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
      style={{
        position
      }}
    >
      {isContainer ? (
        <div className={`${globalCss.container}`} style={{padding:"0"}}>
          <HeaderContent />
        </div>
      ) : (
        <HeaderContent />
      )}
    </header>
  );
}
