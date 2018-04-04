export default class Categories {
    constructor(category) {
        this._category = category
    }

    get categoryName() {
        switch(this._category) {
            case 1:
                return "เครื่องแต่งกาย"
            default:
                return "หมวดหมู่"
        }
    }

}