import '../styles/style.scss';
import Head from 'next/head';
import Provider from './context';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>Bilog Payments</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Bilog Payments" key="title" />
        <link rel="shortcut icon" href="/favicon.jpg" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600&display=swap" rel="stylesheet" />
      </Head>

      <Layout className="content-wrapper">
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
