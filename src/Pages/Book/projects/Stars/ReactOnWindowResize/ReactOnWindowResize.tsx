import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../../redux/user/user-selector";
import { adaptTheme } from "../../../../../ts/theme/adapt-theme";

import img from "../../../../../img/projects/config/innerWidth-innerHeight.png";

import {
  FormatP,
  FormatTitleH2,
  FormatMark,
  FormatTitleH3,
} from "../../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";

import ImageBox from "../../../../../components/ImageBox/ImageBox";

import initImage1 from "../../../../../img/projects/config/img1.png";
import initImage2 from "../../../../../img/projects/config/img2.png";
import InfoBox from "../../../../../components/InfoBox/InfoBox";
import { InitHTML } from "../../../../../code-components/html-code/html-code";
import EditorOnline from "../../../../../components/EditorOnline/EditorOnline";
import {
  DeclareCanvas,
  DeclareCtx,
  SetCanvasSize,
} from "../../../../../code-components/js-code/canvas-code/canvas-code";
import { Br } from "../../../../../code-components/colored-code-components/html/html";
import { BracketExpression } from "../../../../../code-components/js-code/js-code";
import {
  Colon,
  Object,
  Property,
  Semicoln,
  VarName,
} from "../../../../../code-components/colored-code-components/js/js";

export default function ReactOnWindowResizeStars() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>React on window resize</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox>{`window.addEventListener("resize", ()=>{
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});`}</CodeBox>

    </>
  );
}



// export function ReactOnWindowResizeStars() {
//     return 
// }