import React, { Component } from 'react'
import { Card, Image, Progress, Header } from 'semantic-ui-react'

const ProductCard = ({ productId, name, organization, thumbnail, price, auction, onCardClick }) => {
    return (
        <Card className="product-card" onClick={() => onCardClick(productId)}>
            <Image src={thumbnail} size="small" centered />
                {
                    auction ? (
                    <Card.Content> 
                        <Card.Header>
                            {name}
                        </Card.Header>
                        <Progress percent={75} size="tiny" color="orange"/>
                        <span className="card-price"> {price.toLocaleString()} บาท </span>
                        <span className="card-expired"> Expired </span>
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