import { Provider } from "@/store";
import type { Metadata } from "next";
import { montserrat } from "@/styles/fonts";
import EnsureLogin from "./components/loose-pages/EnsureLogin";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Compass Video",
};

export default function RootLayout() {
  return (
    <Provider>
      <html lang="en" className={montserrat.className}>
        <body>
          <EnsureLogin></EnsureLogin>
        </body>
      </html>
    </Provider>
  );
}
