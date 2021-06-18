import '../styles/style.scss';
import Head from 'next/head';
import Provider from './context';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>Bilog Payments</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Bilog Soluciones Informáticas. El nuevo software para la administración del consultorio y/o clínica Odontológica." />
        <meta name="HandheldFriendly" content="True" />
        <meta property="og:title" content="Bilog Payments" key="title" />
        <link rel="shortcut icon" href="/static/fav.png" />
        <link rel="canonical" href="https://www.bilog.com.ar" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600&display=swap" rel="stylesheet" />
      </Head>

      <Layout className="content-wrapper">
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
