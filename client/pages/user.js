import React, { Component } from 'react'
import Svg from 'react-inlinesvg'
import { Header, Menu, Container } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import OrderTable from 'molecules/OrderTable';

class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeBar: 'history'
        }
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
            }
        ]
        return (
            <div className="user-page">
                <div className="sidebar">
                    { SidebarItems.map((item) => (
                        <div className={item.value === activeBar ? 'item active' : 'item'}>
                            <Svg src={`static/icons/${item.icon}.svg`} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div> 
                <div className="content">
                    <Container>
                        <Header as='h2' dividing color="orange" >
                            ประวัติการซื้อของคุณ
                        </Header>
                        <OrderTable />
                    </Container>
                </div>
            </div>
        )
    }
}

export default withRedux(makeStore)(withTopbar(User))