import React from 'react'
import ProductCard from 'molecules/ProductCard'

const ProductList = ({ products, onCardClick }) => (
    <div className="product-list">
        {products.map((item) => (
            <ProductCard name={item.name} price={item.price} onCardClick={onCardClick} />
        ))}
    </div>
)

export default ProductList