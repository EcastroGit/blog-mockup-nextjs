import Link from "next/link";
import "@/styles/cta1.css";

function Cta1({ ctaText, ctaLink }) {
  return (
    <Link href={ctaLink}>
      <div className="cta1 font-semibold">{ctaText}</div>
    </Link>
  );
}

export default Cta1;
