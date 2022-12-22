import React, { useEffect } from "react";
import Link from "next/link";

export default function NavItem({ text, active, href }) {
  return (
    <>
      <Link href={href} className={`nav__item ${active ? "active" : ""}`}>
        {text}
      </Link>
    </>
  );
}
