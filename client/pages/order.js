import React, { Component } from 'react'
import { Container, Header, Grid, Button } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import OrderItemCard from 'molecules/OrderItemCard'
import OrderInfo from 'molecules/OrderInfo'
import OrderButton from 'molecules/OrderButton'
import OrderModel from 'stores/models/Order'
import HelpingTable from 'molecules/HelpingTable'
import { fetchOrder } from 'stores/actions/order'

class Order extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { url: { query: { id: orderId } } } = this.props
        this.props.fetchOrder(orderId)
    }

    render() {
        const { order: { isLoading, data, data: { address = '' } } } = this.props
        const { url: { query: { type } } } = this.props
        const order = new OrderModel(data)
        return isLoading ? <Loader wrapped /> :
            <Container className="order-page">
                <Header as='h2' dividing color="orange" >
                    รายการสั่งซื้อ <span> #{ order.OrderId }</span>
                </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <OrderItemCard item={ order.Item } />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <OrderInfo order={ order } />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <HelpingTable organization={ order.Organization } />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Header as='h4' color="orange" >
                    หลักฐานการโอน
                </Header>
                <div className="button-group">
                    { type === 'seller' ?
                        order.OrderStatusId == 2 && <OrderButton orderStatus={ order.OrderStatusId } /> :
                        <OrderButton orderStatus={ order.OrderStatusId } />
                    }
                    <Button color="teal" size="large">ย้อนกลับ</Button>
                </div>
            </Container>
    }
}

const mapStateToProps = (state) => ({
        order: state.order
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrder: (orderId) => {
            dispatch(fetchOrder(orderId))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Order))