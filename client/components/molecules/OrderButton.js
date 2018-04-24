import React from 'react'
import { Button } from 'semantic-ui-react'

const OrderButton = ({ userType, orderStatus, onHandleSlip, onUpdateStatus }) => {
    if(userType == 'seller') {
        switch(orderStatus) {
            case 3:
                return <Button onClick={onUpdateStatus} color="green" size="large">ส่งของแล้ว</Button>
            default:
                return null
        }
    } else if (userType == 'organization') {
        switch(orderStatus) {
            case 2:
                return <Button onClick={onUpdateStatus} color="green" size="large">หลักฐานการโอนถูกต้อง</Button>
            default:
                return null
        }
    } else {
        switch(orderStatus) {
            case 1:
                return <Button onClick={onHandleSlip} color="orange" size="large">เพิ่มหลักฐานการโอน</Button>
            case 4:
                return <Button onClick={onUpdateStatus} color="green" size="large">ได้รับของแล้ว</Button>
            default:
                return null
        }
    }
}

export default OrderButton
