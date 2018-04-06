export default class UserAddress {
    constructor(address) {
        this._address = []
        address.split("\\").map((val, index) => {
            this._address[index] = val
        })
    }

    // TODO Change return index
    get name() {
        return this._address[1]
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