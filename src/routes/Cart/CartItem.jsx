import React from "react";
import { IoHeartCircleSharp } from "react-icons/io5";
import { LuX, LuPlus, LuMinus, LuRefreshCcw } from "react-icons/lu";

function CartItem({ cartItem, onClick, onUpdateCartItem }) {
  return (
    <>
      <div className="flex flex-col gap-6 w-66.25">
        <div className="relative w-66.25 h-78.5 aspect-4/5 bg-[#f2f3f8] border border-[#D9D9D9] overflow-hidden">
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className="w-full h-full object-contain object-center"
          />
          <button className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-sm flex items-center justify-center shadow-sm hover:bg-[#f2f3f8] transition-colors">
            <IoHeartCircleSharp className="w-3 h-3 text-zinc-400" />
          </button>
        </div>
        <div className="flex flex-col items-start gap-2 w-full pb-4">
          <p className="text-xs text-zinc-500 mb-1">{cartItem.category}</p>
          <div className="flex justify-between w-full">
            <h3 className="text-sm font-semibold line-clamp-2 flex-1">
              {cartItem.title}
            </h3>
            <p className="text-sm font-bold shrink-0">${cartItem.price}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-2">
        <button
          onClick={() => onClick(cartItem.id)}
          className="text-zinc-400 hover:text-red-500 transition-colors p-1">
          <LuX className="w-4 h-4" />
        </button>
        <div className="flex flex-col border border-[#D9D9D9] mt-2">
          <button
            className="w-6 h-6 flex items-center justify-center hover:bg-zinc-100 text-zinc-600 transition-colors border-b border-[#D9D9D9]"
            onClick={() =>
              onUpdateCartItem(cartItem.id, cartItem.quantity + 1)
            }>
            <LuPlus className="w-3 h-3" />
          </button>
          <span className="w-6 h-6 flex items-center justify-center text-xs font-bold border-b border-[#D9D9D9]">
            {cartItem.quantity}
          </span>
          <button
            className="w-6 h-6 flex items-center justify-center hover:bg-zinc-100 text-zinc-600 transition-colors"
            onClick={() =>
              onUpdateCartItem(cartItem.id, cartItem.quantity - 1)
            }>
            <LuMinus className="w-3 h-3" />
          </button>
        </div>
        <button className="text-zinc-400 hover:text-zinc-900 transition-colors mt-2 flex items-center justify-center">
          <LuRefreshCcw className="w-4 h-4" />
        </button>
      </div>
    </>
  );
}

export default CartItem;
