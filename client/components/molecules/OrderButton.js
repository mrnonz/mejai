import React from 'react'
import { Button } from 'semantic-ui-react'

const OrderButton = ({ orderStatus, onHandleSlip, onHandleShipping, onHandleReceive }) => {
    switch(orderStatus) {
        case 1:
            return <Button onClick={onHandleSlip} color="orange" size="large">เพิ่มหลักฐานการโอน</Button>
        case 2:
            return <Button onClick={onHandleShipping} color="green" size="large">ส่งของแล้ว</Button>
        case 3:
            return <Button onClick={onHandleReceive} color="green" size="large">ได้รับของแล้ว</Button>
        default:
            return null
    }
}

export default OrderButton
