import React, { Component } from 'react'
import { Card, Image, Progress, Header } from 'semantic-ui-react'

const ProductCard = ({ name, organization, price, auction }) => {
    return (
        <Card className="product-card">
            <Image src="static/shirt.jpg" size="small" centered />
                {
                    auction ? (
                    <Card.Content> 
                        <Card.Header>
                            {name}
                        </Card.Header>
                        <Progress percent={75} size="tiny" color="orange"/>
                        <span className="card-price"> {price.toLocaleString()} Baht </span>
                        <span className="card-expired"> Expired </span>
                    </Card.Content>
                    ) : (
                    <Card.Content> 
                        <Header as="h5" dividing>{name}</Header>
                        <p className="card-organization">  organization </p>
                        <p className="card-price"> {price.toLocaleString()} Baht </p>
                    </Card.Content>
                    )
                }
        </Card>
    )
}

export default ProductCard