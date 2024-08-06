"use client";
import RefCard from "@web/_component/refCard/RefCard";
import { Reference } from "@web/(anyAuth)/reference/_lib/ref.type";
import { cardList } from "./refList.css";
import PagePagination from "@/app/_component/pagination/PagePagination";
import { useRouter } from "next/navigation";

interface RefListProps {
  references: Reference[];
  currentPage: number;
  total: number;
}

export default function RefList({ references, total, currentPage }: RefListProps) {
  const router = useRouter();
  return (
    <>
      <div className={cardList}>
        {references.map((reference) => (
          <RefCard reference={reference} key={reference.id} />
        ))}
      </div>
      <PagePagination
        currentPage={currentPage}
        totalCnt={total}
        pgSize={10}
        groupSize={10}
        onChange={(page) => router.push(`/reference?page=${page}`)}
      />
    </>
  );
}