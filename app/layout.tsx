import { Provider } from "@/store";
import type { Metadata } from "next";
import EnsureLogin from "./components/util/EnsureLogin";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Compass Video",
};

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout() {
  return (
    <Provider>
      <html className={`${montserrat.variable}`}
        lang="en"
        style={{ blockSize: "100%" }}>
        <body style={{ margin: 0, blockSize: "100%" }}>
          <EnsureLogin></EnsureLogin>
        </body>
      </html>
    </Provider>
  );
}
