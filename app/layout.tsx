import { Provider } from "@/store";
import type { Metadata } from "next";
import * as fonts from "@/styles/fonts";
import Login from "./Login";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Compass Video",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <Provider>
      <html
        className={`${fonts.montserrat.variable} ${fonts.lato.variable}`}
        lang="en"
        style={{ blockSize: "100%" }}>
        <body
          style={{
            margin: 0,
            backgroundColor: "#1A1D29",
            blockSize: "100%",
          }}>
          {children}
        </body>
      </html>
    </Provider>
  );
}
