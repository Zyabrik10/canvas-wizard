import { Link } from "react-router-dom";
import logo from 'img/logo/logo.svg';
import css from './HeaderLogo.module.css';

export default function HeaderLogo() {
  return (
    <Link className={css['header-logo']} to='/'>
      <img src={logo} alt="logo" width="33" height="33" loading="lazy"/>
    </Link>
  );
}
