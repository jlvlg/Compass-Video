import React from "react";
import Stack from "../../ui/stack";
import Image from "next/image";
import loginImage from "@/public/login-mural.png";
import compass from '@/public/compass-negative.png'
import Card from "../../ui/card";
import styles from "./Login.module.scss";
import Button from "../../button";

type Props = {};

export default function Login({}: Props) {
  return (
      <main className={styles.main}>
        <Card className={styles.card}>
          <h1>Compass Video</h1>
          <p className={styles.subtitle}>Acesse sua conta para ver nossos títulos</p>
          <Button as="a" className={styles.button}>Iniciar sessão com TMDB</Button>
          <p className={styles.guest}>Não tem conta? <a>Acesse como convidado</a></p>
          <Image src={compass} alt="Compass Logo" className={styles.compass}/>
        </Card>
      </main>
  );
}
