import React from 'react'
import { Button } from 'semantic-ui-react'

const OrderButton = ({ orderStatus }) => {
    switch(orderStatus) {
        case 1:
            return <Button color="orange" size="large">เพิ่มหลักฐานการโอน</Button>
        case 2:
            return <Button color="green" size="large">ส่งของแล้ว</Button>
        case 3:
            return <Button color="green" size="large">ได้รับของแล้ว</Button>
        default:
            return <div></div>
    }
}

export default OrderButton
