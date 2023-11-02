import globalCss from "css/global.module.css";
import { Header } from "components/index";
import { Outlet } from "react-router-dom";
import {Footer} from "components/index";

export default function HomeLayout() {
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
