import Link from "next/link";
import "@/styles/ctaA.css";

function CtaA({ ctaText, ctaLink }) {
  return (
    <Link href={ctaLink}>
      <div className="cta-a font-semibold">{ctaText}</div>
    </Link>
  );
}

export default CtaA;
