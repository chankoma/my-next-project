import Image from "next/image";
import styles from "./page.module.css";
import { getMemberList } from "../libs/microcms";
import { MEMBERS_LIST_LIMIT } from "../constants";

export default async function Page() {
  const data = await getMemberList({ limit: MEMBERS_LIST_LIMIT });
  return (
    <div>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>no member</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dt className={styles.position}>{member.position}</dt>
                <dt className={styles.profile}>{member.profile}</dt>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
