import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>not found the page</dt>
        <dd className={styles.text}>
          the page you accessed is not found.
          <br />
          please get url again.
        </dd>
      </dl>
    </div>
  );
}
