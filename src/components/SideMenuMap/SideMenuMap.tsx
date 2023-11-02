import css from "./SideMenuMap.module.css";

import {BookSideBarList} from "./components/index";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";

export default function SideMenuMap() {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;
  
  return (
    <aside
      className={`${css[currentTheme]} ${css["book-sidebar-map"]}`}
    >
      <BookSideBarList />
    </aside>
  );
}
