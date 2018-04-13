import React, { Component } from 'react'
import { Image, Container } from 'semantic-ui-react'
import Breadcrumb from 'molecules/Breadcrumb'
import Gallery from 'molecules/Gallery';
import ProductData from 'molecules/ProductData';

const ProductDetail = ({ itemType, product, onAdd }) => (
    <div className="product-detail">
        <Breadcrumb product={product} />
        <div className="product-user">
            <div className="user-info">
                <span className="role">ผู้ขาย</span>
                <span className="username">{ `${product.seller.firstname} ${product.seller.lastname}`}</span>
            </div>
            <div className="user-avatar">
                <Image src='static/avatar.jpg' size="tiny" avatar/>
            </div>
        </div>
        <Gallery images={product.images} />
        <ProductData
            itemType={itemType} 
            product={product}
            onAdd={onAdd}
        />
    </div>
)

export default ProductDetail