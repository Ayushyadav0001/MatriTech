import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = ({ cartItemCount, openCart }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <Link to={'/'} className="text-xl">Food's Restaurant</Link>
      <button onClick={openCart} className="relative">
        <span className="material-icons">shopping_cart</span>
        {cartItemCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItemCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default HeaderMenu;
