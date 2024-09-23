import hljs from "highlight.js";
import { useEffect } from "react";
import { codeBlock } from "./codeBlock.css.ts";

interface Props {
  codeSnippet: string;
}

export default function CodeBlock({ codeSnippet }: Props) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className={codeBlock}>
      <code className={"language-typescript"} style={{ padding: "24px" }}>
        {codeSnippet}
      </code>
    </pre>
  );
}
