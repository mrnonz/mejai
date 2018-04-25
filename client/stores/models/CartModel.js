import { isNil, filter, reduce, find, remove } from 'lodash'

export default class CartModel {
    constructor(userCart) {
        this._cart = userCart
        this._cart.items = filter(userCart.items, (item) => !isNil(item.product) )
    }

    get items() {
        if(isNil(this._cart.items)) {
            return []
        }
        return this._cart.items
    }

    get organizationList() {
        return reduce(this._cart.items, (organizations, item) => {
            const duplicateItem = find(organizations, (organization) => {
                return organization.name === item.product.organization.name
            })
            if(duplicateItem) {
                remove(organizations, (o) => o.name === duplicateItem.name)
                duplicateItem.items.push(item.product.name)
                organizations.push({
                    name: duplicateItem.name,
                    value: duplicateItem.value + item.price * item.quantity,
                    items: duplicateItem.items
                })
                
                return organizations
            } else {
                organizations.push({
                    name: item.product.organization.name,
                    value: item.price * item.quantity,
                    items: [item.product.name]
                })
                return organizations
            }
        }, [])
    }
}