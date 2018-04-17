import React, { Component } from 'react'
import { Card, Image, Header } from 'semantic-ui-react'

const ProductCard = ({ productId, name, organization, auctionData, thumbnail, price, auction, onCardClick }) => {
    return (
        <Card className="product-card" onClick={() => onCardClick(productId)}>
            <Image src={thumbnail} size="small" centered />
                {
                    auction ? (
                    <Card.Content> 
                        <Header as="h5" dividing>{name}</Header>
                        <span className="card-price">เริ่มต้นที่ {price.toLocaleString()} บาท </span>
                    </Card.Content>
                    ) : (
                    <Card.Content> 
                        <Header as="h5" dividing>{name}</Header>
                        <p className="card-organization">{ organization.name }</p>
                        <p className="card-price"> {price.toLocaleString()} บาท </p>
                    </Card.Content>
                    )
                }
        </Card>
    )
}

export default ProductCard