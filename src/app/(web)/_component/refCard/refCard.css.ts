import { textLine } from "@/style/var";
import { style } from "@vanilla-extract/css";

export const wrap = style({
  width: "300px",
  padding: "1em",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px",
});

export const imgBox = style({
  display: "inline-block",
  overflow: "hidden",
  marginBottom: "1em",
  aspectRatio: "16 / 9",
  cursor: "pointer",
});

export const img = style({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  objectPosition: "center center",
});

export const descBox = style({});

export const title = style([
  textLine(1.4, 2),
  {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 500,
  },
]);

export const desc = style([
  textLine(1.4, 2),
  {
    fontSize: 12,
  },
]);
