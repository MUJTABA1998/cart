import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "../AppContext";

const Product = ({ item }) => {
  const { url, name, price, id, quantity } = item;
  const { removeItem, increaseQuantity, decreaseQuantity } = useGlobalContext();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-3">
        <div>
          <img
            src={url}
            alt={name}
            className="w-[100px] h-[100px] object-contain"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <h1 className="text-xl font-bold tracking-wider text-gray-700 capitalize">
            {name}
          </h1>
          <h1 className="font-semibold text-gray-400 text-md">PKR {price}</h1>
          <button
            className="capitalize text-secondary"
            onClick={() => removeItem(id)}
          >
            remove
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button
          className="text-2xl text-secondary"
          onClick={() => increaseQuantity(id)}
        >
          <FaAngleUp />
        </button>
        <h2>{quantity}</h2>
        <button
          className="text-2xl text-secondary"
          onClick={() => decreaseQuantity(id)}
        >
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default Product;
