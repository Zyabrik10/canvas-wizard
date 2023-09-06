import globalCss from "../../css/global.module.css";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

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
