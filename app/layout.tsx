import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://chankoma-next-blog.vercel.app"),
  title: {
    template: "%s | 地方公務員の趣味ブログ",
    default: "地方公務員の趣味ブログ",
  },
  description:
    "地方公務員chankomaの趣味であるプログラミングと投資について紹介するブログです。",
  openGraph: {
    title: "地方公務員の趣味ブログ",
    description:
      "地方公務員chankomaの趣味であるプログラミングと投資について紹介するブログです。",
  },
  alternates: {
    canonical: "https://chankoma-next-blog.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
