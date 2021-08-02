import React from "react";
import Link from "next/link";

const Desktop = () => {
  return (
    <span className="menu-desktop-items">
      <Link href="/pricing">
        <a className="link">Cotizá</a>
      </Link>
      <Link href="/versions">
        <a className="link">Versiones</a>
      </Link>
    </span>
  )
}

export default Desktop;
