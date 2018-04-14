import React from 'react'
import ProductCard from 'molecules/ProductCard'

const ProductList = ({ products, onCardClick, productType }) => (
    <div className="product-list">
        {products.map((item) => (
            <ProductCard 
                auction={productType === 'auction'} 
                organization={item.organization} 
                productId={item.productId} 
                name={item.name} 
                price={item.price} 
                onCardClick={onCardClick} 
                thumbnail={item.thumbnail}
            />
        ))}
    </div>
)

export default ProductList