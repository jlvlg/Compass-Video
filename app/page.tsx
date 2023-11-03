"use client";

import React, { useEffect, useState } from "react";
import { actions, useDispatch, useSelector } from "@/store";
import Login from "./components/loose-pages/login";
import getMedia from "@/util/homeMedia";
import Catalog from "./components/ui/catalog";
import Header from "./components/navbar/Header";

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

interface Media {
  slug: string;
  title: string;
  items: {}[];
}

function Home({ searchParams }: Props) {

    const [homeMediaList, setHomeMediaList] = useState<Media[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const list = await getMedia.getHomeList();
        setHomeMediaList(list);
        console.log(list);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    load();
  }, []);

  return (
    <>
      <div style={{ background: "#1A1D29" }}>
        <Header/> 
        <Catalog mediaList={homeMediaList} />
      </div>
    </>
  );
}
