import Article from "@/app/components/Article";
import { getNewsDetail } from "@/app/libs/microcms";
import ButtonLink from "@/app/components/ButtonLink";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
    current?: string;
    id?: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getNewsDetail(params.slug);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ""],
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug);

  return (
    <>
      <Article data={data} />
      <ButtonLink href="/news">一覧に戻る</ButtonLink>
    </>
  );
}
