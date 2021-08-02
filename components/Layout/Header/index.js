import React, { useState } from "react";
import Link from "next/link";
import { Desktop, Mobile } from "./Menu";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleOnClick = () => {
    setIsToggle(!isToggle);
  }

  return (
    <header className="header">
      <nav className="menu">
        <span className="menu-logo">
          <Link href="/">
            <img className="logo" src="/static/logo-bilog.svg" alt="Bilog" onClick={() => setIsToggle(false)} />
          </Link>
        </span>
        <Desktop />
        <Mobile isToggle={isToggle} handleOnClick={handleOnClick} />
      </nav>
    </header>
  );
};

export default Header;
