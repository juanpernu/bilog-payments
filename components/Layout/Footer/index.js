import FooterWrapper from './FooterWrapper';
import Column from '../../Column';
import { footer } from '../../../mocks/footerContent';
const { versions, support, contact, socialMedia } = footer;

const Footer = () => (
  <footer className="footer light">
    <div className="footer--links">
      <Column title="Sistemas" items={versions} />
      <Column title="Compañía" items={contact} />
      <Column title="Soporte" items={support} />
      <Column title="Social Media" items={socialMedia} />
    </div>
    <FooterWrapper />
  </footer>
);

export default Footer;
