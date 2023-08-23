import { Link } from "react-router-dom";
import logo from '../../../img/logo/logo.svg';
import globalCss from '../../../css/global.module.css';
import css from '../styles/Header.module.css';

export default function HeaderLogo() {
  return (
    <Link className={css['header-logo']} to='/'>
      <img src={logo} alt="logo" width="33" height="33" className={globalCss['global-img']} loading="lazy"/>
    </Link>
  );
}
