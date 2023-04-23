import { ReactNode } from "react";
import { Link } from "react-router-dom";

import GitHubLink from "../routes/Home/GitHubLink";
import styles from "./Header.module.css";

export default function Header({ title }: { title?: ReactNode }) {
  return (
    <div className={styles.Header}>
      <div className={styles.Nav}>
        <Link className={styles.HomeLink} to="/">
          Home
        </Link>
        {title && (
          <>
            <span className={styles.Arrow}>/</span>
            <span className={styles.Title}>{title}</span>
          </>
        )}
      </div>

      <GitHubLink />
    </div>
  );
}
