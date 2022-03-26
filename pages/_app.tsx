import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextSeo
        title="Educational institutions in Liberia"
        titleTemplate="Educational institutions in Liberia"
        defaultTitle="Educational institutions in Liberia"
        description="Find all the educational institutions in Liberia and details about location,contacts, facilities, ratings and more"
        canonical="https://www.studyinliberia.xyz"
        openGraph={{
          url: "https://www.studyinliberia.xyz",
          title: "Educational institutions in Liberia",
          description:
            "Find all the educational institutions in Liberia and details about location,contacts, facilities, ratings and more",
          images: [
            {
              url: "https://www.studyinliberia.xyz/freddie-marriage.png",
              width: 800,
              height: 420,
              alt: "Educational institutions in Liberia",
            },
          ],
        }}
      />
      <Component {...pageProps} />{" "}
    </Layout>
  );
}

export default MyApp;
