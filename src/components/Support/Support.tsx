import {
  FormatMark,
  FormatP,
  FormatTitleH2,
} from "../../code-components/format-components/format-components";
import { Link } from "react-router-dom";

import globalCss from "../../css/global.module.css";

import css from "./Support.module.css";

export default function Support() {
  return (
    <div className={css["support-box"]}>
      <FormatTitleH2>Support project</FormatTitleH2>
      <FormatP>
        This is a free project. But it takes lots of amout of time to develope
        it and also to write a good article. You will realy help the project to
        continue bieng free and motivate to develope with fund you think this project
        deserved.
      </FormatP>
      <FormatP>
        It will be good for this project to have his own domen{" "}
        <FormatMark>canvas-wizard.com</FormatMark>[
        <span style={{ color: "rgb(40, 200, 50)" }}>~20$</span>]
      </FormatP>
      <Link
        to="/book/support"
        className={`${css["support-button"]} ${globalCss["global-link"]}`}
      >
        support
      </Link>
    </div>
  );
}
