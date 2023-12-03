import css from "./BookLayout.module.css";

import { Outlet } from "react-router-dom";

import {SideMenuMap, Header, Footer, MobileSideMenuBox} from "components/index";
import MobileSideMenu from "components/MobileSideMenuBox/components/MobileSideMenu/MobileSideMenu";
import InfoBox from "components/InfoBox/InfoBox";
import {
  FormatLink,
  FormatP,
} from "code-components/format-components/format-components";

export default function BookLayout() {
  return (
    <>
      <Header isContainer={false} position="static" />
      <div className={`${css["book-global-box"]}`}>
        <SideMenuMap />
        <MobileSideMenuBox />
        <main className={css["main"]}>
          <MobileSideMenu />
          <div className={css["container"]}>
            {/* <InfoBox type="warn" >
              <FormatP>
                This project is <FormatMark>under development</FormatMark>. All
                articles are going to be updated and enhanced. The same thing
                applies to the website.
              </FormatP>
            </InfoBox> */}
            <InfoBox type="extra">
              <FormatP>
                This is a free project, and in order for it to continue being
                free, please consider{" "}
                <FormatLink href="/book/support" isHere>supporting</FormatLink> it.
              </FormatP>
            </InfoBox>
            <Outlet />
          </div>
        </main>
      </div>
      <Footer isContainer={false} />
    </>
  );
}
