import { useEffect } from "react";
import "../styles/style.scss";
import Head from "next/head";
import TagManager from "react-gtm-module";
import Provider from "./context";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => TagManager.initialize("GTM-K668KS3"), []);
  return (
    <Provider>
      <Head>
        <title>Bilog Payments</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:url"
          content="https://payments.bilog.com.ar"
          key="url"
        />
        <meta property="og:title" content="Bilog | Payments" key="title" />
        <meta
          property="og:description"
          content="Hacemos fácil la gestión de la odontología. El software ideal para llevar la administración de tu consultorio o clínica."
          key="description"
        />
        <meta property="og:locale" content="es-ar" />
        <link
          rel="canonical"
          href="https://www.bilog.com.ar"
          hrefLang="es-ar"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:300,400,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout className="content-wrapper">
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
