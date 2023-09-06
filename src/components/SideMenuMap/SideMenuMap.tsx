import css from "./styles/SideMenuMap.module.css";

import BookSidebarList from "./BookSidebarList/BookSidebarList";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/user-selector";

export default function SideMenuMap() {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;
  
  return (
    <aside
      className={`${css[currentTheme]} ${css["book-sidebar-map"]}`}
    >
      <BookSidebarList />
    </aside>
  );
}
