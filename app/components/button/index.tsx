import React from "react";
import styles from "./Button.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  className?: string;
  Icon?: any;
};

export default function Button<
  T extends React.ComponentProps<P>,
  P extends React.ElementType | keyof React.ReactHTML = "button"
>({
  Real,
  children,
  className,
  Icon,
  ...props
}: React.PropsWithChildren<Props & { Real?: P } & T>) {
  Real = Real || "button";

  return (
    <Real
      {...props}
      className={`${styles.button} ${className || ""}`}
      style={props.style}>
      {Icon && <Icon />}
      {children}
    </Real>
  );
}
