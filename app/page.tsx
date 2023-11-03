"use client";

import React, { useEffect, useState } from "react";
import { actions, useDispatch, useSelector } from "@/store";
import { useRouter } from "next/navigation";
import Login from "./components/loose-pages/login";

type Props = { searchParams: { [key: string]: string | string[] | undefined } };

export default function HomePage({ searchParams }: Props) {
  const sessionId = useSelector((state) => state.users.sessionId);
  const dispatch = useDispatch();

  useEffect(() => {
    const localSessionId = localStorage.getItem("sessionId");
    if (localSessionId) {
      dispatch(actions.users.login(localSessionId));
    }
  }, [actions, dispatch]);

  return (
    <>
      {sessionId ? (
        <Home searchParams={searchParams} />
      ) : (
        <Login searchParams={searchParams} />
      )}
    </>
  );
}

function Home({ searchParams }: Props) {
  return <></>;
}
