import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import { Container, Menu, Header, Segment, Button } from 'semantic-ui-react'
import SellingForm from 'molecules/SellingForm';
import AuctionForm from 'molecules/AuctionForm';

class Posting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuActive: 'selling'
        }
    }

    handleMenuClick = (name) => {
        this.setState({
                menuActive: name
        })
    }

    render() {
        const { menuActive } = this.state
        const renderForm = () => {
            if(menuActive === 'selling') {
                return <SellingForm />
            }
            return <AuctionForm />
        }
        return (
            <Container className="posting-page">
                <Header as='h2' dividing color="orange" >
                    เพิ่มสินค้าเข้าระบบ
                </Header>
                <Menu attached='top'>
                    <Menu.Item
                        name='selling'
                        active={'selling' === menuActive}
                        onClick={()=>this.handleMenuClick('selling')}
                    >
                        ลงขาย
                    </Menu.Item>
                    <Menu.Item
                        name='auction'
                        active={'auction' === menuActive}
                        onClick={()=>this.handleMenuClick('auction')}
                    >
                        ลงประมูล
                    </Menu.Item>
                </Menu>
                <Segment className="form-wrapper" attached='bottom'>
                    { renderForm() }
                    <div className="button-group">
                        <Button color="green" size="large">ดำเนินการต่อ</Button>
                        <Button className="back" basic>ย้อนกลับ</Button>
                    </div>
                </Segment>
            </Container>
        )
    }
}

export default withRedux(makeStore)(withTopbar(Posting))