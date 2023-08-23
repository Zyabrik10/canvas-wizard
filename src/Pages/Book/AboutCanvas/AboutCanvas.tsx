
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/user/user-selector";
import { adaptTheme } from "../../../ts/theme/adapt-theme";

export default function AboutCanvas() {
      const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);
    return <p>Init Canvas</p>;
}