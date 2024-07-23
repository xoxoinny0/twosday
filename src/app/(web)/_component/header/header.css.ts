import { zIndex } from "@/style/var";
import { globalStyle, style } from "@vanilla-extract/css";

export const wrap = style([{ width: "100%", height: 52 }]);

export const fixed = style([
  zIndex.header,
  {
    height: 52,
    position: "fixed",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    backgroundColor: "#fff",
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
    justifyContent: "space-between",
  },
]);

globalStyle(`${fixed} > div`, {
  display: "flex",
  alignItems: "center",
  gap: 7,
});

export const title = style({
  fontSize: 16,
  fontWeight: 400,
});

export const right = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 10,
});

export const link = style({
  display: "flex",
  alignItems: "center",
  gap: 5,
  padding: "9px 18px",
  borderRadius: 10,
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#f1f3f5",
  },
});
