import { PropsWithChildren } from "react";
import styles from "./Box.module.css";

export interface BoxProps {
  plain?: boolean;
  title?: string;
}

export default function Box({
  children,
  plain,
  title,
}: PropsWithChildren<BoxProps>) {
  const isServer = typeof window === "undefined";
  const titleText = title ?? `${isServer ? "Server" : "Client"} Component`;

  if (plain) {
    return <div className={styles.box}>{children}</div>;
  }

  return (
    <div
      className={`${styles.box} ${isServer ? styles.server : styles.client}`}
    >
      {titleText && <strong className={styles.title}>{titleText}</strong>}
      {children}
    </div>
  );
}
