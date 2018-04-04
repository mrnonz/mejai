import React, { Component } from 'react'
import { Container, Header, Grid, Button, Modal } from 'semantic-ui-react'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import cookie from 'react-cookie'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import CartSummary from 'molecules/CartSummary'
import ShippingForm from 'molecules/ShippingForm'
import ItemTable from 'molecules/ItemTable'
import CartModel from 'stores/models/CartModel'
import { fetchCart } from 'stores/actions/cart'

class Shipping extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showConfirmModal: false
        }
    }

    componentDidMount() {
        const customerId = cookie.load('userId')
        this.props.fetchCart(customerId)
    }

    showConfirmModal() {
        this.setState({
            showConfirmModal: true
        })
    }

    hideConfirmModal() {
        this.setState({
            showConfirmModal: false
        })
    }

    render() {
        const { showConfirmModal } = this.state
        const { cart: { data: cart, isLoading } } = this.props
        const userCart = new CartModel(cart)
        return (
            <Container className="shipping-page">
                <Modal open={showConfirmModal}>
                    <Modal.Header>ยืนยันคำสั่งซื้อของคุณ</Modal.Header>
                    <Modal.Content>
                        <ItemTable 
                            items={userCart.items} 
                        />
                        <Button positive icon='checkmark' labelPosition='right' content="ยืนยัน" onClick={() => this.hideConfirmModal()} />
                        <Button negative icon='close' labelPosition='right' content="ย้อนกลับ" onClick={() => this.hideConfirmModal()} />
                    </Modal.Content>
                </Modal>
                <Header as='h2' dividing color="orange" >
                    ข้อมูลการจัดส่ง
                </Header>
                { isLoading ? <Loader wrapped /> : 
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
                            <Button onClick={() => this.showConfirmModal()} color="teal" size="large">ดำเนินการต่อ</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
        cart: state.cart
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: (customerId) => {
            dispatch(fetchCart(customerId))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Shipping))