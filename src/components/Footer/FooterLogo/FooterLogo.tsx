import { Link } from "react-router-dom";

import css from "../styles/Footer.module.css";
import globalCss from '../../../css/global.module.css';

import logo from '../../../img/logo/logo.svg';

export default function HeaderLogo() {
  return (
    <Link
      className={globalCss['global-link']}
      to="/"
    >
      <div className={css['logo-box']}>
        <img src={logo} alt="logo" />
        <span className={css['delimeter']}>|</span>
        <span>CANVASWIZARD</span>
      </div>
    </Link>
  );
}
