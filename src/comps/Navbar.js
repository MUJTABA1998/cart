import React from "react";
import { useGlobalContext } from "../AppContext";

const Navbar = () => {
  const { amount } = useGlobalContext();

  return (
    <div className="w-full h-[10vh] bg-secondary px-10 md:px-20 py-3">
      <div className="flex items-center justify-between">
        <div className="self-center">
          <h1 className="text-3xl font-extrabold tracking-widest text-gray-50">
            Cart
          </h1>
        </div>
        <div className="">
          <img src="/shop1.png" alt="bag" />
          <h5 className="absolute font-bold text-xs text-white top-9  right-[60px] md:right-[100px]">
            {amount}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
