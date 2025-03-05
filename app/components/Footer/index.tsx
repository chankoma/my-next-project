import { FaGlasses } from "react-icons/fa6";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/news">news</a>
          </li>
          <li className={styles.item}>
            <a href="/members">members</a>
          </li>
          <li className={styles.item}>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </nav>
      <span>@chankoma</span>
      <FaGlasses className={styles.cr} />
    </footer>
  );
}
