import { News_List_Limit } from "@/app/constants";
import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  totalCount: number;
  params: {
    current: string;
  };
  href: string;
};

export default function Pagenation({ totalCount, params, href }: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / News_List_Limit) },
    (_, i) => i + 1
  );
  const current = parseInt(params.current, 10);

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            <Link
              href={href + p}
              className={
                current == p || (!current && p == 1)
                  ? styles.itemOn
                  : styles.itemOff
              }
            >
              {p}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
