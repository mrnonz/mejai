import React, { Component } from 'react'
import { Image, Container, Modal } from 'semantic-ui-react'
import { sortBy, reverse, isNil } from 'lodash'
import Breadcrumb from 'molecules/Breadcrumb'
import Loader from 'molecules/Loader'
import Gallery from 'molecules/Gallery';
import ProductData from 'molecules/ProductData';
import OrderTable from 'molecules/OrderTable'

const ProductDetail = ({ product, orders, isLoadingOrder, onAdd, onBid, currentTime }) => {
    const sortedOrder = reverse(sortBy(orders, (order) => order.created_by))
    const profile = !(product.seller.picture == "") ? product.seller.picture : 'static/add-avatar.png'
    const userInfo = () => (
        <div className="product-user">
            <div className="user-info">
                <span className="role">ผู้ขาย</span>
                <span className="username">{ `${product.seller.firstname} ${product.seller.lastname}`}</span>
            </div>
            <div className="user-avatar">
                <Image src={profile} size="tiny" avatar/>
            </div>
        </div>
    )
    
    return (
        <div className="product-detail">
            <Breadcrumb product={product} />
            <Modal trigger={userInfo()}>
                <Modal.Header>ประวัติการซื้อขาย { `${product.seller.firstname} ${product.seller.lastname}`}</Modal.Header>
                <Modal.Content>
                    { isLoadingOrder ? <Loader wrapped /> : 
                        <OrderTable 
                            orders={sortedOrder} 
                        />
                    }
                </Modal.Content>
            </Modal>
            <Gallery images={product.images} />
            <ProductData
                product={product}
                onAdd={onAdd}
                onBid={onBid}
                currentTime={currentTime}
            />
        </div>
    )
}

export default ProductDetail