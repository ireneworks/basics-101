import { style } from "@vanilla-extract/css";
import { root } from "../../../common.css.ts";

export const annotation = style({
  position: "relative",
  display: "inline-block",
  fontWeight: 700,
  fontSize: 11,
  top: -8,
  marginRight: 5,
});

export const linkButton = style({
  color: root.color.orange600,
});
