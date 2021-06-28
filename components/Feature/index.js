import React from 'react';
import Link from 'next/link';
import Title from './FeatureTitle';
import FeatureItem from './FeatureItem';

const Feature = ({ features }) => {
  return (
    features.map((feature, index) => {
      return (
        <section key={index} className={`feature-section ${feature.hasColorBackground ? "color-background" : ""}`}>
          <div className="feature">
            <Title
              title={feature.title}
              subtitle={feature.description}
            />
            {
              feature.successCase &&
              <Link href={`${feature.successCase.href}`}>
                <a className="link--primary">{feature.successCase.text}</a>
              </Link>
            }
            <div className="feature-item--container">
              {feature.featureItems.map((item, index) => <FeatureItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                button={item.button}
              />)}
            </div>
          </div>
        </section>
      )
    })
  )
}

export default Feature;
