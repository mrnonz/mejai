import React, { Component } from 'react'
import Router from 'next/router'
import Svg from 'react-inlinesvg'
import { Header, Menu, Container, Button } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import cookie from 'react-cookie'
import withTopbar from 'hocs/withTopbar'
import Loader from 'molecules/Loader'
import OrderTable from 'molecules/OrderTable'
import ProductList from 'molecules/ProductList'
import IssueForm from 'molecules/IssueForm'
import products from 'stores/mock/auction_products.json'
import { fetchOrders } from 'stores/actions/order'

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

    render() {
        const { activeBar } = this.state
        const {
            orders: {
                isLoading: isOrderLoading,
                data: {
                    data: orders
                }
            }
        } = this.props
        const SidebarItems = [
            {
                value: 'history',
                title: 'รายการสั่งซื้อ',
                icon: 'history'
            },
            {
                value: 'user-item',
                title: 'สินค้าของคุณ',
                icon: 'box'
            },
            {
                value: 'issue',
                title: 'แจ้งปัญหา',
                icon: 'issue'
            }
        ]
        const renderContent = () => {
            if (activeBar === 'history') {
                return (
                    <Container>
                        <Header as='h2' dividing color="orange" >
                            รายการสั่งซื้อของคุณ
                        </Header>
                        { isOrderLoading ? <Loader wrapped /> : <OrderTable orders={orders} /> }
                    </Container>
                )
            } else if (activeBar === 'user-item') {
                return (
                    <Container>
                        <Header as='h2' dividing color="orange" >
                            สินค้าของคุณ
                        </Header>
                        <p>พบ {products.data.length} รายการ</p>
                        <ProductList products={products.data} onCardClick={this.handleCardClick}/>
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
        orders: state.orders
    }
)

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: (userId) => {
            dispatch(fetchOrders(userId))
        }
    }
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(User))