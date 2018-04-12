import React, { Component } from 'react'
import { isNil } from 'lodash'
import { Form, Select, Button, Table, Transition } from 'semantic-ui-react'
import UploadForm from 'molecules/UploadForm'

class SellingForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasAttribute: false,
            attributeName: '',
            attributes: [{
                value: '',
                quantity: ''
            }]
        }
    }

    onAttributeChange(e, { name, value }) {
        if(value != '') {
            this.setState({
                attributeName: value,
                hasAttribute: true
            })
            this.props.onHasAttribute(true, value)
        } else {
            this.setState({
                attributeName: value,
                hasAttribute: false
            })
            this.props.onHasAttribute(false, value)
        }
    }

    handleAddAttribute() {
        const { attributes } = this.state
        if(attributes.length < 5) {
            attributes.push({
                value: '',
                quantity: ''
            })
            this.setState({
                attributes: attributes
            })
        }
    }

    handleRemoveAttribute() {
        const { attributes } = this.state
        if(attributes.length > 1) {
            attributes.pop()
            this.setState({
                attributes: attributes
            })
        }
    }

    handleAttributeChange(e, { name, value }, index) {
        const { attributes } = this.state
        attributes[index] = {
            ...attributes[index],
            [name]: value
        }
        this.setState({
            attributes: attributes
        })
        this.props.onAttributeChange(attributes)
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
        const { attributes, hasAttribute } = this.state
        const { onChange, onSubmit, onFileUpload } = this.props
        return (
            <Form onSubmit={onSubmit} >
                <Form.Group widths='equal'>
                    <Form.Input required fluid name="name" label='ชื่อสินค้า' placeholder='สินค้าของคุณ เช่น กระเป๋า' onChange={onChange} />
                    <Form.Field required control={Select} fluid name="category" options={categoriesOption} label='หมวดหมู่' placeholder='ประเภทสินค้า' onChange={onChange} />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input required fluid name="price" label='ราคา' placeholder='ราคาสินค้าต่อชิ้นที่เหมาะสม' onChange={onChange} />
                    <Form.Input required={!hasAttribute} disabled={hasAttribute} fluid name="quantity" label='จำนวน' placeholder='จำนวนสินค้า' onChange={onChange} />
                </Form.Group>
                <Table basic className="attribute-table" fixed>
                    <Table.Row>
                        <Table.Cell verticalAlign="top" width={8}><Form.Input fluid name="attributeName" label='คุณสมบัติ (ถ้ามี)' placeholder='คุณสมบัติของสินค้า เช่น ขนาด, สี' onChange={this.onAttributeChange.bind(this)} /></Table.Cell>
                    </Table.Row>
                    { hasAttribute && <Table.Row>
                        <Table.Cell className="attribute-value" width={8}>
                            <Form.Group widths='equal'>
                                <Form.Input required fluid name="value" label='ชื่อ' placeholder='เช่น ขนาดเล็ก, สีน้ำเงิน' onChange={(e,value) => this.handleAttributeChange(e,value,0)} />
                                <Form.Input required fluid name="quantity" label='จำนวน' placeholder='จำนวนสินค้าคุณสมบัติ' onChange={(e,value) => this.handleAttributeChange(e,value,0)} />
                            </Form.Group>
                            {
                                attributes.map((a, index) => (
                                    !!index &&<Form.Group widths='equal'>
                                        <Form.Input required fluid name="value" placeholder='เช่น ขนาดเล็ก, สีน้ำเงิน' onChange={(e,value) => this.handleAttributeChange(e,value,index)} />
                                        <Form.Input required fluid name="quantity" placeholder='จำนวนสินค้าคุณสมบัติ' onChange={(e,value) => this.handleAttributeChange(e,value,index)} />
                                    </Form.Group>
                                ))
                            }
                            <Button 
                                type="button"
                                color="teal"
                                content="เพิ่มคุณสมบัติ"
                                disabled={!(attributes.length < 5)}
                                onClick={this.handleAddAttribute.bind(this)}
                            />
                            <Button 
                                type="button"
                                color="red"
                                content="ลบคุณสมบัติ"
                                disabled={!(attributes.length > 1)}
                                onClick={this.handleRemoveAttribute.bind(this)}
                            />
                        </Table.Cell> 
                    </Table.Row> }
                </Table>
                <UploadForm 
                    label="คุณยังไม่มีรูปภาพสินค้าของคุณ" 
                    fileLimit={5} 
                    onFileUpload={onFileUpload}
                />
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