import Article from "@/app/components/Article";
import { getNewsDetail } from "@/app/libs/microcms";
import ButtonLink from "@/app/components/ButtonLink";

type Props = {
  params: {
    slug: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug);

  return (
    <>
      <Article data={data} />
      <ButtonLink href={`/news/p/${params.current}`}>一覧に戻る</ButtonLink>
    </>
  );
}
