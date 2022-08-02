import React from "react";
import { useGlobalContext } from "../AppContext";

const Footer = () => {
  const { total, clearAll } = useGlobalContext();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between w-full py-5 border-t border-gray-600">
        <h1 className="text-xl font-bold tracking-wider uppercase">Total</h1>
        <h1 className="text-sm tracking-widest">
          PKR {parseFloat(total).toFixed(2)}
        </h1>
      </div>
      <button
        className="self-center px-5 py-2 text-xs tracking-wide text-red-600 uppercase border-2 border-red-600 rounded"
        onClick={clearAll}
      >
        Clear cart
      </button>
    </div>
  );
};

export default Footer;
