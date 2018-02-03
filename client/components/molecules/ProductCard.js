import React, { Component } from 'react'
import { Card, Image, Progress } from 'semantic-ui-react'

const ProductCard = (props) => {
    return (
        <Card>
            <Image src="static/shirt.jpg" size="small" centered />
            <Card.Content> 
                <Card.Header>
                    {props.name}
                </Card.Header>
                <Progress percent={75} size="tiny" color="orange"/>
                <span className="card-price"> {props.price.toLocaleString()} Baht </span>
                <span className="card-expired"> Expired </span>
            </Card.Content>
        </Card>
    )
}

export default ProductCard