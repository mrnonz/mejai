import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import UploadForm from 'molecules/UploadForm'
class SellingForm extends Component {
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
                    <Form.Input fluid label='ราคา' placeholder='ราคาสินค้าต่อชิ้นที่เหมาะสม' />
                    <Form.Input fluid label='จำนวน' placeholder='จำนวนสินค้า' />
                </Form.Group>
                <UploadForm />
                <Form.TextArea label="รายละเอียด" placeholder="ข้อมูลเพิ่มเติมสินค้าของคุณ" />
            </Form>
        )
    }
}

export default SellingForm