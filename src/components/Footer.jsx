import Link from "next/link";
import "@/styles/footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <Link href="/">IDENTITY</Link>
      </div>
      <div className="footer-container">
        <Link href="/">Options</Link>
      </div>
    </footer>
  );
}

export default Footer;
