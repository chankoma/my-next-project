import Sheet from "../components/Sheet";
import Hero from "../components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="members" sub="メンバー紹介" />
      <Sheet>{children}</Sheet>
    </>
  );
}
