"use client";
import Link from "next/link";
import { useState } from "react";
import "@/styles/header.css";

function Header() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    const screenSize = window.innerWidth;
    if (screenSize <= 650) {
      setClicked(!clicked);
    }
  }

  function Nav({ className }) {
    return (
      // Add class vertical for column display
      <nav className={className}>
        <Link href="/posts" onClick={handleClick}>
          Posts
        </Link>
        <Link href="/products" onClick={handleClick}>
          Products
        </Link>
        <Link href="/contact" onClick={handleClick}>
          Contact
        </Link>
      </nav>
    );
  }

  return (
    <header id="header">
      <div className="logo-container">
        <Link href="/">BLOG MOCKUP</Link>
      </div>
      <div className="nav-container">
        <Nav />
      </div>
      <div className="burguer-container">
        {/* Burguer icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${clicked ? "hidden" : ""}`}
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className={`size-6 ${clicked ? "" : "hidden"}`}
          onClick={handleClick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className={`menu-layer ${clicked ? "show" : ""}`}>
        <div
          style={{ width: "fit-content", margin: "auto", padding: "5rem 0" }}
        >
          <Nav className="vertical" />
        </div>
      </div>
    </header>
  );
}

export default Header;
