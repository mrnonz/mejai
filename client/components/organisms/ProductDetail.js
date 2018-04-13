import React, { Component } from 'react'
import { Image, Container, Modal } from 'semantic-ui-react'
import { sortBy, reverse } from 'lodash'
import Breadcrumb from 'molecules/Breadcrumb'
import Loader from 'molecules/Loader'
import Gallery from 'molecules/Gallery';
import ProductData from 'molecules/ProductData';
import OrderTable from 'molecules/OrderTable'

const ProductDetail = ({ itemType, product, orders, isLoadingOrder, onAdd }) => {
    const sortedOrder = reverse(sortBy(orders, (order) => order.created_by))
    const userInfo = () => (
        <div className="product-user">
            <div className="user-info">
                <span className="role">ผู้ขาย</span>
                <span className="username">{ `${product.seller.firstname} ${product.seller.lastname}`}</span>
            </div>
            <div className="user-avatar">
                <Image src='static/avatar.jpg' size="tiny" avatar/>
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
                itemType={itemType} 
                product={product}
                onAdd={onAdd}
            />
        </div>
    )
}

export default ProductDetail