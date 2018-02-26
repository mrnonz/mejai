import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

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
            </Container>
        )
    }
}

export default ConfirmPost