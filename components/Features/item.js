import Icon from "../Icon";

export const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature">
      <Icon colorFill="#077DF7" type={icon} width={60} height={60} />
      <h5 className="feature-title">{title}</h5>
      <p className="feature-desc">{description}</p>
    </div>
  );
};
