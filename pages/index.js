import CoverSplit from "../components/CoverSplit";
import { Card } from "../components/Banner";
import { Commons } from "../components/Features";

const Index = () => {
  return (
    <section className="home">
      <CoverSplit url="/pricing" />
      <Commons />
      <Card />
    </section>
  );
};

export default Index;
