export default class BankModel {
    constructor(bank) {
        this._bank = bank
    }

    get BankName() {
        switch(this._bank) {
            case 1:
                return "ไทยพาณิชย์"
            case 2:
                return "กสิกรไทย"
            case 3:
                return "กรุงเทพ"
            case 4:
                return "กรุงไทย"
            case 5:
                return "กรุงศรีอยุธยา"
            case 6:
                return "ทหารไทย"                
            case 7:
                return "ธนชาติ"
            default:
                return "ธนาคาร"
        }
    }
}