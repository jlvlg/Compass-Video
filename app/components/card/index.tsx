import React from "react";
import styles from "./Card.module.scss";

type Props = { style?: React.CSSProperties; className?: String };

export default function Card({ style, className, children }: React.PropsWithChildren<Props>) {
  return (
    <div className={`${styles.card} ${className}`} style={style}>
      {children}
    </div>
  );
}
