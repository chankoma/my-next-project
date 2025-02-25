import { getCategory, getNewsList } from "@/app/libs/microcms";
import NewsList from "@/app/components/NewsList";
import CategoryList from "@/app/components/CategoryList";
import Pagenation from "@/app/components/Pagenation";
import { News_List_Limit } from "@/app/constants";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = 1;
  const { contents: news, totalCount } = await getNewsList({
    limit: News_List_Limit,
    offset: News_List_Limit * (current - 1),
    filters: `category[equals]${params.id}`,
  });
  const { contents: category } = await getCategory();
  return (
    <>
      <CategoryList category={category} />
      <NewsList
        news={news}
        href={`/news/category/${params.id}/p/${params.current}/`}
      />
      <Pagenation
        totalCount={totalCount}
        params={params}
        href={`/news/category/${params.id}/p/`}
      />
    </>
  );
}
