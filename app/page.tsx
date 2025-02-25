import styles from "./page.module.css";
import Image from "next/image";
import NewsList from "./components/NewsList";
import ButtonLink from "./components/ButtonLink";
import { getNewsList } from "./libs/microcms";
import { TOP_NEWS_LIST } from "./constants";
import Hero from "./components/Hero";
import Sheet from "./components/Sheet";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIST,
  });

  return (
    <>
      <Hero title="blog" sub="地方公務員の趣味ブログ" />
      <Sheet>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} href={"/news/"} />
        <ButtonLink href="/news">ニュース一覧</ButtonLink>
      </Sheet>
    </>
  );
}
