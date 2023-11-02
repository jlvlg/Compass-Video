import { Provider } from "@/store";
import type { Metadata } from "next";
import { montserrat } from "@/styles/fonts";
import "@/styles/global.css";
import EnsureLogin from "./components/EnsureLogin";

export const metadata: Metadata = {
  title: "Compass Video",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <Provider>
      <html lang="en" className={montserrat.className}>
        <body>{children}</body>
      </html>
    </Provider>
  );
}
