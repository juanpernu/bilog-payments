import { useState } from "react";
import Wizard from "../../components/Form/Wizard";
import Loading from "../../components/Loading";

const Pricing = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section className="pricing">
      {loading && <Loading />}
      <Wizard onChange={() => setLoading(!loading)} />
    </section>
  );
};

export async function getServerSideProps(req) {
  const { version = null, value = null } = req.query;
  return { props: { version, value } };
}

export default Pricing;
