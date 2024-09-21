import { ITextProps } from "../../types/components.interface";
import { h4 } from "./heading.css";

export const Heading4 = ({ children }: ITextProps) => {
  return <h4 className={h4}>{children}</h4>;
};
