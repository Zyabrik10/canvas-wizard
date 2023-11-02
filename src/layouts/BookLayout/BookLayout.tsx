import globalCss from "css/global.module.css";
import css from "./BookLayout.module.css";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";

import SideMenuMap from "components/SideMenuMap/SideMenuMap";
import MobileSideMenuBox from "components/MobileSideMenuBox/MobileSideMenuBox";
import MobileSideMenu from "components/MobileSideMenuBox/components/MobileSideMenu/MobileSideMenu";
import InfoBox from "components/InfoBox/InfoBox";
import {
  FormatLink,
  FormatMark,
  FormatP,
} from "code-components/format-components/format-components";

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
                This is a free project, and in order for it to continue being
                free, please consider{" "}
                <FormatLink href="/book/support" isHere>supporting</FormatLink> it.
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
