import React from 'react'
import { Card, Transition } from 'semantic-ui-react'
import ProductCard from 'molecules/ProductCard'

const ProductList = ({ products, onCardClick, productType }) => (
    <div className="product-list">
        <Transition.Group
            as={Card.Group}
            duration={500}
            itemsPerRow={6}
            animation="fade up"
            unmountOnHide
        >
            { products.map((item) => (
                <ProductCard 
                    auction={productType === 'auction'} 
                    auctionData={item.auction}
                    organization={item.organization} 
                    productId={item.productId} 
                    name={item.name} 
                    price={item.price} 
                    onCardClick={onCardClick} 
                    thumbnail={item.thumbnail}
                />
            )) }
        </Transition.Group>
    </div>
)

export default ProductList