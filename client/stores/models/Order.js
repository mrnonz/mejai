import moment from 'moment'
import { omit } from 'lodash'

export default class Order {
    constructor(order) {
        this._order = order
    }

    get OrderId() {
        return this._order.orderId
    }

    get OrderStatus() {
        switch(this._order.status) {
            case 1:
                return "รอเพิ่มหลักฐานการโอน"
            case 2:
                return "รอการส่งของ"
            case 3:
                return "ส่งของแล้ว"
            case 4:
                return "สำเร็จ"
            default:
                return "สถานะคำสั่งซื้อ"
        }
    }

    get OrderStatusId() {
        return this._order.status
    }

    get CreatedAt() {
        moment.locale('th')
        return moment(this._order.created_by).format('LLL')
    }
    
    get Item() {
        return { 
            quantity: this._order.quantity,
            ...omit(this._order.item, 'quantity') 
        }
    }

    get Organization() {
        return this._order.item.organization
    }

    get Address() {
        const { address: { firstname, lastname, district, subDistrict, province, postcode, tel } } = this._order
        return `${firstname} ${lastname} ${tel} ${district} ${subDistrict} ${province} ${postcode}`
    }
}