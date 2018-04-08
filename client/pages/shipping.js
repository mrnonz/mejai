import React, { Component } from 'react'
import { Container, Header, Grid, Button, Modal, Dimmer } from 'semantic-ui-react'
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
import UserAddress from 'stores/models/UserAddress'
import { fetchCart } from 'stores/actions/cart'
import { fetchUserAddress } from 'stores/actions/user'
import { createOrder } from 'stores/actions/order'

class Shipping extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showConfirmModal: false,
            name: '',
            tel: '',
            district: '',
            subDistrict: '',
            province: '',
            postcode: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.order.isCreated) {
            Router.push({
                pathname: '/user'
            })
        }
    }

    componentDidMount() {
        const customerId = cookie.load('userId')
        this.props.fetchCart(customerId)
        this.props.fetchUserAddress(customerId)
    }

    handleChange = (e, { name, value }) => {
        this.setState({
            [name]: value
        })
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

    handleConfirmModal() {
        const { name, tel, district, subDistrict, province, postcode } = this.state
        const { cart: { data: cart } } = this.props
        // TODO Firstname and lastname to name
        const address = {
            firstname: name, lastname: name, tel, district, subDistrict, province, postcode
        }
        const customerId = cookie.load('userId')
        this.props.createOrder(customerId, cart, address)
    }

    render() {
    const { showConfirmModal } = this.state
        const { 
            cart: { 
                data: cart, 
                isLoading: isCartLoading 
            }, 
            user: {
                address: address,
                isLoading: isAddressLoading,
                isUpdating: isAddressUpdating
            },
            order: {
                isCreating: isOrderCreating
            }
        } = this.props
        const userCart = new CartModel(cart)
        const userAddress = new UserAddress(address)
        return (
            <Container className="shipping-page">
                <Modal open={showConfirmModal}>
                { isOrderCreating && <Dimmer active> <Loader /> </Dimmer> }
                    <Modal.Header>ยืนยันคำสั่งซื้อของคุณ</Modal.Header>
                    <Modal.Content>
                        <ItemTable 
                            items={userCart.items} 
                        />
                        <Button positive icon='checkmark' labelPosition='right' content="ยืนยัน" onClick={() => this.handleConfirmModal()} />
                        <Button negative icon='close' labelPosition='right' content="ย้อนกลับ" onClick={() => this.hideConfirmModal()} />
                    </Modal.Content>
                </Modal>
                <Header as='h2' dividing color="orange" >
                    ข้อมูลการจัดส่ง
                </Header>
                { isCartLoading || isAddressLoading ? <Loader wrapped /> : 
                <Grid className="shipping-content">
                    <Grid.Row>
                        <Grid.Column width={8} className="form-wrapper">
                            <ShippingForm onChange={this.handleChange} address={userAddress} />
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
        cart: state.cart,
        user: state.user,
        order: state.order
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCart: (customerId) => {
            dispatch(fetchCart(customerId))
        },
        fetchUserAddress: (customerId) => {
            dispatch(fetchUserAddress(customerId))
        },
        createOrder: (customerId, cart, address) => {
            dispatch(createOrder(customerId, cart, address))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Shipping))