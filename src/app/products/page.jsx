import ProductsWidget from "@/components/ProductsWidget";

function Page() {
  return (
    <div>
      <br />
      <h1 className="text-4xl m-10 font-bold text-center">
        Products & Frebbies
      </h1>
      <section>
        <ProductsWidget />
      </section>
    </div>
  );
}

export default Page;
