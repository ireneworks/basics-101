import { code } from "./code.css.ts";

interface Props {
  children: string;
}

export default function Code({ children }: Props) {
  return <code className={code}>{children}</code>;
}
