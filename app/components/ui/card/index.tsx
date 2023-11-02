import React from "react";
import styles from "./Card.module.css";

type Props = { style?: React.CSSProperties; className?: String };

export default function Card({ style, className }: Props) {
  return (
    <div className={`${styles.card} ${className}`} style={style}>
      Card
    </div>
  );
}
