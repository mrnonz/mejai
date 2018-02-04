import React, { Component } from 'react'
import { Image, Container } from 'semantic-ui-react'
import Breadcrumb from 'molecules/Breadcrumb'
import Gallery from 'molecules/Gallery';
import ProductData from 'molecules/ProductData';

const ProductDetail = (props) => (
    <div className="product-detail">
        <Breadcrumb />
        <div className="product-user">
            <div className="user-info">
                <span className="role">ผู้ประมูล</span>
                <span className="username">สมศรี สมชาย</span>
            </div>
            <div className="user-avatar">
                <Image src='static/avatar.jpg' size="tiny" avatar/>
            </div>
        </div>
        <Gallery />
        <ProductData />
    </div>
)

export default ProductDetail