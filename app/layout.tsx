import { Provider } from "@/store";
import type { Metadata } from "next";
import * as fonts from "@/styles/fonts";
import Header from "./components/navbar";
import Footer from "./components/ui/footer/Footer";
import PlayerShow from "./components/player-show/PlayerShow";

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
        <body style={{ margin: 0, backgroundColor: "#1A1D29" }}>
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
