import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import type { News } from "@/app/libs/microcms";
import Category from "../Category";
import Date from "../Date";

type Props = {
  news: News[];
  href: string;
};

export default function NewsList({ news, href }: Props) {
  if (news.length === 0) {
    return "no news";
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={href + article.id} className={styles.link}>
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                className={styles.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image src="/no-image.png" alt="" width={1200} height={630} />
            )}
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date
                  date={
                    article.publishedAt?.substring(0, 10) ??
                    article.createdAt.substring(0, 10)
                  }
                />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
