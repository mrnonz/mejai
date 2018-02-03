import React, { Component } from 'react'
import ProductDetail from 'organisms/ProductDetail'

class Product extends Component {
    render() {
        return (
            <div className="product-page">
                <ProductDetail />
            </div>
        )
    }
}

export default Product