import React from 'react'
import { Form } from 'semantic-ui-react'

const ShippingForm = (props) => (
    <Form>
        <Form.Input fluid label='ชื่อ - สกุล' placeholder='ชื่อ - สกุล' />
        <Form.Input fluid label='เบอร์โทรศัพท์ติดต่อ' placeholder='เบอร์โทรศัพท์ติดต่อ' />
        <Form.Group widths='equal'>
            <Form.Input fluid label='ตำบล / แขวง' placeholder='ตำบล / แขวง' />
            <Form.Input fluid label='อำเภอ / เขต' placeholder='อำเภอ / เขต' />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input fluid label='จังหวัด' placeholder='จังหวัด' />
            <Form.Input fluid label='รหัสไปรษณีย์' placeholder='รหัสไปรษณีย์' />
        </Form.Group>
    </Form>
)

export default ShippingForm