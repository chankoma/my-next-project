"use client";

import Link from "next/link";
import styles from "./index.module.css";
import { useState } from "react";
import { FaBars, FaNewspaper, FaRegFaceGrin } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);
  return (
    <div>
      <nav className={isOpen ? styles.open : styles.nav}>
        <ul className={styles.items}>
          <li>
            <Link href="/news" onClick={close}>
              <FaNewspaper className={styles.icon} />
              news
            </Link>
          </li>
          <li>
            <Link href="/members" onClick={close}>
              <FaRegFaceGrin className={styles.icon} />
              members
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={close}>
              <FaRegComment className={styles.icon} />
              contact
            </Link>
          </li>
        </ul>
        <button className={styles.close} onClick={close}>
          x
        </button>
      </nav>
      <button className={isOpen ? styles.nav : styles.button} onClick={open}>
        <FaBars className={styles.bar} />
      </button>
    </div>
  );
}
