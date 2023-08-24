import globalCss from "../../css/global.module.css";
import css from "./styles/BookLayout.module.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

import SideMenuMap from "../../components/SideMenuMap/SideMenuMap";

export default function BookLayout() {
  return (
    <>
      <Header isContainer={false} position="static" />
      <div className={`${css["book-global-box"]}`}>
        <SideMenuMap />
        <main className={`${css['main']} ${globalCss["main"]}`}>
          <div className={css['container']}>
            <Outlet />
          </div>
        </main>
      </div>
      <Footer isContainer={false} />
    </>
  );
}
