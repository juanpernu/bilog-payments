const FooterWrapper = () => (
  <div className="wrapper">
    <div className="wrapper--text">
      <img className="logo" src="/static/logo-bilog.svg" alt="Bilog" />
    </div>
    <div className="wrapper--text">
      <p className="copyright">
        Copyright © {new Date().getFullYear()} Bilog, Inc. All rights reserved.
      </p>
    </div>
  </div>
)

export default FooterWrapper;
