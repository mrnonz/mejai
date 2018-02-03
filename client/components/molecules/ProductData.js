import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

const ProductData = (props) => (
    <div className="product-data">
        <h2>Name</h2>
        <h3>Price</h3>
        <p>150 Baht</p>
        <h3>Helping</h3>
        <p>Organization</p>
        <h3>Expired At</h3>
        <p>Date</p>
        <Progress percent={75} size="tiny" color="orange"/>
        <Button color="blue" fluid>Primary</Button>
    </div>
)

export default ProductData