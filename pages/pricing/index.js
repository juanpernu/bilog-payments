import Wizard from "../../components/Form/Wizard";

const Pricing = () => {
  return (
    <section className="pricing">
      <Wizard />
    </section>
  );
};

export async function getServerSideProps(req) {
  const { version = null, value = null } = req.query;
  return { props: { version, value } };
}

export default Pricing;
