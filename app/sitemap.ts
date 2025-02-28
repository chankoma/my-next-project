import { MetadataRoute } from "next";
import { getAllNewsList, News } from "./libs/microcms";

const buildUrl = (path?: string) =>
  `https://chankoma-next-blog.vercel.app${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsContents: any = await getAllNewsList();

  const newsUrls: MetadataRoute.Sitemap = newsContents.map((content: News) => ({
    url: buildUrl(`/news/${content.id}`),
    lastModified: content.revisedAt,
  }));

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/members"),
      lastModified: now,
    },
    {
      url: buildUrl("/news"),
      lastModified: now,
    },
    ...newsUrls,
  ];
}
