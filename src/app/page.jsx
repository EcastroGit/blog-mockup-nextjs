import HeroBanner from "@/components/HeroBanner";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div>
      <section>
        <HeroBanner />
      </section>

      <section>
        <Carousel />
      </section>
    </div>
  );
}
