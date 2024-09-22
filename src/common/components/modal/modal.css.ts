import { style } from "@vanilla-extract/css";
import { root } from "../../../common.css.ts";

export const modal = style({
  width: "100%",
  height: "100%",
  backgroundColor: root.color.white,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});
