import React from 'react';
import Link from 'next/link';
import Title from './FeatureTitle';
import FeatureItem from './FeatureItem';

class Feature extends React.Component {
  constructor() {
    super();
    this.renderSuccessCase = this.renderSuccessCase.bind(this);
  }

  renderSuccessCase(successCase) {
    if (successCase) {
      return (
        <Link href={`${successCase.href}`}>
          <a className="link--primary">{successCase.text}</a>
        </Link>
      )
    }
    return null
  }

  render() {
    const { features } = this.props;
    return (
      features.map((feature, index) => {
        return (
          <section key={index} className={`feature-section ${feature.hasColorBackground ? "color-background" : ""}`}>
            <div className="feature">
              <Title
                title={feature.title}
                subtitle={feature.description}
              />
              {this.renderSuccessCase(feature.successCase)}
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
}

export default Feature;
