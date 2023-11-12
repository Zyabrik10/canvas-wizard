import { Header } from "components/index";
import { Outlet } from "react-router-dom";
import {Footer} from "components/index";

export default function HomeLayout() {
  return (
    <>
      <Header isContainer={true} />
      <main>
        <Outlet />
      </main>
      <Footer isContainer={true} />
    </>
  );
}
