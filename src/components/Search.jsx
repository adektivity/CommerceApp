import React from "react";
import { LuSearch } from "react-icons/lu";

function Search() {
  return (
    <form className="w-full md:w-1/3 text-black">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <LuSearch className="w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="block w-full p-3 pl-9 pr-20 bg-[#d1d1d1] outline-none text-sm rounded-sm placeholder:text-zinc-500 focus:ring-1 focus:ring-zinc-400"
        />
      </div>
    </form>
  );
}

export default Search;
