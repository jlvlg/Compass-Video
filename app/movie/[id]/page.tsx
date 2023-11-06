import React from "react";

type Props = { params: { id: number } };

export default function page({ params }: Props) {
  return <div>{params.id}</div>;
}
