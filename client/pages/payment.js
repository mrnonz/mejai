import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react'
import PaymentTable from 'molecules/PaymentTable';

class Payment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container className="cart-page">
                <Header as='h2' dividing color="orange" >
                    ตะกร้าสินค้า <span>#1458</span>
                </Header>
                <PaymentTable />
            </Container>
        )
    }
}

export default Payment