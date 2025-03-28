import { TPost, TPostOrderBy } from "@/libraries/pg/posts/posts.dto";
import Card from "./Card";
import { wrap } from "./cardSection.css";
import { TSelectPost } from "@/libraries/pg/posts/posts.type";

interface CardSectionProps {
  post: TSelectPost[];
  order: TPostOrderBy;
}

export default function CardSection({ post, order }: CardSectionProps) {
  return (
    <section className={wrap}>
      {post.map((item) => (
        <Card key={`${item.id}_${order}`} post={item} />
      ))}
    </section>
  );
}
