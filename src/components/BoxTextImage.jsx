import Image from "next/image";
import Cta1 from "./Cta1";
import "@/styles/boxTextImage.css";

function BoxTextImage({ titleText, bodyText, imgSrc, alt }) {
  return (
    <div className="bti-container">
      <div className="bti-image">
        <Image src={imgSrc} alt={alt} />
      </div>
      <div className="bti-text">
        <h2 className="font-bold text-3xl pb-3">{titleText}</h2>
        <p>{bodyText}</p>
        <Cta1 ctaText="More info" ctaLink="/products" />
      </div>
    </div>
  );
}

export default BoxTextImage;
