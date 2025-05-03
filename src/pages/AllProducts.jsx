import React from 'react'
import Products from '../components/Products'

const AllProducts = () => {
  return (
    <div className="bg-amber-100">
        <Products showHeading={true} title="All Products" />
    </div>
  )
}

export default AllProducts