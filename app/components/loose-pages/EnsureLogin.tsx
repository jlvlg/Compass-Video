"use client";

import React from "react";
import { useSelector } from "@/store";
import Login from "./Login";

type Props = {};

export default function EnsureLogin({
  children,
}: React.PropsWithChildren<Props>) {
  const isLoggedIn = useSelector((state) => state.users.sessionId);

  return <>{isLoggedIn ? children : <Login />}</>;
}
