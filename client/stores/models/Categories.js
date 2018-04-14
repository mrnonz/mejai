export default class Categories {
    constructor(category) {
        this._category = category
    }

    get categoryName() {
        switch(this._category) {
            case 1:
                return "เครื่องแต่งกาย"
            case 2:
                return "เครื่องใช้ไฟฟ้า"
            case 3:
                return "สุขภาพ"
            case 4:
                return "เฟอร์นิเจอร์"
            case 5:
                return "หนังสือ"
            default:
                return "หมวดหมู่"
        }
    }

}