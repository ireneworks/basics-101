import { style } from "@vanilla-extract/css";

export const codeBlock = style({
  borderRadius: 5,
  overflow: "hidden",
  fontSize: 13,
  fontWeight: 500,
  lineHeight: "21px",
  "@media": {
    "screen and (max-width: 1024px)": {
      fontSize: 12,
      lineHeight: "18px",
    },
  },
});
