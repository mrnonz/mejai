import React, { Component } from 'react'
import ProductDetail from 'organisms/ProductDetail'
import ProductInfo from 'organisms/ProductInfo'
import { Container } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import storeApp from 'stores'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

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

export default withRedux(() => createStore(storeApp, {mock: '', repository: ''}, composeWithDevTools(applyMiddleware(thunk)), null, null))(Product)