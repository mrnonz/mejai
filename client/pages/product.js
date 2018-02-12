import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import storeApp from 'stores'
import ProductDetail from 'organisms/ProductDetail'
import ProductInfo from 'organisms/ProductInfo'
import { Container } from 'semantic-ui-react'
import { composeWithDevTools } from 'redux-devtools-extension'
import page from 'hocs/page'

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

export default page(Product)