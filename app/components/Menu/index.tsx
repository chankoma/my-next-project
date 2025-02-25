"use client";

import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { useState } from "react";

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
              news
            </Link>
          </li>
          <li>
            <Link href="/members" onClick={close}>
              members
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={close}>
              contact
            </Link>
          </li>
        </ul>
        <button className={styles.close} onClick={close}>
          x
        </button>
      </nav>
      <button className={isOpen ? styles.nav : styles.button} onClick={open}>
        <Image src="/menu.png" alt="menu" width={48} height={48} />
      </button>
    </div>
  );
}
