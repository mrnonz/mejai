import React, { Component } from 'react'
import { Card, Image, Header } from 'semantic-ui-react'

const ProductCard = ({ productId, className, name, organization, auctionData, thumbnail, price, auction, onCardClick }) => {
    const cardClass = `${className} product-card`
    return (
        <Card key={productId} className={cardClass} onClick={() => onCardClick(productId)}>
            <Image src={thumbnail} size="small" centered />
                {
                    auction ? (
                    <Card.Content> 
                        <Header as="h5" dividing>{name}</Header>
                        <p className="card-organization">{ organization.name }</p>
                        <span className="card-price">เริ่มต้นที่ {+price} บาท </span>
                    </Card.Content>
                    ) : (
                    <Card.Content> 
                        <Header as="h5" dividing>{name}</Header>
                        <p className="card-organization">{ organization.name }</p>
                        <p className="card-price"> {+price} บาท </p>
                    </Card.Content>
                    )
                }
        </Card>
    )
}

export default ProductCard