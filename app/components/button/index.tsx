import React from "react";
import styles from "./Button.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  className?: string;
  icon?: StaticImageData;
};

export default function Button<
  T extends React.ComponentProps<P>,
  P extends React.ElementType | keyof React.ReactHTML = "button"
>({
  as,
  children,
  className,
  icon,
  ...props
}: React.PropsWithChildren<Props & { as?: P } & T>) {
  const Real = as || "button";

  return (
    <Real
      {...props}
      className={`${styles.button} ${className || ""}`}
      style={props.style}>
      {icon && <Image src={icon} alt="Button icon" />}
      {children}
    </Real>
  );
}
