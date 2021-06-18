import React from 'react';
import PropTypes from 'prop-types';
import FeatureItem from '../FeatureItem';
import { ButtonLink } from '../../Buttons';
import Image from '../../Image';

class FeatureImage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { imgSrc, imgAlt, copy, hasCta, imageAlign, bgGrey, title, description, buttonText, buttonHref } = this.props;
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
}

FeatureImage.propTypes = {
  imageAlign: PropTypes.string,
  bgGrey: PropTypes.bool,
}

FeatureImage.defaultProps = {
  imageAlign: 'left',
  bgGrey: false,
}

export default FeatureImage;
