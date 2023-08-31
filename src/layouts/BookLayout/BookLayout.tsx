import globalCss from "../../css/global.module.css";
import css from "./styles/BookLayout.module.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

import SideMenuMap from "../../components/SideMenuMap/SideMenuMap";
import MobileSideMenuBox from "../../components/MobileSideMenuBox/MobileSideMenuBox";
import MobileSideMenu from "../../components/MobileSideMenuBox/MobileSideMenu/MobileSideMenu";
import SideExtraInfo from "../../components/SideExtraInfo/SideExtraInfo";
import InfoBox from "../../components/InfoBox/InfoBox";
import {
  FormatMark,
  FormatP,
} from "../../code-components/format-components/format-components";

export default function BookLayout() {
  return (
    <>
      <Header isContainer={false} position="static" />
      <div className={`${css["book-global-box"]}`}>
        <SideMenuMap />
        <MobileSideMenuBox />
        <main className={`${css["main"]} ${globalCss["main"]}`}>
          <MobileSideMenu />
          <div className={css["container"]}>
            <InfoBox type="column">
              <FormatP>
                This project is <FormatMark>underdevelopment</FormatMark>. All articles are going to be updated and enhaced
              </FormatP>
            </InfoBox>
            <Outlet />
          </div>
        </main>
        {/* <SideExtraInfo /> */}
      </div>
      <Footer isContainer={false} />
    </>
  );
}
