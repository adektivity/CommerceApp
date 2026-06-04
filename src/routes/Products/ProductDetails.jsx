import React from "react";

import { useParams } from "react-router-dom";

function ProductDetails({ products, onClick }) {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return <p>Product Details aren't loading...</p>;
  }
  return (
    <div className="container mx-auto sm:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 relative sm:w-91.75 sm:h-109.5 aspect-4/5 bg-[#f2f3f8] border border-[#D9D9D9] overflow-hidden flex justify-center items-center sm:block">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="lg:col-span-5 flex flex-col items-start gap-6 py-2 px-8 border border-[#D9D9D9]">
          <div className="my-4">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p className="text-[#0000007e]">MSRP incl. of all taxes</p>
          </div>
          <p>{product.description}</p>

          <button
            onClick={() => onClick(product)}
            className="w-full bg-[#D9D9D9] text-zinc-800 font-bold text-sm py-4 rounded-sm hover:bg-black hover:text-white transition-all">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
