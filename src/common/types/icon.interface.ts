import { CSSProperties } from "react";
import { ColorKey } from "./theme.interface.ts";

export interface IIconProps {
  color: ColorKey;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
}
