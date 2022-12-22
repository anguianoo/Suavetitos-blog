import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mypic from "../assets/blog.png";
import NavItem from "./NavItem";
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About me", href: "/about" },
  // { text: "Contact", href: "/contact" },
];
export default function Navbar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <a href="/">
        <Image
          src={mypic}
          alt="Picture of the author"
          height={100}
          width={100}
        />
      </a>
      <nav className="nav">
        {MENU_LIST.map((menu, idx) => (
          <ul
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <li>
              <NavItem active={activeIdx === idx} {...menu} />
            </li>
          </ul>
        ))}
      </nav>
    </header>
  );
}
