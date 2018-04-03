import React, { Component } from 'react'
import { Header, Container } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import ItemTable from 'molecules/ItemTable'
import CartSummary from 'molecules/CartSummary'
import CartModel from 'stores/models/CartModel'
import { fetchCart, updateCartItem, deleteCartItem } from 'stores/actions/cart'

class Cart extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        const { url: { query: { id: customerId } } } = this.props
        this.props.fetchCart(customerId)
    }

    handleCartItemEdit(isPlus, item) {
        const { itemId, quantity } = item
        const { url: { query: { id: customerId } } } = this.props
        if(isPlus) {
            this.props.updateCartItem(customerId, itemId, 1)
        } else {
            if(item.quantity === 1) {
                this.props.deleteCartItem(customerId, itemId)
            } else {
                this.props.updateCartItem(customerId, itemId, -1)
            }
        }
    }

    handleCartItemDelte(item) {
        const { itemId } = item
        const { url: { query: { id: customerId } } } = this.props
        this.props.deleteCartItem(customerId, itemId)
    }

    render() {
        const { cart: { data: cart, isLoading, isUpdating = false } } = this.props
        const userCart = new CartModel(cart)
        return (
            <Container className="cart-page">
                <Header as='h2' dividing color="orange" >
                    ตะกร้าสินค้า
                </Header>
                { isLoading ? <Loader wrapped /> :
                <main className="content">
                    <div className="cart-content">
                        <ItemTable 
                            editable 
                            onEdit={this.handleCartItemEdit.bind(this)} 
                            onDelete={this.handleCartItemDelte.bind(this)} 
                            items={userCart.items} 
                            isUpdating={isUpdating} 
                        />
                    </div>
                    <div className="cart-summary">
                        <CartSummary organizations={userCart.organizationList} />
                    </div>
                </main>
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
        },
        updateCartItem: (customerId, itemId, qty) => {
            dispatch(updateCartItem(customerId, itemId, qty))
        },
        deleteCartItem: (customerId, itemId) => {
            dispatch(deleteCartItem(customerId, itemId))
        }

    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Cart))