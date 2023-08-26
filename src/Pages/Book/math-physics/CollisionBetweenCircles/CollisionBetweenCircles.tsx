import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../ts/theme/adapt-theme";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatLink,
  FormatTitleH3,
  FormatCode,
  FormatListUl
} from "../../../../components/FormatedComponents/FormatedComponents";

import globalCss from '../../../css/global.module.css';

export default function CollisionBetweenCircles() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Collision between circles</FormatTitleH2>
          <FormatCode id="">{` const dist = getDist(a, b);
if (dist <= a.rad  + b.rad){
    // collision detected!
}
`}</FormatCode>
    </>
  );
}
