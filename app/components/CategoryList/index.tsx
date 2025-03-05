import { Category } from "@/app/libs/microcms";
import styles from "./index.module.css";
import Link from "next/link";

type Props = {
  category: Category[];
};

export default function CategoryList({ category }: Props) {
  return (
    <div className={styles.categoryList}>
      <h4>category</h4>
      {category.map((n) => (
        <Link
          key={n.id}
          href={`/news/category/${n.id}/p/1`}
          className={styles.tag}
        >
          {n.name}
        </Link>
      ))}
    </div>
  );
}
