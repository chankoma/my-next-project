import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";
import { FaGlasses } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <FaGlasses className={styles.icon} />
        <span className={styles.logo}>Top</span>
      </Link>
      <Menu />
    </header>
  );
}
