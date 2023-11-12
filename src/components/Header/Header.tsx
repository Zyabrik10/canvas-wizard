import { HeaderList, HeaderLogo, HeaderNav } from "./components/index";

import css from "./Header.module.css";

import { useSelector } from "react-redux";
import { selectUser } from "redux/user/user-selector";

import container from 'css/container.module.css';

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
  const { theme } = useSelector(selectUser);

  const currentTheme = `${theme}-theme`;

  return (
    <header
      className={`${css["header"]} ${css[currentTheme]}`}
      style={{
        position,
      }}
    >
      {isContainer ? (
        <div className={`${container.container}`} style={{ padding: "0" }}>
          <HeaderContent />
        </div>
      ) : (
        <HeaderContent />
      )}
    </header>
  );
}
