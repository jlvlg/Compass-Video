import React from "react";
import styles from "./Stack.module.css";

type Props = {
  align?: { horizontally?: string; vertically?: string };
  style?: React.CSSProperties;
  className?: string;
};

export default function Stack({
  align,
  children,
  style,
  className,
}: React.PropsWithChildren<Props>) {
  const alignCss = {
    justifyContent: align?.horizontally,
    alignItems: align?.vertically,
  };

  return (
    <div
      className={`${styles.stack} ${align && styles.align} ${className}`}
      style={{ ...alignCss, ...style }}>
      {children}
    </div>
  );
}
