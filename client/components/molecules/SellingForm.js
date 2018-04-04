import React, { Component } from 'react'
import { Form, Select, Button } from 'semantic-ui-react'
import UploadForm from 'molecules/UploadForm'
class SellingForm extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const categoriesOption = [
            {
                key: 'wearable',
                text: 'เครื่องแต่งกาย',
                value: 1
            },
            {
                key: 'electronic',
                text: 'เครื่องใช้ไฟฟ้า',
                value: 2
            },
            {
                key: 'collectable',
                text: 'ของสะสม',
                value: 3
            }
        ]
        const { onChange, onSubmit } = this.props
        return (
            <Form onSubmit={onSubmit} >
                <Form.Group widths='equal'>
                    <Form.Input fluid name="name" label='ชื่อสินค้า' placeholder='สินค้าของคุณ เช่น กระเป๋า' onChange={onChange} />
                    <Form.Field control={Select} fluid name="category" options={categoriesOption} label='หมวดหมู่' placeholder='ประเภทสินค้า' onChange={onChange} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid name="price" label='ราคา' placeholder='ราคาสินค้าต่อชิ้นที่เหมาะสม' onChange={onChange} />
                    <Form.Input fluid name="quantity" label='จำนวน' placeholder='จำนวนสินค้า' onChange={onChange} />
                </Form.Group>
                <UploadForm />
                <Form.TextArea name="info" label="รายละเอียด" placeholder="ข้อมูลเพิ่มเติมสินค้าของคุณ" onChange={onChange} />
                <div className="button-group">
                    <Button color="green" size="large">ดำเนินการต่อ</Button>
                    <a className="back">ย้อนกลับ</a>
                </div>
            </Form>
        )
    }
}

export default SellingForm