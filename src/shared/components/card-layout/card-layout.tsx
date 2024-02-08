import { Paper } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import styles from "./card-layout.module.scss";
interface CardLayoutProps extends PropsWithChildren {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  [key: string]: any;
}
export default function CardLayout(props: CardLayoutProps) {
  return (
    <Paper
      {...props}
      className={`${props.className && props.className} ${styles.header}`}
    >
      <div className={`${props.header && "border-b"} ${styles.headerTitle}`}>
        {props.header && props.header}
      </div>
      <div className={styles.body}>{props.children}</div>
      <div className={`${props.footer && "border-t"} ${styles.footer}`}>
        {props.footer && props.footer}
      </div>
    </Paper>
  );
}
