import { style } from "@vanilla-extract/css";
import { root } from "../../../common.css.ts";

export const layout = style({
  display: "flex",
  height: "100vh",
  "@media": {
    "screen and (max-width: 1024px)": {
      flexDirection: "column",
    },
  },
});

export const nav = style({
  flex: "0 0 300px",
  borderRight: `1px solid ${root.color.gray100}`,
  overflowY: "auto",
});

export const navMobile = style({
  "@media": {
    "screen and (max-width: 1024px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px",
    },
  },
});

export const navMobileMenuButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const navMobileHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 20,
});

export const navMobileContainer = style({
  "@media": {
    "screen and (max-width: 1024px)": {
      width: "100%",
      height: "100vh",
      overflowY: "auto",
      scrollbarWidth: "none",
    },
  },
});

export const main = style({
  flex: 1,
  padding: "40px 52px",
  overflowY: "auto",
  "@media": {
    "screen and (max-width: 1024px)": {
      padding: "16px 20px 32px",
    },
  },
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  padding: "40px 20px 40px",
  boxSizing: "border-box",
});

export const logo = style({
  textAlign: "left",
  fontSize: 24,
  fontWeight: 900,
  color: root.color.gray900,
  letterSpacing: -0.4,
  lineHeight: "32px",
  cursor: "pointer",
});

export const listItems = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "32px 0",
  borderBottom: `1px solid ${root.color.gray100}`,
});

export const listItemTitle = style({
  width: "100%",
  marginBottom: 14,
  padding: "0 20px",
  fontSize: 15,
  fontWeight: 900,
  color: root.color.gray900,
  letterSpacing: -0.4,
  boxSizing: "border-box",
});

export const childMenu = style({
  width: "100%",
  padding: "12px 20px",
  textAlign: "left",
  fontSize: 13,
  fontWeight: 600,
  color: root.color.gray600,
  letterSpacing: -0.3,
  cursor: "pointer",

  selectors: {
    "&:hover": {
      color: root.color.gray900,
      backgroundColor: root.color.gray50,
    },
  },
});

export const childMenuActive = style([
  childMenu,
  {
    color: root.color.blue600,
  },
]);

export const footer = style({
  margin: "40px 20px",
});
