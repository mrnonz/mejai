export default class UserAddress {
    constructor(address) {
        this._address = []
        address.split("\\").map((val, index) => {
            this._address[index] = val
        })
    }

    get firstname() {
        return this._address[0]
    }

    get lastname() {
        return this._address[1]
    }

    get name() {
        return `${this.firstname} ${this.lastname}`
    }

    get district() {
        return this._address[2]
    }

    get subDistrict() {
        return this._address[3]
    }

    get province() {
        return this._address[4]
    }

    get postcode() {
        return this._address[5]
    }

    get tel() {
        return this._address[6]
    }
}