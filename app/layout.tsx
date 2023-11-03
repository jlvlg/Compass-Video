import { Provider } from "@/store";
import type { Metadata } from "next";
import EnsureLogin from "./components/util/EnsureLogin";
import * as fonts from "@/styles/fonts";
import Header from './components/navbar/Header'; // Suponha que o arquivo Header.tsx está em '../components/navbar' em relação ao diretório do seu layout.



export const metadata: Metadata = {
  title: "Compass Video",
};

export default function RootLayout() {
  return (
    <Provider>
      <html
        className={`${fonts.montserrat.variable} ${fonts.lato.variable}`}
        lang="en"
        style={{ blockSize: "100%" }}>
        <body style={{ margin: 0, blockSize: "100%" }}>
          <Header />
          <EnsureLogin></EnsureLogin>
        </body>
      </html>
    </Provider>
  );
}
