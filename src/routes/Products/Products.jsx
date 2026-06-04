import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

function Products({ products }) {
  return (
    <div className="container mx-auto sm:px-0">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 xl:gap-x-8 ">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="group relative flex justify-center items-center sm:block">
              <Product product={product} />
            </div>
          ))
        ) : (
          <p className="text-2xl font-bold">Something is wrong...</p>
        )}
      </div>
    </div>
  );
}

export default Products;
