import React from "react";
import Stack from "../../ui/stack";
import Image from "next/image";
import loginImage from "@/public/login-mural.png";
import Card from "../../ui/card";
import styles from "./Login.module.scss";

type Props = {};

export default function Login({}: Props) {
  return (
    <Stack align={{horizontally: 'center', vertically: 'center'}}>
      <Image className={styles.image} src={loginImage} alt="Mural of videos" />
      <Card className={styles.card}><h1>Compass Video</h1></Card>
    </Stack>
  );
}
