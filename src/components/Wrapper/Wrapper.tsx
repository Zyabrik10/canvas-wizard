import { JSX } from "react";
import css from "./styles/Wrapper.module.css";

type Props = {
  children: JSX.Element;
};

export default function Wrapper({ children }: Props) {
  return (
    <div
      className={`switch-theme ${css["dark-theme"]} ${css["wrapper"]}`}
      data-dark-theme={css["dark-theme"]}
      data-light-theme={css["light-theme"]}
    >
      {children}
    </div>
  );
}
