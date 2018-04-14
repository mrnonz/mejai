import React from 'react'
import { Form } from 'semantic-ui-react'

const ShippingForm = ({ onChange, address = {} }) => (
    <Form>
        <Form.Input defaultValue={address.name} name="name" fluid label='ชื่อ - สกุล' placeholder='ชื่อ - สกุล' onChange={onChange} />
        <Form.Input defaultValue={address.tel} name="tel" fluid label='เบอร์โทรศัพท์ติดต่อ' placeholder='เบอร์โทรศัพท์ติดต่อ' onChange={onChange} />
        <Form.Group widths='equal'>
            <Form.Input defaultValue={address.district} name="district" fluid label='ตำบล / แขวง' placeholder='ตำบล / แขวง' onChange={onChange} />
            <Form.Input defaultValue={address.subDistrict} name="subDistrict" fluid label='อำเภอ / เขต' placeholder='อำเภอ / เขต' onChange={onChange} />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Input defaultValue={address.province} name="province" fluid label='จังหวัด' placeholder='จังหวัด' onChange={onChange} />
            <Form.Input defaultValue={address.postcode} name="postcode" fluid label='รหัสไปรษณีย์' placeholder='รหัสไปรษณีย์' onChange={onChange} />
        </Form.Group>
    </Form>
)

export default ShippingForm