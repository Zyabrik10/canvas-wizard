// import globalCss from "../../css/global.module.css";
import css from "./styles/SideMenuMap.module.css";

import BookSidebarList from "./BookSidebarList/BookSidebarList";

export default function SideMenuMap() {
  return (
    <aside
      className={`${css["dark-theme"]} ${css["book-sidebar-map"]} switch-theme`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      <BookSidebarList />
    </aside>
  );
}
