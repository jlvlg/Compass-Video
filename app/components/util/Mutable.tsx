import React from "react";

export default function MutableFactory({
  DefaultComponent,
  content,
}: {
  DefaultComponent: React.ElementType | keyof React.ReactHTML;
  content?: React.ReactNode;
}) {
  return function Mutable<
    T extends React.ComponentProps<P>,
    P extends React.ElementType | keyof React.ReactHTML
  >(
    this: { content?: React.ReactNode },
    { children, as, ...props }: React.PropsWithChildren<{ as?: P } & T>
  ) {
    const Real = as;
    if (this?.content) children = this.content;

    return (
      <>
        {Real ? (
          <Real {...props}>{children}</Real>
        ) : (
          <DefaultComponent {...props}>{children}</DefaultComponent>
        )}
      </>
    );
  };
}
