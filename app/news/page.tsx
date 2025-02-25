import { getCategory, getNewsList } from "../libs/microcms";
import NewsList from "../components/NewsList";
import CategoryList from "../components/CategoryList";
import { News_List_Limit } from "../constants";
import Pagenation from "../components/Pagenation";

type Props = {
  params: {
    current: string;
  };
};

export const revalidate = 0;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);
  const { contents: news, totalCount } = await getNewsList({
    limit: News_List_Limit,
    offset: News_List_Limit * (current - 1),
  });
  const { contents: category } = await getCategory();

  return (
    <>
      <CategoryList category={category} />
      <NewsList news={news} href={`/news/`} />
      <Pagenation totalCount={totalCount} params={params} href={`/news/p/`} />
    </>
  );
}
