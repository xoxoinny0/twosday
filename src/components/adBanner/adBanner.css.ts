import { style } from "@vanilla-extract/css";

export const wrap = style([
  {
    textAlign: "center",
    padding: 7,
    display: "flex",
    maxWidth: "100%",
    minWidth: "0px",
    overflow: "hidden",
    justifyContent: "center",
  },
]);
