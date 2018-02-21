import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import ProductDetail from 'organisms/ProductDetail'
import ProductInfo from 'organisms/ProductInfo'
import { Container } from 'semantic-ui-react'

class Product extends Component {
    render() {
        return (
            <Container className="product-page">
                <ProductDetail />
                <ProductInfo />
            </Container>
        )
    }
}

export default withRedux(makeStore)(withTopbar(Product))