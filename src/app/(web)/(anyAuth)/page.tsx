import { getWasUrl } from "@/app/_lib/getWasUrl";
import CardSection from "@web/_component/card/CardSection";
import { Reference } from "./reference/_lib/ref.type";
import RefList from "@web/_component/refCard/RefList";
import Link from "next/link";

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
    <div>
      <CardSection />
      <section>
        <h2>참고자료</h2>
        <RefList references={body.data.reference} />
        <div>
          <Link href="/reference">더보기 +</Link>
        </div>
      </section>
    </div>
  );
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const fetchCache = "default-no-store";
