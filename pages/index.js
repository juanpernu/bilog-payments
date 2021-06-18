import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Context } from './context';

import { test } from '../services/test';

import Card from '../components/Card';
import { Button } from '../components/Buttons';

const Index = () => {
  const ProductCardsContent = useContext(Context);
  const router = useRouter();

  const handleOnClick = async (plan) => {
    router.push({
      pathname: '/pay',
      query: {
        version: plan.id,
        value: plan.value
      }
    });
  }

  return (
    <section className="billing-plans">
      <h2 className="title">Planes de suscripción</h2>
      <p className="copy">Bilog es perfecto para clínicas de cualquier tamaño</p>
      <div className="billing-plans--cards">
        {ProductCardsContent.map(card => <Card>
          <div className="card-content">
            <span className="copy">{card.copy}</span>
            <h3 className="title">{card.title}</h3>
            <p className="text">{card.text}</p>
          </div>
          <Button
            className="suscription-button"
            text="Suscribirse"
            onClick={() => handleOnClick(card.plan)}
          />
        </Card>
        )}
      </div>
    </section>
  )
};

export default Index;
