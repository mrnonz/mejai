import React, { Component } from 'react'
import { Container, Header, Grid, Button } from 'semantic-ui-react'
import ItemTable from 'molecules/ItemTable'
import OrderInfo from 'molecules/OrderInfo'
import CartModel from 'stores/models/CartModel'
import cartMock from 'stores/mock/cart_mock.json'
import HelpingTable from 'molecules/HelpingTable';

class Order extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const userCart = new CartModel(cartMock)
        return (
            <Container className="order-page">
                <Header as='h2' dividing color="orange" >
                    รายการสั่งซื้อ <span> #1458</span>
                </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <ItemTable items={userCart.items}/>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <OrderInfo />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <HelpingTable />
                        </Grid.Column>
                    </Grid.Row>
                    <div className="button-group">
                        <Button color="green" size="large">ได้รับของแล้ว</Button>
                        <Button color="teal" size="large">ย้อนกลับ</Button>
                    </div>
                </Grid>
            </Container>
        )
    }
}

export default Order