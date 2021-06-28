import React from 'react';
import FeatureItem from '../FeatureItem';
import { ButtonLink } from '../../Buttons';
import Image from '../../Image';

const FeatureImage = ({ imgSrc, imgAlt, copy, hasCta, imageAlign, bgGrey, title, description, buttonText, buttonHref }) => {
  return (
    <section className={`feature-image--container ${bgGrey && 'bg-grey'}`}>
      <div className={`feature-image ${imageAlign}`}>
        <Image src={imgSrc} alt={imgAlt} />
        <div className="feature-image-content">
          <p className="feature-image-content--copy">{copy}</p>
          <FeatureItem
            title={title}
            description={description}
          />
          {
            hasCta && <div className="feature-image--cta">
              <ButtonLink
                customClass="terciary"
                buttonHref={buttonHref}
                buttonText={buttonText}
              />
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default FeatureImage;
