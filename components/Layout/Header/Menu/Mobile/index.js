import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "../../../../Icon";

const Mobile = ({ isToggle, handleOnClick }) => {
  const icon = isToggle ? 'cross' : 'bars';

  const elemRef = useRef(null);

  const handleClickOutside = () => handleOnClick();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <span className="menu-mobile-items" ref={elemRef}>
      <button className="toggle-button" onClick={handleOnClick}>
        <Icon colorFill="#666" type={icon} width={24} height={24} />
      </button>
      <aside
        className={`menu-mobile-aside ${isToggle ? 'open' : 'closed'}`}
      >
        <Link href="/pricing">
          <a className="link" onClick={handleOnClick}>Cotizá</a>
        </Link>
        <Link href="/versions">
          <a className="link" onClick={handleOnClick}>Versiones</a>
        </Link>
      </aside>
    </span>
  )
}

export default Mobile;
