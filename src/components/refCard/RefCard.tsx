/* eslint-disable @next/next/no-img-element */
import { Reference } from "@/types/ref";
import * as css from "./refCard.css";

interface RefCardProps {
  reference: Reference;
}

export default function RefCard({ reference }: RefCardProps) {
  return (
    <article className={css.wrap}>
      <a className={css.imgBox} target="_blank" href={reference.url}>
        <img className={css.img} src={reference.thumbnail} alt={reference.title} />
      </a>
      <div className={css.descBox}>
        <a target="_blank" href={reference.url}>
          <h4 className={css.title}>{reference.title}</h4>
        </a>
        <p className={css.desc}>{reference.description}</p>
      </div>
    </article>
  );
}
