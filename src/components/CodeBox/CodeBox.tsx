import globalCss from "css/global.module.css";
import css from "./CodeBox.module.css";

import { JSX, useRef, useState } from "react";

type ChildrenType =
  | Array<string>
  | string
  | Array<JSX.Element>
  | JSX.Element
  | Array<string | JSX.Element>;

type CodeBoxType = {
  children: ChildrenType;
  id?: string;
  filename?: string;
};

export function CodeBox({ id, children, filename }: CodeBoxType) {
  const [text, setText] = useState<string>("copy");
  const buttonRef = useRef<HTMLButtonElement>(null);

  function buttonHandler() {
    const parentElement = buttonRef.current?.parentElement!;
    const copyText = parentElement.querySelector(".code")!;

    navigator.clipboard.writeText(copyText.textContent!.trim());
    setText("copied");

    buttonRef.current!.style.cursor = "auto";
    buttonRef.current!.setAttribute("disabled", "true");

    setTimeout(() => {
      setText("copy");
      buttonRef.current!.style.cursor = "pointer";
      buttonRef.current!.removeAttribute("disabled");
    }, 2000);
  }

  return (
    <div id={id} className={css["code-box"]}>
      {filename !== undefined ? (
        <>
          <div className={css["filename-box"]}>
            <p className={`${globalCss["global-p"]} ${css["filename"]}`}>
              {filename}
            </p>
          </div>
        </>
      ) : null}
      <button
        ref={buttonRef}
        className={`${globalCss["global-button"]} ${css["copy-button"]}`}
        type="button"
        onClick={buttonHandler}
      >
        {text}
      </button>
      <pre className={globalCss["global-p"]}>
        <code className="code">{children ? children : null}</code>
      </pre>
    </div>
  );
}
