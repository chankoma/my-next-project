import CategoryList from "@/app/components/CategoryList";
import NewsList from "@/app/components/NewsList";
import Pagenation from "@/app/components/Pagenation";
import { News_List_Limit } from "@/app/constants";
import { getCategory, getNewsList } from "@/app/libs/microcms";
import notFound from "@/app/not-found";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const { contents: news, totalCount } = await getNewsList({
    limit: News_List_Limit,
    offset: News_List_Limit * (current - 1),
  });
  const { contents: category } = await getCategory();
  return (
    <>
      <CategoryList category={category} />
      <NewsList news={news} href={`/news/p/${current}/`} />
      <Pagenation totalCount={totalCount} params={params} href={`/news/p/`} />
    </>
  );
}
