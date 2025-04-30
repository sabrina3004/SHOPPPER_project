import React from "react";
import Products from "../components/Products";
import hero from "../components/assets/hero_1.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-amber-100 to-zinc-50 p-10 mb-12 flex flex-col-reverse md:flex-row items-center justify-around gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-5 px-4">
          <span className="inline-block bg-red-50 text-red-600 font-semibold px-3 py-1 rounded-full text-sm shadow">
            New Arrival
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 leading-tight">
            Discover Our Newest <br /> Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Upgrade your wardrobe with stylish, affordable, and quality
            products.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#products"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold shadow transition duration-300"
            >
              Shop Now
            </a>
            <button className="text-red-500 font-semibold hover:underline">
              Learn More
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4 text-sm text-gray-500">
            <span>🚚 Free Shipping</span>
            <span>↩️ Easy Returns</span>
            <span>✔ Quality Guarantee</span>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center px-4">
          <img
            src={hero}
            alt="Fashion Model"
            className="w-[300px] md:w-[400px] "
            
          />
        </div>
      </div>

      {/* Products Section */}
      
      <div className="max-w-7xl mx-auto px-4">
        <Products showHeading={true} title="Our Products" />
     
      </div>
    </div>
  );
};

export default Home;
