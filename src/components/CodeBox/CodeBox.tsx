import css from "./CodeBox.module.css";

import { useRef, useState } from "react";

type CodeBoxType = {
  children: any;
  id?: string;
  filename?: string;
};

export default function CodeBox({ id, children, filename }: CodeBoxType) {
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
        <div className={css["filename-box"]}>
          <p className={css["filename"]}>{filename}</p>
        </div>
      ) : null}
      <button
        ref={buttonRef}
        className={css["copy-button"]}
        type="button"
        onClick={buttonHandler}
      >
        {text}
      </button>
      <pre>
        <code className="code">{children || null}</code>
      </pre>
    </div>
  );
}
