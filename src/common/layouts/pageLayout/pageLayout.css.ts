import { style } from "@vanilla-extract/css";

export const pageLayout = style({
  width: 800,
  "@media": {
    "screen and (max-width: 768px)": {
      width: "100%",
    },
  },
});

export const description = style({
  marginTop: 32,
});
