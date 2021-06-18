import Cover from '../../components/Cover';
import Feature from '../../components/Feature';
import FeatureImage from '../../components/Feature/FeatureImage';
import BannerCta from '../../components/BannerCta';
import PricingFeatures from '../../mocks/pricingFeatures';

const Pricing = ({ version, value }) => {
  return (
    <section className="pricing">
      <Cover
        text="Demostración de Bilog"
        paragraph="Mirá la demostración guiada de nuestro software y descubrí por qué somos la mejor opción."
        coverVideo="https://www.youtube.com/embed/aLe4pjyI4bA?start=4" />
      <Feature {...PricingFeatures} />
      <FeatureImage
        imgSrc="/static/illus-labo-estadisticas.svg"
        imgAlt="Demo - Beneficios"
        copy="¿Sabías que?"
        title="Reducí hasta un 40% de trabajo"
        description="Implementando nuestro software de gestión podes reducir hasta un 40% el trabajo administrativo de tu consultorio o clínica y tener más tiempo para vos."
        hasCta={false}
        imageAlign="left"
        bgGrey={false}
      />
      <BannerCta
        title="¿Querés saber más sobre Bilog? Llamanos"
        buttonText="Agendar llamada"
        buttonHref="https://www.bilog.com.ar/contact" />
    </section>
  )
};

export async function getServerSideProps(req) {
  const { version = null, value = null } = req.query;
  return { props: { version, value } };
}

export default Pricing;
