import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class AuctionForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='ชื่อสินค้า' placeholder='สินค้าของคุณ เช่น กระเป๋า' />
                    <Form.Input fluid label='หมวดหมู่' placeholder='ประเภทสินค้า' />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='ราคาเริ่มต้น' placeholder='ราคาเริ่มต้นเมื่อการประมูลเริ่ม' />
                </Form.Group>
                <Form.TextArea label="รายละเอียด" placeholder="ข้อมูลเพิ่มเติมสินค้าของคุณ" />
            </Form>
        )
    }
}

export default AuctionForm