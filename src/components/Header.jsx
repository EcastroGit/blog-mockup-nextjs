import Link from "next/link";
import "@/styles/header.css";

function Header() {
  return (
    <header id="header">
      <div className="header-container">
        <Link href="/">BLOG MOCKUP</Link>
      </div>
      <div className="header-container">
        <nav>
          <Link href="/posts">Posts</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
