import globalCss from "../../css/global.module.css";
import css from "./styles/BookLayout.module.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

import SideMenuMap from "../../components/SideMenuMap/SideMenuMap";

// import arrow from "../../img/logo/arrow1.svg";

export default function BookLayout() {
  return (
    <>
      <Header isContainer={false} position="static" />
      <div
        className={`${css["dark-theme"]} ${css["book-global-box"]} switch-theme`}
        data-dark-theme={css["dark-theme"]}
        data-light-theme={css["light-theme"]}
      >
        <SideMenuMap />
        <main className={globalCss["main"]} style={{ margin: "0 auto" }}>
          <Outlet />
        </main>
        {/* <aside>
          <ul>
            <li>
              <NavLink className={globalCss["global-link"]} to="">
                Init Canvas
              </NavLink>
            </li>
          </ul>
        </aside> */}
      </div>
      <Footer isContainer={false} />
    </>
  );
}
