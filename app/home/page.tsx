import React from "react";
import tmdb from "@/util/tmdb";
import Banner from "../components/banner";

type Props = {};

export const revalidate = 60;

export default async function Home({}: Props) {
  const popularMedia = await tmdb.popular;
  return <Banner popular={popularMedia[0]} />;
}
