import { products } from "@/data/productsFakeData";
import Image from "next/image";
import CtaB from "./CtaB";
import "@/styles/productsWidget.css";

function ProductsWidget() {
  return (
    <div className="products-widget">
      {products.map((i) => {
        return (
          <div className="product-card" key={i.id}>
            <div className="img-container">
              <Image src={i.src} alt="Producto" />
            </div>
            <div className="text-container">
              <h3 className="text-center font-bold mt-2 mb-2">{i.product}</h3>
              <p>{i.description}</p>
              <CtaB ctaText="Order Now!" ctaLink="#" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsWidget;
