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
        description="A searchable database for educational institutions in Liberia"
        canonical="https://www.studyinliberia.xyz"
        openGraph={{
          url: "https://www.studyinliberia.xyz",
          title: "Educational institutions in Liberia",
          description:
            "A searchable database for educational institutions in Liberia",
          images: [
            {
              url: "/freddie-marriage.jpg",
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
