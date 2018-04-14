import React, { Component } from 'react'
import Router from 'next/router'
import Svg from 'react-inlinesvg'
import { sortBy, reverse } from 'lodash'
import { Header, Menu, Container, Button } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import cookie from 'react-cookie'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import OrderTable from 'molecules/OrderTable'
import ProductList from 'molecules/ProductList'
import IssueForm from 'molecules/IssueForm'
import UserForm from 'molecules/UserForm'
import UserProducts from 'stores/models/UserProducts'
import { fetchBuyProducts } from 'stores/actions/product'
import { fetchOrders } from 'stores/actions/order'
import { fetchSellerOrder, fetchUserAddress, fetchUserDetail, updateUserDetail } from 'stores/actions/user'

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeBar: 'history'
        }
    }

    componentDidMount() {
        const userId = cookie.load('userId')
        this.props.fetchOrders(userId)
        this.props.fetchSellerOrder(userId)
        this.props.fetchUserAddress(userId)
        this.props.fetchUserDetail(userId)
        this.props.fetchBuyProducts()
    }

    handleBarClick(value) {
        this.setState({
            activeBar: value
        })
    }

    handleCardClick = () => {
        Router.push({
            pathname: '/product'
        })
    }

    
    handleOrderRowClick = (orderId, isSeller) => {
        Router.push({
            pathname: '/order',
            query: {
                id: orderId,
                type: isSeller && 'seller'
            }
        })
    }

    handleUpdateUserDetail = (detail) => {
        const userId = cookie.load('userId')
        this.props.updateUserDetail(userId, detail)
    }

    render() {
        const { activeBar } = this.state
        const {
            orders: {
                isLoading: isOrderLoading,
                data: {
                    data: orders = []
                }
            },
            products: {
                isLoading: isProductsLoading,
                data: products
            },
            user: {
                isLoading: isUserLoading,
                isLoadingOrder: isSellerOrderLoading,
                orders: sellerOrders, 
                user
            }
        } = this.props
        const userId = cookie.load('userId')
        const SidebarItems = [
            {
                value: 'history',
                title: 'รายการสั่งซื้อของคุณ',
                icon: 'history'
            },
            {
                value: 'seller-order',
                title: 'รายการสั่งซื้อถึงคุณ',
                icon: 'seller-order'
            },
            {
                value: 'user-item',
                title: 'สินค้าของคุณ',
                icon: 'box'
            },
            {
                value: 'user-edit',
                title: 'ข้อมูลผู้ใช้',
                icon: 'user-edit'
            },
            {
                value: 'issue',
                title: 'แจ้งปัญหา',
                icon: 'issue'
            }
        ]

        const renderContent = () => {
            if (activeBar === 'history') {
                const sortedOrder = reverse(sortBy(orders, (order) => order.created_by))
                return (
                    <Container>
                        <Header as='h2' dividing color="orange" >
                            รายการสั่งซื้อของคุณ
                        </Header>
                        { isOrderLoading ? <Loader wrapped /> : <OrderTable handleOrderRowClick={this.handleOrderRowClick.bind(User)} orders={sortedOrder} /> }
                    </Container>
                )
            } else if (activeBar === 'seller-order') {
                const sortedOrder = reverse(sortBy(sellerOrders, (order) => order.created_by))
                return (
                    <Container>
                        <Container>
                        <Header as='h2' dividing color="orange" >
                            รายการสั่งซื้อถึงคุณ
                        </Header>
                        { isSellerOrderLoading ? <Loader wrapped /> : <OrderTable handleOrderRowClick={this.handleOrderRowClick.bind(User)} isSeller orders={sortedOrder} /> }
                    </Container>
                    </Container>
                )
            } else if (activeBar === 'user-item') {
                const userProducts = new UserProducts(products, userId).Products
                return (
                    <Container>
                        <Header as='h2' dividing color="orange" >
                            สินค้าของคุณ
                        </Header>
                        { isProductsLoading ? <Loader wrapped /> : [
                            <p>พบ {userProducts.length} รายการ</p>,
                            <ProductList products={userProducts} onCardClick={this.handleCardClick}/>
                        ] }
                    </Container>
                )
            } else if (activeBar === 'user-edit') {
                return (
                    <Container>
                        <Header as='h2' dividing color="orange" >
                            แก้ไขข้อมูลผู้ใช้
                        </Header>
                        { isUserLoading ?  <Loader wrapped /> :
                            <UserForm user={user} onSubmit={this.handleUpdateUserDetail} /> 
                        }
                    </Container>
                )
            } else if (activeBar === 'issue') {
                return (
                    <Container>
                        <Header as='h2' dividing color="orange" >
                            แจ้งปัญหาการใช้งาน
                        </Header>
                        <IssueForm />
                        <div className="button-group">
                            <Button color="green" size="large">แจ้งปัญหา</Button>
                        </div>
                    </Container>
                )
            }
        }

        return (
            <div className="user-page">
                <div className="sidebar">
                    { SidebarItems.map((item) => (
                        <div onClick={() => this.handleBarClick(item.value)} className={item.value === activeBar ? 'item active' : 'item'}>
                            <Svg src={`static/icons/${item.icon}.svg`} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div> 
                <div className="content">
                    { renderContent() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        products: state.products,
        orders: state.orders,
        user: state.user
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: (userId) => {
            dispatch(fetchOrders(userId))
        },
        fetchBuyProducts: () => {
            dispatch(fetchBuyProducts())
        },
        fetchSellerOrder: (userId) => {
            dispatch(fetchSellerOrder(userId))
        },
        fetchUserAddress: (customerId) => {
            dispatch(fetchUserAddress(customerId))
        },
        fetchUserDetail: (userId) => {
            dispatch(fetchUserDetail(userId))
        },
        updateUserDetail: (userId, detail) => {
            dispatch(updateUserDetail(userId, detail))
        }

    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(User))