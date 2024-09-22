import { IIconProps } from "../../types/icon.interface.ts";
import { ReactComponent as Menu } from "../../assets/icons/regular/bx-menu.svg";
import { root } from "../../../common.css.ts";

export default function MenuIcon({ color, width, height }: IIconProps) {
  return <Menu fill={root.color[color]} width={width} height={height} />;
}
