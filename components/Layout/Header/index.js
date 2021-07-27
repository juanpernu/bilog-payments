import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <nav className="menu">
        <span className="menu-item">
          <Link href="/">
            <img className="logo" src="/static/logo-bilog.svg" alt="Bilog" />
          </Link>
        </span>
        <span className="menu-item">
          <Link href="/pricing">
            <a className="link">Cotizá</a>
          </Link>
          <Link href="/versions">
            <a className="link">Versiones</a>
          </Link>
        </span>
      </nav>
    </header>
  )
};

export default Header;
