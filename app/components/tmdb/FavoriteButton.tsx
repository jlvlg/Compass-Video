import React from "react";
import Button from "../button";
import icon from "@/public/icons/star.svg";
import styles from "./Button.module.scss";

type Props = {};

export function FavoriteButton({}: Props) {
  return <Button Icon={icon} className={styles.button} />;
}
