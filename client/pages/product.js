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
import { Container, Modal, Button, Icon, Segment, Header, Transition } from 'semantic-ui-react'
import { fetchProductItem, fetchAuctionItem } from 'stores/actions/product'
import { updateCartItem } from 'stores/actions/cart'
import { getCurrentTime, bidAuction } from 'stores/actions/auction'

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            errorModal: false,
            errorMessage: '',
            bidding: false,
            intervalId: 0,
            gettingTime: false,
            bidPrice: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.cart.updated) {
            this.setState({
                showModal: true
            })
        }

        if(this.state.gettingTime && this.state.bidding) {
            const { bidPrice } = this.state
            const { lastest_price, price_step } = this.props.product.data.auction
            const { url: { query: { id: productId } } } = this.props
            const userId = cookie.load('userId')
            if(bidPrice >= +lastest_price + +price_step) {
                const bid = { userId, price: bidPrice }
                this.props.bidAuction(productId, bid)
                this.setState({
                    gettingTime: false,
                    bidding: false
                })
            } else {
                this.setState({
                    errorModal: true,
                    errorMessage: 'ราคาที่เพิ่มน้อยกว่าขั้นต่ำ',
                    gettingTime: false,
                    bidding: false
                })
            }
        }

        if(this.state.bidding && nextProps.auction.isSuccess) {
            const { url: { query: { id: productId, type: itemType } } } = this.props            
            this.props.fetchProductItem(productId)
            this.props.getCurrentTime()
            this.setState({
                bidding: false
            })
        }
    }

    componentDidMount() {
        const { url: { query: { id: productId, type: itemType } } } = this.props
        this.props.fetchProductItem(productId)
        this.props.getCurrentTime()
        if (itemType === 'auction') {
            const intervalId = setInterval(() => { this.props.fetchAuctionItem(productId) }, 2500);
            this.setState({ intervalId })
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

    handleAddToCart(itemId, attributeId) {
        const userId = cookie.load('userId')
        const { product: { data: { attributes } } } = this.props
        if (userId) {
            if (isEmpty(attributes)) {
                this.props.updateCartItem(userId, itemId, null, 1)
            } else {
                this.props.updateCartItem(userId, itemId, attributes[attributeId].id, 1)
            }
        } else {
            this.setState({
                errorModal: true,
                errorMessage: 'กรุณาเข้าสู่ระบบ'
            })
        }
    } 

    handleBidding(price) {
        const userId = cookie.load('userId')
        this.props.getCurrentTime()
        if (userId) {
            this.setState({
                gettingTime: true,
                bidding: true,
                bidPrice: price
            })
        } else {
            this.setState({
                errorModal: true,
                errorMessage: 'กรุณาเข้าสู่ระบบ'
            })
        }
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }

    closeErrorModal() {
        this.setState({
            errorModal: false
        })
    }

    redirectToPage(path) {
        Router.push({
            pathname: path
        })
    }

    render() {
        const { showModal, errorModal, errorMessage } = this.state
        const { 
            product: { 
                data: product = [], 
                isLoading 
            }, 
            cart: { 
                isUpdating = false, 
                updated = false },
            user: {
                isLoadingOrder,
                orders
                },
            auction: {
                isLoading: isAuctionLoading,
                time: currentTime
            } 
        } = this.props
        const { url: { query: { type: itemType } } } = this.props
        return (
            <Container className="product-page">
                {/* TODO Modify Modal */}
                <Transition visible={showModal} animation='fade up' duration={500} unmountOnHide >
                    <Modal open={true}>
                        <Modal.Header>เพิ่มสินค้าในตะกร้าสำเร็จ</Modal.Header>
                        <Modal.Content>
                            <Button positive icon='checkmark' labelPosition='right' content="ยืนยัน" onClick={() => this.closeModal()} />
                            <Button color="yellow" icon='cart' labelPosition='right' content="ตะกร้าสินค้า" onClick={() => this.redirectToPage('/cart')} />
                            <Button content="กลับสู่หน้าหลัก" onClick={() => this.redirectToPage('/')} />
                        </Modal.Content>
                    </Modal>
                </Transition>
                <Transition visible={errorModal} animation='fade up' duration={500} unmountOnHide >
                    <Modal open={true}>
                        <Segment basic textAlign="center">
                            <Icon name="check close" size="massive" color="red" />
                            <Header as='h5' >
                                { errorMessage }
                            </Header>
                            <Button 
                                color="teal" 
                                size="large"
                                content="ยืนยัน"
                                onClick={ () => this.closeErrorModal() }
                            />
                        </Segment>
                    </Modal>
                </Transition>
                { isAuctionLoading || isLoading || isUpdating ? <Loader wrapped />
                :
                [
                    <ProductDetail 
                        itemType={itemType} 
                        product={product} 
                        isUpdating={isUpdating}
                        isLoadingOrder={isLoadingOrder}
                        orders={orders}
                        currentTime={currentTime}
                        onBid={this.handleBidding.bind(this)}
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
        auction: state.auction,
        user: state.user
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductItem: (productId) => {
            dispatch(fetchProductItem(productId))
        },
        fetchAuctionItem: (productId) => {
            dispatch(fetchAuctionItem(productId))
        },
        updateCartItem: (customerId, itemId, attributeId, qty) => {
            dispatch(updateCartItem(customerId, itemId, attributeId, qty))
        },
        getCurrentTime: () => {
            dispatch(getCurrentTime())
        },
        bidAuction: (productId, data) => {
            dispatch(bidAuction(productId, data))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Product))