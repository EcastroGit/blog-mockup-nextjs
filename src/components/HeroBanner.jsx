import "@/styles/heroBanner.css";
import Image from "next/image";
import bannerImage from "../assets/banner.jpg";
import CtaA from "@/components/CtaA.jsx";
import CtaB from "@/components/CtaB.jsx";

function HeroBanner() {
  return (
    <div id="hero-banner">
      <div id="hb-cta" className="hb-container">
        <div>
          <h1 className="text-4xl font-semibold mb-5">
            Discover intersting articles
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="flex felx-row mt-5 mb-10">
          <CtaA ctaText="Check Posts" ctaLink="/posts" />
          <CtaB ctaText="Contact Us" ctaLink="/contact" />
        </div>
        <div></div>
      </div>
      <div className="hb-container">
        <Image
          className="rounded-full size-3/5"
          src={bannerImage}
          alt="Notebook image pixelart"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
