import { getWasUrl } from "@/app/_lib/getWasUrl";
import RefCard from "@web/_component/refCard/RefCard";
import { cardList } from "@web/_component/refCard/refList.css";
import Link from "next/link";
import CardSlider from "./_component/card/CardSlider";
import { Reference } from "./reference/_lib/ref.type";
import * as css from "./page.css";
import TechBelt from "./_component/TechBelt";
import HeroSection from "./_component/HeroSection";

export default async function Page() {
  const response = await fetch(`${getWasUrl()}/api/twosday/reference?page=1`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const body: {
    data: { reference: Reference[]; total: number; length: number };
    message: string[];
  } = await response.json();

  return (
    <main className={css.wrap}>
      <HeroSection />
      <section className={css.section}>
        <div className={css.sectionTitleBox}>
          <h2>인기 게시글</h2>
          <Link href="/post">+ 더보기</Link>
        </div>
        <div className={css.cardSliderBox}>
          <CardSlider />
        </div>
      </section>
      <section className={css.section}>
        <div className={css.sectionTitleBox}>
          <h2>최근 게시글</h2>
          <Link href="/post">+ 더보기</Link>
        </div>
        <div>
          <CardSlider />
        </div>
      </section>
      <div className={css.beltBox}>
        <TechBelt />
      </div>
      <section className={css.section}>
        <div className={css.sectionTitleBox}>
          <h2>레퍼런스</h2>
          <Link href="/reference">+ 더보기</Link>
        </div>
        <div className={cardList}>
          {body.data.reference.map((reference) => (
            <RefCard reference={reference} key={reference.id} />
          ))}
        </div>
      </section>
    </main>
  );
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const fetchCache = "default-no-store";
