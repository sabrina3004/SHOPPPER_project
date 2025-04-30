
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "./ProductCard";

const Products = ({ title = "Our Products", showHeading = true }) => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="min-h-[200px] flex items-center justify-center text-xl font-semibold">
        Loading products...
      </div>
    );
  }

  if (status === "failed") {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    
        <div className="max-w-7xl mx-auto  px-4 py-8">
      {showHeading && <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">{title}</h2>}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items && items.length > 0 ? (
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
    
  );
};

export default Products;
