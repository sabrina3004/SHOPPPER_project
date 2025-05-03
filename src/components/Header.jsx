import React, { useState } from "react";
import logo from "./assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="text-4xl font-bold text-gray-700">SHOPPER</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700 text-sm">
          <li className="list-none">
            <Link to="/" className="hover:text-red-500">
              HOME
            </Link>
            {currentPath === "/" && (
              <div className="h-1 bg-red-500 mt-1 rounded"></div>
            )}
          </li>
          <li className="list-none">
            <Link to="/all_product" className="hover:text-red-500">
              ALL PRODUCTS
            </Link>
            {currentPath === "/all_product" && (
              <div className="h-1 bg-red-500 mt-1 rounded"></div>
            )}
          </li>
          <li className="list-none">
            <Link to="/about" className="hover:text-red-500">
              ABOUT
            </Link>
            {currentPath === "/about" && (
              <div className="h-1 bg-red-500 mt-1 rounded"></div>
            )}
          </li>
          <li className="list-none">
            <Link to="/contact" className="hover:text-red-500">
              CONTACT
            </Link>
            {currentPath === "/contact" && (
              <div className="h-1 bg-red-500 mt-1 rounded"></div>
            )}
          </li>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/login">
            <button
              className={`px-6 py-2 border rounded-full text-sm font-medium ${
                location.pathname === "/login"
                  ? "border-red-500 text-red-500"
                  : "text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Login
            </button>
          </Link>
          <Link to="/cart" className="relative group">
            <MdOutlineShoppingCart
              size={32}
              className={`transition-colors ${
                currentPath === "/cart"
                  ? "text-red-500"
                  : "text-gray-700 group-hover:text-red-500"
              }`}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalQuantity}
            </span>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="transition-transform duration-300 ease-in-out"
          >
            {menuOpen ? (
              <FiX className="w-6 h-6 text-gray-700 transform rotate-180 transition-transform duration-300" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-700 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-gray-700">
          <Link to="/" className="block">
            HOME{" "}
            {currentPath === "/" && (
              <div className="h-1 bg-red-500 mt-1 rounded w-10" />
            )}
          </Link>
          <Link to="/all_product" className="block">
            ALL PRODUCTS{" "}
            {currentPath === "/all_product" && (
              <div className="h-1 bg-red-500 mt-1 rounded w-10" />
            )}
          </Link>
          <Link to="/about" className="block">
            ABOUT{" "}
            {currentPath === "/about" && (
              <div className="h-1 bg-red-500 mt-1 rounded w-10" />
            )}
          </Link>
          <Link to="/contact" className="block">
            CONTACT{" "}
            {currentPath === "/contact" && (
              <div className="h-1 bg-red-500 mt-1 rounded w-10" />
            )}
          </Link>

          <div className="flex justify-between pt-4 items-center">
            <Link to="/login">
              <button
                className={`px-6 py-4 border rounded-sm text-sm font-medium ${
                  currentPath === "/login"
                    ? "border-red-500 text-red-500"
                    : "text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                Login
              </button>
            </Link>
            <Link to="/cart" className="relative group">
              <MdOutlineShoppingCart
                size={28}
                className={`transition-colors ${
                  currentPath === "/cart"
                    ? "text-red-500"
                    : "text-gray-700 group-hover:text-red-500"
                }`}
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalQuantity}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
