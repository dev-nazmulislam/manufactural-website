import React from "react";
import useProduct from "../../hooks/useProduct";
import ShowPars from "./ShowPars";

const Products = () => {
  const [products] = useProduct();
  return (
    <section className="mx-4 md:mx-12">
      <h1 className="text-2xl md:text-4xl text-primary text-center  my-12">
        Our Best Selling Parts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ShowPars key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
