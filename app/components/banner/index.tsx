import { Movie, Series } from "@/util/model";
import React from "react";

type Props = { popular: Movie | Series };

export default function Banner({ popular }: Props) {
  return (
    <section>{popular instanceof Movie ? popular.title : popular.name}</section>
  );
}
