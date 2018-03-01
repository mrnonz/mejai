import React, { Component } from 'react'
import Router from 'next/router'
import Svg from 'react-inlinesvg'
import { Header, Menu, Container, Button } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import OrderTable from 'molecules/OrderTable'
import ProductList from 'molecules/ProductList'
import IssueForm from 'molecules/IssueForm'
import products from 'stores/mock/auction_products.json'

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeBar: 'history'
        }
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
        const SidebarItems = [
            {
                value: 'history',
                title: 'ประวัติการซื้อ',
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
                            ประวัติการซื้อของคุณ
                        </Header>
                        <OrderTable />
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

export default withRedux(makeStore)(withTopbar(User))