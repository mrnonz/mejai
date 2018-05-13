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
                return "รอการยืนยันหลักฐาน"
            case 3:
                return "รอการส่งสินค้า"
            case 4:
                return "ส่งสินค้าแล้ว"
            case 5:
                return "สำเร็จ"
            default:
                return "สถานะคำสั่งซื้อ"
        }
    }

    get OrderStatusId() {
        return this._order.status
    }

    get OrderStatusClass() {
        switch(this._order.status) {
            case 1:
                return "wait"
            case 2:
                return "shipping"
            case 3:
                return "shipping"
            case 4:
                return "success"
            case 5:
                return "success"
            default:
                return "wait"
        }
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

    get Price() {
        if(this._order.item.auction) return this._order.price
        return this._order.item.price
    }

    get Organization() {
        return this._order.item.organization
    }

    get Slip() {
        return this._order.slip
    }

    get Address() {
        const { address: { firstname, lastname, district, subDistrict, province, postcode, tel } } = this._order
        return `${firstname} ${lastname} ${tel} ${district} ${subDistrict} ${province} ${postcode}`
    }
}