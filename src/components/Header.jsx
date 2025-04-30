import React,{ useState } from 'react';
import logo from './assets/logo.png'; 
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';




const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState('Home');

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="text-4xl font-bold text-gray-700">SHOPPER</span>
        </div>

        
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700 text-sm">
          <li onClick={() => setMenu('Home')} className="list-none">
            <Link to="/" className="hover:text-red-500">
            HOME
            </Link>
            {menu === 'Home' && <div className="h-1 bg-red-500 mt-1 rounded"></div>}
          </li>
          <li onClick={() => setMenu('all_product')} className="list-none">
            <Link to="/all_product" className="hover:text-red-500">
              ALL PRODUCTS
            </Link>
            {menu === 'all_product' && <div className="h-1 bg-red-500 mt-1 rounded"></div>}
          </li>
          <li onClick={() => setMenu('about')} className="list-none">
            <Link to="/about" className="hover:text-red-500">
              ABOUT
            </Link>
            {menu === 'about' && <div className="h-1 bg-red-500 mt-1 rounded"></div>}
          </li>
          <li onClick={() => setMenu('contact')} className="list-none">
            <Link to="/contact" className="hover:text-red-500">
              CONTACT
            </Link>
            {menu === 'contact' && <div className="h-1 bg-red-500 mt-1 rounded"></div>}
          </li>
        </nav>
      
        <div className="hidden md:flex items-center gap-6">
          <Link to="/login">
            <button className="px-6 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100 text-sm font-medium">
              Login
            </button>
          </Link>
          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart  size={32} className=" text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-gray-700">
          <Link to="/" onClick={() => setMenu('HOME')} className="block">
            HOME {menu === 'HOME' && <div className="h-1 bg-red-500 mt-1 rounded w-10" />}
          </Link>
          <Link to="/all_product" onClick={() => setMenu('all_product')} className="block">
            ALL PRODUCTS {menu === 'all_product' && <div className="h-1 bg-red-500 mt-1 rounded w-10" />}
          </Link>
          <Link to="/about" onClick={() => setMenu('about')} className="block">
            ABOUT {menu === 'about' && <div className="h-1 bg-red-500 mt-1 rounded w-10" />}
          </Link>
          <Link to="/contact" onClick={() => setMenu('contact')} className="block">
           CONTACT {menu === 'contact' && <div className="h-1 bg-red-500 mt-1 rounded w-10" />}
          </Link>

          <div className="flex justify-between pt-4 items-center">
            <Link to="/login">
              <button className="px-6 py-4 border border-gray-300 rounded-sm hover:bg-gray-100 text-sm font-medium">
                Login
              </button>
            </Link>
            <Link to="/cart" className="relative">
              <MdOutlineShoppingCart  size={28} className="text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header