import { flexCenter } from "@/styles/var";
import { globalStyle, style } from "@vanilla-extract/css";
import { globalVar } from "@/styles/globalTheme.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: 20,
});

export const inputWrap = style({
  border: "none",
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const label = style({
  width: 60,
});

export const inputBox = style({
  display: "flex",
  border: "1px solid #70737C36",
  borderRadius: 10,
  backgroundColor: "transparent",
  padding: "0px 16px",
  height: 48,
});

export const input = style({
  border: "none",
  width: "100%",
  padding: 7,
  ":focus": {
    outline: "none",
  },
});

export const btnBox = style([flexCenter]);

export const loginBtn = style({
  width: "100%",
  height: 40,
  backgroundColor: globalVar.blueDefault,
  padding: "7px 0",
  fontWeight: 600,
  fontSize: 16,
  color: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  borderRadius: 3,
  transition: "background-color 0.2s ease, color 0.2s ease",
  ":hover": {
    backgroundColor: globalVar.blueHover,
  },
  ":disabled": {
    backgroundColor: globalVar.blueDisabled,
  },
});

export const AuthBtnWrap = style([
  flexCenter,
  {
    gap: 8,
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 10,
    border: "1px solid #e1e2e4",
    selectors: {
      "&.kakao": {
        backgroundColor: "#FEE500",
        borderColor: "#FEE500",
      },
    },
  },
]);

globalStyle(`${AuthBtnWrap} > span`, {
  display: "flex",
});

export const formWrap = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 48,
  width: 300,
});

export const signUp = style({
  paddingTop: 48,
  position: "relative",
  borderTop: "1px solid #70737C36",
});

export const division = style({
  position: "absolute",
  top: 0,
  left: 50,
  transform: "translateY(-50%) translateX(-50%)",
  padding: "0px 12px",
  color: "#70737C36",
});
