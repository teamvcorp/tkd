'use client';
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.css";
import { FaPhone } from "react-icons/fa";
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Dropdown from "./Dropdown";
export default function Navbar() {
  return (
    <>
      <header>
        <div className="infoStrip">
          <p className="infoStripInfo">
            Call Us Today!{" "}
            <span>  
              <FaPhone size={15} />
            </span>{" "}
            (712)295-2103
          </p>
        </div>
        <div className="navBarContainer">
          <nav className="navBar">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Dropdown />
            <Link href="/events">Events/Schedule</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <Link href="/">
          <Image
            className="logo"
            src="/TKDLogo.png"
            width={175}
            height={175}
            alt="Taekwondo logo"
          />
        </Link>
      </header>
    </>
  );
}
