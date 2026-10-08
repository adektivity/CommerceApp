import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <>
      <div className="flex flex-col gap-6 w-full max-w-66.25">
        <div className="w-full aspect-4/5 bg-[#f2f3f8] overflow-hidden border border-[#D9D9D9]">
          <Link to={`products/${product.id}`}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-center"
            />
          </Link>
        </div>
        <div className="flex flex-col items-start gap-2 w-full pb-4">
          <p className="text-xs text-zinc-500 mb-1">{product.category}</p>
          <div className="flex justify-between w-full">
            <Link to={`products/${product.id}`}>
              <h3 className="text-sm font-semibold line-clamp-2 flex-1">
                {product.title}
              </h3>
            </Link>
            <p className="text-sm font-bold shrink-0">${product.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

// <Link to={`products/${product.id}`}>
//   <span aria-hidden="true" className="absolute inset-0" />
//   {product.title}
// </Link>
