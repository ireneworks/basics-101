import { style } from "@vanilla-extract/css";
import { root } from "../../../common.css.ts";

export const divider = style({
  width: "100%",
  height: 1,
  background: root.color.gray150,
  margin: "40px 0",
});
