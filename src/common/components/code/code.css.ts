import { style } from "@vanilla-extract/css";
import { root } from "../../../common.css.ts";

export const code = style({
  padding: "2px 4px",
  borderRadius: 5,
  fontWeight: 600,
  backgroundColor: root.color.gray150,
  margin: "0 3px",
});
