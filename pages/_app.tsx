import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { NextSeo } from "next-seo";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="all" />
      </Head>
      <NextSeo
        title="Educational institutions in Liberia"
        titleTemplate="Educational institutions in Liberia"
        defaultTitle="Educational institutions in Liberia"
        description="Find all the educational institutions in Liberia and details about location,contacts, facilities, ratings and more"
        canonical="https://schools.studyinliberia.xyz"
        openGraph={{
          url: "https://schools.studyinliberia.xyz",
          title: "Educational institutions in Liberia",
          description:
            "Find all the educational institutions in Liberia and details about location,contacts, facilities, ratings and more",
          images: [
            {
              url: "https://schools.studyinliberia.xyz/freddie-marriage.png",
              width: 800,
              height: 420,
              alt: "Educational institutions in Liberia",
            },
          ],
        }}
      />
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
