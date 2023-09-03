import globalCss from "../../css/global.module.css";
import Header from "../../components/Header/Header";
import css from "./styles/HomeLayout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";
import { adaptTheme } from "../../ts/theme/adapt-theme";

export default function HomeLayout() {
    const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);
  
  return (
    <>
      <Header isContainer={true} />
      <main className={globalCss["main"]}>
        <Outlet />
      </main>
      <Footer isContainer={true} />
    </>
  );
}
