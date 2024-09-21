import { style } from "@vanilla-extract/css";
import { root } from "../../../styles/common.css";

export const divider = style({
  width: "100%",
  height: 1,
  background: root.color.gray150,
  margin: "40px 0",
});
