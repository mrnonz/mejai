import React, { Component } from 'react'
import { Image, Container } from 'semantic-ui-react'
import Breadcrumb from 'molecules/Breadcrumb'
import Gallery from 'molecules/Gallery';
import ProductData from 'molecules/ProductData';

const ProductDetail = ({ itemType, product, onAdd }) => (
    <div className="product-detail">
        <Breadcrumb />
        <div className="product-user">
            <div className="user-info">
                <span className="role">ผู้ขาย</span>
                <span className="username">{ `${product.seller.first_name} ${product.seller.last_name}`}</span>
            </div>
            <div className="user-avatar">
                <Image src='static/avatar.jpg' size="tiny" avatar/>
            </div>
        </div>
        <Gallery />
        <ProductData
            itemType={itemType} 
            product={product}
            onAdd={onAdd}
        />
    </div>
)

export default ProductDetail