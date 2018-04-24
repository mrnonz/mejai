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


class Organization extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeBar: 'history'
        }
    }

    componentDidMount() {
        const userId = cookie.load('userId')
        
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
        const userId = cookie.load('userId')
        const SidebarItems = [
            {
                value: 'seller-order',
                title: 'รายการสั่งซื้อถึงคุณ',
                icon: 'seller-order'
            },
            {
                value: 'issue',
                title: 'แจ้งปัญหา',
                icon: 'issue'
            },
            {
                value: 'logout',
                title: 'ออกจากระบบ',
                icon: 'logout'
            }
        ]

        const renderContent = () => {
            if (activeBar === 'seller-order') {
                const sortedOrder = reverse(sortBy(sellerOrders, (order) => order.created_by))
                return (
                    <Container>
                        <Container>
                            <Header as='h2' dividing color="orange" >
                                รายการสั่งซื้อถึงคุณ
                            </Header>
                            { isSellerOrderLoading ? <Loader wrapped /> : <OrderTable handleOrderRowClick={this.handleOrderRowClick.bind(Organization)} isSeller orders={sortedOrder} /> }
                        </Container>
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
            } else if (activeBar === 'logout') {
                cookie.remove('userId')
                Router.push({
                    pathname: '/'
                })
                return (
                    <Container>
                        <Loader wrapped />
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
        
    }
)

const mapDispatchToProps = (dispatch) => {
    
}

export default withRedux(makeStore, mapStateToProps, mapDispatchToProps)(withTopbar(Organization))