import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className=" bg-white border border-gray-200  overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
        <img
          src={imageUrl}
          alt={product.name}
          className=" w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* product detail section */}
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2 line-clamp-1">
            {product.name}
          </h2>
          <div className="p-4 flex gap-4 items-center flex-grow">
            <p className="text-green-600 font-semibold text-lg">
              ৳ {product.buying_price}
            </p> 
            <p className="text-gray-600 line-through font-semibold text-lg">
              ৳ {product.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
