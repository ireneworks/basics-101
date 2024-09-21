import { ITextProps } from "../../types/components.interface";
import { h2, h4 } from "./heading.css";

export const Heading2 = ({ children }: ITextProps) => {
  return <h2 className={h2}>{children}</h2>;
};

export const Heading4 = ({ children }: ITextProps) => {
  return <h4 className={h4}>{children}</h4>;
};
