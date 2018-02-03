import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import Breadcrumb from 'molecules/Breadcrumb'
import Gallery from 'molecules/Gallery';
import ProductData from 'molecules/ProductData';

const ProductDetail = (props) => (
    <div className="product-detail">
        <Breadcrumb />
        <div className="product-user">
            <span>Role</span>
            <span>Username</span>
            <Image src='static/avatar.jpg' size="tiny" avatar/>
        </div>
        <Gallery />
        <ProductData />
    </div>
)

export default ProductDetail