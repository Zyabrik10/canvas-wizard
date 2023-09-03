import {
  FormatP,
  FormatTitleH2,
  FormatTitleH3,
} from "../../../../../code-components/format-components/format-components";

import { CodeBox } from "../../../../../components/CodeBox/CodeBox";

export default function ReactOnWindowResizeStars() {
  return (
    <>
      <FormatTitleH2>React on window resize</FormatTitleH2>

      <FormatTitleH3>Preview</FormatTitleH3>
      <CodeBox>{`window.addEventListener("resize", ()=>{
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});`}</CodeBox>
      <FormatP>
        Whenever the window is resized, we adjust the canvas's width and height
        to match the current width and height of the viewport.
      </FormatP>
    </>
  );
}
