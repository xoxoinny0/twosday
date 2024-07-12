"use client";

import Kakao from "@/asset/svg/kakao.svg?react";
import Google from "@/asset/svg/google.svg?react";
import * as css from "../page.css";
import AuthBtn from "./AuthBtn";
import { getWasUrl } from "@/app/_lib/getWasUrl";
import { useRouter } from "next/navigation";

export default function AuthButtonGroup() {
  const router = useRouter();

  const onClick = (provider: "google" | "kakao") => {
    document.cookie =
      "redirect=" + encodeURIComponent(process.env.NEXT_PUBLIC_API_URL) + ";domain=twosday.live";

    window.location.href = `${getWasUrl()}/api/auth/${provider}`;
  };

  return (
    <div className={css.btnWrap}>
      <AuthBtn
        icon={<Kakao />}
        text="카카오 계정으로 계속하기"
        type="kakao"
        onClick={() => onClick("kakao")}
      />
      <AuthBtn icon={<Google />} text="구글 계정으로 계속하기" onClick={() => onClick("google")} />
      <AuthBtn
        text="이메일로 계속하기"
        onClick={() => {
          router.push("/login/email");
        }}
      />
    </div>
  );
}
