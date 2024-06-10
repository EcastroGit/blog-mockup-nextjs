import HeroBanner from "@/components/HeroBanner";
import BlogPosts from "@/components/BlogPosts";
import BoxTextImage from "@/components/BoxTextImage";
import notebook from "@/assets/notebook_pixelart.jpg";
import Spacer from "@/components/Spacer";

export default function Home() {
  return (
    <div>
      <section>
        <HeroBanner />
      </section>

      <section>
        <br />
        <h2 className="font-bold text-3xl mt-10 text-center">
          Recent articles
        </h2>
        <BlogPosts numPosts={3} />
      </section>
      <Spacer pixels="70" />
      <section>
        <BoxTextImage
          titleText="Products & Frebbies"
          bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          imgSrc={notebook}
        />
      </section>
      <Spacer pixels="100" />
    </div>
  );
}
