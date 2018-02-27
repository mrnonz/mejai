import React, { Component } from 'react'
import { Container, Header, Button } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../stores'
import withTopbar from 'hocs/withTopbar'
import HelpingTable from 'molecules/HelpingTable'
import ProductDataCard from 'molecules/ProductDataCard'

class ConfirmPost extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container className="confirm-post-page">
                <Header as='h2' dividing color="orange" >
                    ข้อมูลสินค้า
                </Header>
                <Header as='h5' >
                    โครงการที่ช่วยเหลือ
                </Header>
                <HelpingTable />
                <Header as='h5' >
                    สินค้าที่ลงขาย
                </Header>
                <ProductDataCard />
                <div className="button-wrapper">
                    <Button color="teal" size="large" >ดำเนินการต่อ</Button>
                </div>
            </Container>
        )
    }
}

export default withRedux(makeStore)(withTopbar(ConfirmPost))