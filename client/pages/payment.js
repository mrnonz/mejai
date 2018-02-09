import React, { Component } from 'react'
import { Header, Container, Button } from 'semantic-ui-react'
import PaymentTable from 'molecules/PaymentTable'
import CartModel from 'stores/models/CartModel'
import cartMock from 'stores/mock/cart_mock.json'

class Payment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const organizationList = new CartModel(cartMock).organizationList
        return (
            <Container className="payment-page">
                <Header as='h2' dividing color="orange" >
                    ตะกร้าสินค้า <span className="order-id">#1458</span>
                </Header>
                <PaymentTable organizations={organizationList} />
                <div className="button-wrapper">
                    <Button color="teal" size="huge">ย้อนกลับ</Button>
                </div>
            </Container>
        )
    }
}

export default Payment