import React, { Component } from 'react'
import { Container, Header, Grid, Button } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import CartSummary from 'molecules/CartSummary'
import ShippingForm from 'molecules/ShippingForm'
import CartModel from 'stores/models/CartModel'
import cartMock from 'stores/mock/cart_mock.json'

class Shipping extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const userCart = new CartModel(cartMock)
        return (
            <Container className="shipping-page">
                <Header as='h2' dividing color="orange" >
                    ข้อมูลการจัดส่ง
                </Header>
                <Grid className="shipping-content">
                    <Grid.Row>
                        <Grid.Column width={8} className="form-wrapper">
                            <ShippingForm />
                        </Grid.Column>
                        <Grid.Column width={8} className="table-wrapper">
                            <CartSummary organizations={userCart.organizationList} showButton={false} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered columns={6}>
                        <Grid.Column>
                            <Button color="teal" size="large">ดำเนินการต่อ</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default withRedux(makeStore)(withTopbar(Shipping))