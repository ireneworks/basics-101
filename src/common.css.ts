import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const root = createGlobalTheme(":root", {
  color: {
    white: "#FFFFFF",
    black: "#000000",
    gray50: "#F9FAFB",
    gray100: "#F1F4F6",
    gray150: "#EAEDF0",
    gray200: "#DFE3E8",
    gray300: "#C4CDD5",
    gray400: "#AAB5C0",
    gray500: "#919EAB",
    gray600: "#768695",
    gray700: "#637381",
    gray800: "#454F5B",
    gray900: "#212B36",
    blue50: "#E5F6FE",
    blue100: "#CCEDFD",
    blue200: "#B2E4FC",
    blue300: "#8FD8FB",
    blue400: "#5CC7F9",
    blue500: "#29B5F8",
    blue600: "#00A7F6",
    blue700: "#007EBA",
    blue800: "#005C96",
    blue900: "#004262",
    orange50: "#FFEFE5",
    orange100: "#FFE0CC",
    orange200: "#FFD0B2",
    orange300: "#FFBB8F",
    orange400: "#FF9D5C",
    orange500: "#FF7E29",
    orange600: "#FF6500",
    orange700: "#D35200",
    orange800: "#A13F00",
    orange900: "#662800",
  },
});

globalStyle("body", {
  margin: 0,
  width: "100%",
  height: "100%",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("ul", {
  margin: 0,
  padding: 0,
  listStyle: "none",
});

globalStyle("li", {
  width: "100%",
  height: "fit-content",
});

globalStyle("h1", {
  margin: 0,
  padding: 0,
  fontSize: 48,
  fontWeight: 900,
  color: root.color.gray900,
  letterSpacing: -0.4,
  lineHeight: "52px",
  "@media": {
    "screen and (max-width: 1024px)": {
      fontSize: 36,
      lineHeight: 1.3,
    },
  },
});

globalStyle("h2", {
  margin: 0,
  padding: 0,
  fontSize: 32,
  fontWeight: 900,
  color: root.color.gray900,
  letterSpacing: -0.4,
  lineHeight: "32px",
  "@media": {
    "screen and (max-width: 1024px)": {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },
});

globalStyle("h4", {
  margin: 0,
  padding: 0,
  fontSize: 20,
  fontWeight: 900,
  color: root.color.gray900,
  letterSpacing: -0.4,
  lineHeight: "18px",
});

globalStyle("h6", {
  margin: 0,
  padding: 0,
  fontSize: 11,
  fontWeight: 500,
  color: root.color.gray600,
  lineHeight: 1.5,
  letterSpacing: -0.3,
});

globalStyle("p", {
  margin: 0,
  fontWeight: 500,
  fontSize: 15,
  lineHeight: "24px",
  letterSpacing: -0.1,
  color: root.color.gray700,
  whiteSpace: "pre-line",
  "@media": {
    "screen and (max-width: 1024px)": {
      lineHeight: "25px",
    },
  },
});

globalStyle("button", {
  border: "none",
  background: "transparent",
  margin: 0,
  padding: 0,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
});
