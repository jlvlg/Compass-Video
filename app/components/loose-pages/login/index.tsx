"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import compass from "@/public/compass-negative.png";
import Card from "../../ui/card";
import styles from "./Login.module.scss";
import Button from "../../button";
import tmdb from "@/util/tmdb";
import { useRouter } from "next/navigation";
import { actions, useDispatch } from "@/store";

type Props = { searchParams: { [key: string]: string | string[] | undefined } };

export default function Login({ searchParams }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams["request_token"]) {
      dispatch(actions.users.login(searchParams["request_token"]));
    }
  }, [searchParams, dispatch]);

  async function authenticate() {
    try {
      const requestToken = (await tmdb.get("authentication/token/new")).data[
        "request_token"
      ];
      router.replace(
        `/login/${requestToken}?redirect_to=http://localhost:3000`
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className={styles.main}>
      <Card className={styles.card}>
        <h1>Compass Video</h1>
        <p className={styles.subtitle}>
          Acesse sua conta para ver nossos títulos
        </p>
        <Button className={styles.button} onClick={authenticate}>
          Iniciar sessão com TMDB
        </Button>
        <p className={styles.guest}>
          Não tem conta? <a>Acesse como convidado</a>
        </p>
        <Image src={compass} alt="Compass Logo" className={styles.compass} />
      </Card>
    </main>
  );
}
