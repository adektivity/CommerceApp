import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { IoHeartCircleSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { LiaUserCircleSolid } from "react-icons/lia";

function Navbar({ cart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartBadge = cart.length;
  return (
    <nav className="sticky top-0 z-50 bg-[#e6e6e6] py-6 left-0 w-full">
      <div className="container mx-auto sm:px-0 relative">
        <div className="flex items-center justify-between">
          {/* Responsive Menu */}
          <div className="flex items-center justify-between gap-4">
            <button className="hidden sm:block cursor-pointer">
              <BiMenuAltLeft className="text-3xl" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-3xl cursor-pointer sm:hidden focus:outline-none z-50"
              aria-label="Toggle Menu">
              {isMenuOpen ? <BiX /> : <BiMenuAltLeft className="text-3xl" />}
            </button>
            {/* Desktop Links */}
            <div className="hidden sm:flex items-center justify-between gap-4">
              <Link to="/">Home</Link>
              <Link to="/products">Collections</Link>
              <Link to="/products">New</Link>
            </div>
          </div>
          {/*  Mobile Dropdown Menu Drawer */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#e6e6e6] border-b border-[#D9D9D9] py-6 px-4 flex flex-col gap-4 sm:hidden z-40 transition-all duration-200 shadow-sm">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-zinc-500 py-1">
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-zinc-500 py-1">
                Collections
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-zinc-500 py-1">
                New
              </Link>
            </div>
          )}

          <Link to="/">
            <img src="logo.svg" alt="logo" width={32} height={32} />
          </Link>

          <div className="flex items-center justify-between gap-4">
            <Link to="/wishlist" className="hidden sm:block">
              <IoHeartCircleSharp className="text-3xl" />
            </Link>
            <Link to="/cart" className="relative">
              <IoCartOutline className="text-3xl" />
              {cartBadge > 0 && (
                <span className="absolute -top-1 -right-1 ">
                  <div className="inline-flex items-center bg-red-500 text-xs text-white font-bold px-1.5 py-0.5 rounded-full border-2 border-[#e6e6e6]">
                    {cartBadge}
                  </div>
                </span>
              )}
            </Link>
            <Link to="/">
              <LiaUserCircleSolid className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
