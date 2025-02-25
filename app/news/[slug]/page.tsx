import Article from "@/app/components/Article";
import { getNewsDetail } from "@/app/libs/microcms";
import ButtonLink from "@/app/components/ButtonLink";

type Props = {
  params: {
    slug: string;
    current?: string;
    id?: string;
  };
};

export const revalidate = 0;

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug);

  return (
    <>
      <Article data={data} />
      <ButtonLink href="/news">一覧に戻る</ButtonLink>
    </>
  );
}
