import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

export const globalVar = createGlobalThemeContract({
  blueActive: "blueActive",
  blueHover: "blueHover",
  blueDefault: "blueDefault",
  blueDisabled: "blueDisabled",

  grayActive: "grayActive",
  grayHover: "grayHover",
  grayDefault: "grayDefault",
  grayDisabled: "grayDisabled",

  purpleActive: "purpleActive",
  purpleHover: "purpleHover",
  purpleDefault: "purpleDefault",
  purpleDisabled: "purpleDisabled",
});

export const whiteGlobalTheme = {
  blueActive: "#4F66D8", // 20%
  blueHover: "#354CBE", // 10%
  blueDefault: "#1C33A5", // 0%
  blueDisabled: "#02198B", // -10%

  grayActive: "#E6E6E6", // 10%
  grayHover: "#D9D9D9", // 5%
  grayDefault: "#cccccc", // 0%
  grayDisabled: "#B3B3B3", // -10%

  purpleActive: "#9C8AFF", // 20%
  purpleHover: "#7D63FF", // 10%
  purpleDefault: "#BAA8FF", // 0%
  purpleDisabled: "#997FFF", // -10%
};

const darkGlobalTheme = {
  blueActive: "#000", // 20%
  blueHover: "#000", // 10%
  blueDefault: "#000", // 0%
  blueDisabled: "#000", // -10%

  grayActive: "#000", // 10%
  grayHover: "#000", // 5%
  grayDefault: "#000", // 0%
  grayDisabled: "#000", // -10%

  purpleActive: "#000", // 20%
  purpleHover: "#000", // 10%
  purpleDefault: "#000", // 0%
  purpleDisabled: "#000", // -10%
};

createGlobalTheme(":root", globalVar, whiteGlobalTheme);

globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: assignVars(globalVar, darkGlobalTheme),
    },
  },
});
