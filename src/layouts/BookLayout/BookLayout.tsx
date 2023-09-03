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

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";
import { adaptTheme } from "../../ts/theme/adapt-theme";

export default function BookLayout() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <Header isContainer={false} position="static" />
      <div className={`${css["book-global-box"]}`}>
        <SideMenuMap />
        <MobileSideMenuBox />
        <main className={`${css["main"]} ${globalCss["main"]}`}>
          <MobileSideMenu />
          <div className={css["container"]}>
            <InfoBox type="extra" dir="column">
              <FormatP>
                This project is <FormatMark>under development</FormatMark>. All
                articles are going to be updated and enhanced. The same thing
                applies to the website.
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
