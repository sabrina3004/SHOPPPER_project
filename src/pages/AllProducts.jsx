import React from 'react'
import Products from '../components/Products'

const AllProducts = () => {
  return (
    <div className="bg-gradient-to-b from-amber-100 from-10% via-zinc-50 via-30% to-white to-90% ...">
        <Products showHeading={true} title="All Products" />
    </div>
  )
}

export default AllProducts