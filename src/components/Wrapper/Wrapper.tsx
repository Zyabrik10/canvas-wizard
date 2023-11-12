import { useSelector } from "react-redux";
import { selectUser } from "redux/user/user-selector";
import css from "./Wrapper.module.css";

type Props = {
  children: any;
};

export default function Wrapper({ children }: Props) {
  const { theme } = useSelector(selectUser);
  const currentTheme = `${theme}-theme`;

  return (
    <div className={`${css[currentTheme]} ${css["wrapper"]}`}>{children}</div>
  );
}
