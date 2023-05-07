import { MouseEvent, PropsWithChildren } from "react";

import styles from "./ContextMenuCategory.module.css";

export function ContextMenuCategory({ children }: PropsWithChildren) {
  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className={styles.ContextMenuCategory}
      data-context-menu-category
      onClick={onClick}
    >
      {children}
    </div>
  );
}
