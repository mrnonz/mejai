import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react'
import ItemTable from 'molecules/ItemTable'
import CartSummary from 'molecules/CartSummary'
import CartModel from 'stores/models/CartModel'
import cartMock from 'stores/mock/cart_mock.json'

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const userCart = new CartModel(cartMock)
        return (
            <Container className="cart-page">
                <Header as='h2' dividing color="orange" >
                    ตะกร้าสินค้า
                </Header>
                <main className="content">
                    <div className="cart-content">
                        <ItemTable items={userCart.items}/>
                    </div>
                    <div className="cart-summary">
                        <CartSummary organizations={userCart.organizationList}/>
                    </div>
                </main>
            </Container>
        )
    }
}

export default Cart