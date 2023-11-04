import { Provider } from "@/store";
import type { Metadata } from "next";
import * as fonts from "@/styles/fonts";
import Header from './components/navbar/Header'; 
import Footer from "./components/ui/footer/Footer";

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
        <body style={{ margin: 0, blockSize: "100%" }}>
          <Header />

          {children}

          <Footer />
          </body>
      </html>
    </Provider>
  );
}
