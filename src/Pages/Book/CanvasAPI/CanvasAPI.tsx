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

export default function CanvasAPI() {
  const { theme }: { theme: string } = useSelector(selectUser);

  useEffect(() => {
    adaptTheme(theme);
  }, [theme]);

  return (
    <>
      <FormatTitleH2>Canvas API</FormatTitleH2>
      <FormatP>
        Canvas API is a set of methods that allow you to create and manage your
        canvas. You can use the following functions in order to work with it:
      </FormatP>
      <ul className={`${globalCss['flex-container']} ${globalCss['global-list']}`} style={{
        display: 'flex',
        marginBottom: "20px",
        gap: "10px"
      }}>
        <li>fillRect</li>
        <li>clearRect</li>
        <li>fill</li>
        <li>stroke</li>
        <li>rect</li>
        <li>arc</li>
        <li>lineTo</li>
        <li>moveTo</li>
      </ul>
      <FormatTitleH3>Get access to Canvas API</FormatTitleH3>
      <FormatP>
        Before we start, we need to get access to Canvas API. Canvas context
        provides us it. The following code is how to do that.
      </FormatP>
      <FormatCode id="">{`const canvas = document.querySelector("canvas"); // We need to find canvas first to get its context
const ctx = canvas.getContext("2d"); // Our context
`}</FormatCode>
      <FormatTitleH3>fillRect</FormatTitleH3>
      <FormatCode id="">{`ctx.fillRect(x, y, width, height);`}</FormatCode>
      <FormatTitleH3>clearRect</FormatTitleH3>
      <FormatCode id="">{`ctx.clearRect(x, y, width, height);`}</FormatCode>
      <FormatTitleH3>fill</FormatTitleH3>
      <FormatCode id="">{`ctx.fill();`}</FormatCode>
      <FormatTitleH3>stroke</FormatTitleH3>
      <FormatCode id="">{`ctx.stroke();`}</FormatCode>
      <FormatTitleH3>rect</FormatTitleH3>
      <FormatCode id="">{`ctx.rect(x, y, width, height);`}</FormatCode>
      <FormatTitleH3>arc</FormatTitleH3>
      <FormatCode id="">{`ctx.arc(x, y, width, height);`}</FormatCode>
      <FormatTitleH3>lineTo</FormatTitleH3>
      <FormatCode id="">{`ctx.lineTo(x, y, width, height);`}</FormatCode>
      <FormatTitleH3>moveTo</FormatTitleH3>
      <FormatCode id="">{`ctx.moveTo(x, y, width, height);`}</FormatCode>
    </>
  );
}
