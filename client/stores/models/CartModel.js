import { reduce, find, remove } from 'lodash'

export default class CartModel {
    constructor(userCart) {
        this._cart = userCart
    }

    get items() {
        return this._cart.items
    }

    get organizationList() {
        return reduce(this._cart.items, (organizations, item) => {
            const duplicateItem = find(organizations, (organization) => {
                return organization.name === item.organization
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
                    name: item.organization,
                    value: item.price * item.quantity,
                    items: [item.product.name]
                })
                return organizations
            }
        }, [])
    }
}