import { filter } from 'lodash'

export default class UserProducts {
    constructor(products, userId) {
        this._products = filter(products, (product) => product.owner_id == userId)
    }
    
    get Products() {
        return this._products
    }
}