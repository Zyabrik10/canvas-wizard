import globalCss from "../../css/global.module.css";
import css from "./styles/BookLayout.module.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, Outlet, useLocation } from "react-router-dom";

import SideMenuMap from "../../components/SideMenuMap/SideMenuMap";
import MobileSideMenuBox from "../../components/MobileSideMenuBox/MobileSideMenuBox";
import MobileSideMenu from "../../components/MobileSideMenuBox/MobileSideMenu/MobileSideMenu";
// import SideExtraInfo from "../../components/SideExtraInfo/SideExtraInfo";
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
  const location = useLocation();

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
            {/* {location.state ? (
              <Link
                className={`${globalCss["global-link"]} ${css["back-button"]} switch-theme ${css["dark-theme"]}`}
                to={location.state.pathname}
                state={location}
                data-dark-theme={css["dark-theme"]}
                data-light-theme={css["light-theme"]}
              >
                ←
              </Link>
            ) : null} */}
            <InfoBox type="warn" dir="column">
              <FormatP>
                This project is <FormatMark>under development</FormatMark>. All
                articles are going to be updated and enhanced. The same thing
                applies to the website.
              </FormatP>
            </InfoBox>
            <InfoBox type="extra" dir="row">
              <FormatP>
                This is a free project, and in order for it to continue being free, please consider                 <Link
                  to="/book/support"
                  className={globalCss["global-link"]}
                  style={{
                    borderBottom: "1px solid rgb(0, 255, 255)",
                  }}
                >
                  supporting
                </Link>{" "} it.
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
