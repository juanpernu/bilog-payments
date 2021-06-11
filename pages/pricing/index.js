const Pricing = ({ version, value }) => {
  return (
    <section className="pricing">
      <p>pricing</p>
    </section>
  )
};

export async function getServerSideProps(req) {
  const { version = null, value = null } = req.query;
  return { props: { version, value } };
}

export default Pricing;
