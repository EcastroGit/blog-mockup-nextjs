import Link from "next/link";
import "@/styles/ctaB.css";

function CtaB({ ctaText, ctaLink }) {
  return (
    <Link href={ctaLink}>
      <div className="cta-b font-semibold">{ctaText}</div>
    </Link>
  );
}

export default CtaB;
