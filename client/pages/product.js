import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import cookie from 'react-cookie'
import { isEmpty } from 'lodash'
import { makeStore } from '../stores'
import Router from 'next/router'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import ProductDetail from 'organisms/ProductDetail'
import ProductInfo from 'organisms/ProductInfo'
import { Container, Modal, Button } from 'semantic-ui-react'
import { fetchProductItem } from 'stores/actions/product'
import { updateCartItem } from 'stores/actions/cart'

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.cart.updated) {
            this.setState({
                showModal: true
            })
        }
    }

    componentDidMount() {
        const { url: { query: { id: productId } } } = this.props
        this.props.fetchProductItem(productId)
    }

    handleAddToCart(itemId, attributeId) {
        const userId = cookie.load('userId')
        const { product: { data: { attributes } } } = this.props
        if (isEmpty(attributes)) {
            this.props.updateCartItem(userId, itemId, null, 1)
        } else {
            this.props.updateCartItem(userId, itemId, attributes[attributeId].id, 1)
        }
        
    } 

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    redirectToPage(path) {
        Router.push({
            pathname: path
        })
    }

    render() {
        const { showModal } = this.state
        const { 
            product: { 
                data: product = [], 
                isLoading }, 
            cart: { 
                isUpdating = false, 
                updated = false },
            user: {
                isLoadingOrder,
                orders
                } 
            } = this.props
        const { url: { query: { type: itemType } } } = this.props
        return (
            <Container className="product-page">
                {/* TODO Modify Modal */}
                <Modal open={showModal}>
                    <Modal.Header>เพิ่มสินค้าในตะกร้าสำเร็จ</Modal.Header>
                    <Modal.Content>
                        <Button positive icon='checkmark' labelPosition='right' content="ยืนยัน" onClick={() => this.closeModal()} />
                        <Button color="yellow" icon='cart' labelPosition='right' content="ตะกร้าสินค้า" onClick={() => this.redirectToPage('/cart')} />
                        <Button content="กลับสู่หน้าหลัก" onClick={() => this.redirectToPage('/')} />
                    </Modal.Content>
                </Modal>
                { isLoading || isUpdating ? <Loader wrapped />
                :
                [
                    <ProductDetail 
                        itemType={itemType} 
                        product={product} 
                        isUpdating={isUpdating}
                        isLoadingOrder={isLoadingOrder}
                        orders={orders}
                        onAdd={this.handleAddToCart.bind(this)}
                    />,
                    <ProductInfo product={product} />
                ]
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
        product: state.product,
        cart: state.cart,
        user: state.user
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductItem: (productId) => {
            dispatch(fetchProductItem(productId))
        },
        updateCartItem: (customerId, itemId, attributeId, qty) => {
            dispatch(updateCartItem(customerId, itemId, attributeId, qty))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Product))