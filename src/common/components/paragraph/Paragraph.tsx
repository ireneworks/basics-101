import { paragraph } from "./paragraph.css";
import { ITextProps } from "../../types/components.interface";

export default function Paragraph({ children }: ITextProps) {
  return <p className={paragraph}>{children}</p>;
}
