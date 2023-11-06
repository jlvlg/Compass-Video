import React from "react";
import Button from "../button";
import icon from "@/public/icons/plus.svg";
import styles from "./Button.module.scss";

type Props = {};

export function WishlistButton({}: Props) {
  return <Button Icon={icon} className={styles.button} />;
}
