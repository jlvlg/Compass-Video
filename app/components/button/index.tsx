import React from "react";

export default function Button<
  P extends React.ComponentProps<Q>,
  Q extends React.ElementType | keyof React.ReactHTML
>({ as, children, ...props }: React.PropsWithChildren<{ as?: Q } & P>) {
  const Real = as || "button";

  return <Real {...props}>{children}</Real>;
}
