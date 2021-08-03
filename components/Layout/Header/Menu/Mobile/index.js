import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "../../../../Icon";

const Mobile = ({ isToggle, handleOnClick }) => {
  const elemRef = useRef(null);
  const icon = isToggle ? "cross" : "bars";

  const handleClickOutside = (e) => {
    if (isToggle && !e.path.includes(elemRef.current)) {
      handleOnClick();
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, [isToggle]);

  return (
    <span ref={elemRef} className="menu-mobile-items">
      <button className="toggle-button" onClick={handleOnClick}>
        <Icon colorFill="#666" type={icon} width={24} height={24} />
      </button>
      <aside className={`menu-mobile-aside ${isToggle ? "open" : "closed"}`}>
        <Link href="/pricing">
          <a className="link" onClick={handleOnClick}>
            Cotizá
          </a>
        </Link>
        <Link href="/versions">
          <a className="link" onClick={handleOnClick}>
            Versiones
          </a>
        </Link>
      </aside>
    </span>
  );
};

export default Mobile;
