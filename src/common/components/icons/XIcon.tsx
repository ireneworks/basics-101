import { ReactComponent as X } from "../../assets/icons/regular/bx-x.svg";
import { IIconProps } from "../../types/icon.interface.ts";

export default function XIcon({ color, width, height }: IIconProps) {
  return <X fill={color} width={width} height={height} />;
}
