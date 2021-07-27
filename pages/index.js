import { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "./context";

import Card from "../components/Card";
import Button from "../components/Buttons/Button";
import BannerCta from "../components/BannerCta";
import CoverSplit from "../components/CoverSplit";

const Index = () => {
  const ProductCardsContent = useContext(Context);
  const router = useRouter();

  const handleOnClick = async (plan) => {
    router.push({
      pathname: "/pay",
      query: {
        version: plan.id,
        value: plan.value,
      },
    });
  };

  return (
    <section className="payments-home">
      <CoverSplit url="/pricing" />
      <BannerCta
        title="¿Queres saber todo acerca de cada versión?"
        buttonText="Ir a las versiones"
        buttonMod="terciary"
        url="/versions"
      />
      <div className="payments-home--cards">
        {ProductCardsContent.map((card) => (
          <Card>
            <div className="card-content">
              <span className="copy">{card.copy}</span>
              <h3 className="title">{card.title}</h3>
              <p className="text">{card.text}</p>
            </div>
            <Button
              modifier="primary"
              className="suscription-button"
              text="Suscribirse"
              onClick={() => handleOnClick(card.plan)}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Index;
