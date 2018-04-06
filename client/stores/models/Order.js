export default class Order {
    constructor(order) {
        this._order = order
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
}