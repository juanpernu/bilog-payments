import Icon from '../../Icon';
import { ExternalButton } from '../../Buttons';

const FeatureItem = ({ title, description, icon, button }) => (
  <div className="feature-item">
    {icon && <Icon type={icon} />}
    <h3 className="feature-item--title">{title}</h3>
    <p className="feature-item--description">{description}</p>
    {button && <ExternalButton
      externalLink={button.link}
      text={button.text}
    />}
  </div>
)

export default FeatureItem;
