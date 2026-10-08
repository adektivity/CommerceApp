import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart({ cart, onClick, onUpdateCartItem, emptyCart }) {
  const subTotal = cart.reduce(
    (sum, item) => Math.floor(sum + item.price * item.quantity),
    0,
  );
  const shipping = cart.length > 0 ? 10 : 0;
  const total = subTotal + shipping;
  // Filled cart function
  function FilledCart() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 border-b border-[#D9D9D9] pb-12">
          {cart.map((cartItem) => (
            <div
              key={cartItem.id}
              className="group flex justify-center items-center gap-4">
              <CartItem
                cartItem={cartItem}
                onClick={onClick}
                onUpdateCartItem={onUpdateCartItem}
              />
            </div>
          ))}
        </div>
        {/* Order Summary */}
        <div className="lg:col-span-3">
          <div className="border border-[#D9D9D9] p-8 sticky top-8">
            <h2 className="text-sm font-bold tracking-wider mb-8">
              ORDER SUMMARY
            </h2>

            <div className="space-y-4 text-sm mb-8 border-b border-zinc-200 pb-8">
              <div className="flex justify-between">
                <span className="text-zinc-600">Subtotal</span>
                <span className="font-medium">${subTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600">Shipping</span>
                <span className="font-medium">${shipping}</span>
              </div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="text-base font-bold">TOTAL</h3>
                <p className="text-xs text-zinc-400">(TAX INCL.)</p>
              </div>
              <span className="text-xl font-bold">${total}</span>
            </div>

            <label className="flex items-center gap-3 mb-6 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 accent-black rounded-sm border-zinc-300 cursor-pointer"
              />
              <span className="text-xs text-zinc-500 group-hover:text-zinc-800 transition-colors">
                I agree to the Terms and Conditions
              </span>
            </label>

            <button
              disabled={cart.length === 0}
              className="w-full bg-[#D9D9D9] text-zinc-800 font-bold text-sm py-4 rounded-sm hover:bg-black hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Empty cart function
  function EmptyCart() {
    return (
      <div className="container mx-auto">
        <div>
          <h3 className="font-semibold text-center">
            There are no items in your cart,{" "}
            <Link to="/products" className="text-sky-600">
              Add Some...😉
            </Link>
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto sm:px-0">
      {cart.length > 0 ? (
        <FilledCart cart={cart} onClick={onClick} on />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
