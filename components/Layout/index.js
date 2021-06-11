import { Helmet } from "react-helmet";
import Header from './Header';
import Footer from './Footer';

const Layout = ({ className, children }) => {
  return (
    <div className={className}>
      <Helmet htmlAttributes={{ lang: "es" }}>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          name="description"
          content="Bilog Soluciones Informáticas. El nuevo software para la administración del consultorio y/o clínica Odontológica."
        />
        <meta name="HandheldFriendly" content="True" />
        <title>Bilog - Soluciones Informáticas</title>
        <link rel="shortcut icon" href="/static/fav.png" />
        <link rel="canonical" href="https://www.bilog.com.ar" />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:300,600,800"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
