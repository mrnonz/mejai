import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import HelpingTable from 'molecules/HelpingTable';
class ConfirmPost extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container className="confirm-post-page">
                <Header as='h2' dividing color="orange" >
                    ข้อมูลการจัดส่ง
                </Header>
                <Header as='h5' >
                    โครงการที่ช่วยเหลือ
                </Header>
                <HelpingTable />
                <Header as='h5' >
                    สินค้าที่ลงขาย
                </Header>
            </Container>
        )
    }
}

export default ConfirmPost