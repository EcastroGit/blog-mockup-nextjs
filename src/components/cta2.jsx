import Link from "next/link";
import "@/styles/cta2.css";

function Cta2({ ctaText, ctaLink }) {
  return (
    <Link href={ctaLink}>
      <div className="cta2 font-semibold">{ctaText}</div>
    </Link>
  );
}

export default Cta2;
