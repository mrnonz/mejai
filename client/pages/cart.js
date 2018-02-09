import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react'
import ItemTable from 'molecules/ItemTable'
import CartSummary from 'molecules/CartSummary'
import cart from 'stores/mock/cart.json'

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Container className="cart-page">
                <Header as='h2' dividing color="orange" >
                    ตะกร้าสินค้า
                </Header>
                <main className="content">
                    <div className="cart-content">
                        <ItemTable items={cart.items}/>
                    </div>
                    <div className="cart-summary">
                        <CartSummary items={cart.items}/>
                    </div>
                </main>
            </Container>
        )
    }
}

export default Cart