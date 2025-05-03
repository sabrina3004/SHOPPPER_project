import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id.toString() === id)
  );

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    window.scrollTo({top: 0, behavior: "smooth"})
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Product not found.
      </div>
    );
  }

  const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link to="/all_product" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Products
      </Link>
      <div className="w-full flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-md"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">
            {product.name}
          </h1>
          <p className="text-gray-700 mb-4 whitespace-pre-line">
            {product.short_desc}
          </p>
          <div className="p-2 flex gap-2.5 items-center flex-grow">
            <div className="text-2xl text-gray-600 line-through font-semibold mb-4">
              ৳ {product.price}
            </div>
            <div className="text-2xl text-green-600 font-semibold mb-4">
              ৳ {product.buying_price}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
