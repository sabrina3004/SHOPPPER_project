import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  decreaseQuantity,
  addToCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.buying_price * item.quantity,
    0
  );

  return (
    <div className="bg-gradient-to-b from-amber-100 to-zinc-50">
      <div className=" max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center flex justify-center items-center gap-2">
          <GiShoppingCart className="text-4xl text-gray-700 " /> Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>Your cart is currently empty.</p>
            <Link
              to="/all_product"
              className="mt-4 inline-block bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition duration-200"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <img
                      src={`https://admin.refabry.com/storage/product/${item.image}`}
                      alt={item.name}
                      className="w-24 h-24 object-contain rounded-lg"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        ৳ {item.buying_price} × {item.quantity}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
                        >
                          −
                        </button>
                        <span className="text-lg font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(addToCart(item))}
                          className="w-8 h-8 rounded-full bg-gray-200 text-lg font-bold hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gray-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
                Total: ৳ {totalPrice}
              </h2>
              <Link
                to="/checkout"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-200"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
