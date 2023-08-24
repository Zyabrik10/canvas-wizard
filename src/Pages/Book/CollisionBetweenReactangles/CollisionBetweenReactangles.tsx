import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/user/user-selector";
import { adaptTheme } from "../../../ts/theme/adapt-theme";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatLink,
  FormatTitleH3,
  FormatCode,
  FormatListUl
} from "../../../components/FormatedComponents/FormatedComponents";

import globalCss from '../../../css/global.module.css';

export default function CollisionBetweenReactangles() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Collision between reactangles</FormatTitleH2>
          <FormatCode id="">{`if (
    x1 + width1 >= x2 && 
    x1 <= x2 + width2 &&
    y1 + height1 >= y2 && 
    y1 <= y2 + height2
){
    // collision detected!
}
`}</FormatCode>
    </>
  );
}
