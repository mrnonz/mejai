import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import product from './reducers/product'
import products from './reducers/products'
import organization from './reducers/organization'
import cart from './reducers/cart'
import user from './reducers/user'
import order from './reducers/order'
import orders from './reducers/orders'

const storeApp = combineReducers({
    product,
    products,
    organization,
    cart,
    user,
    order,
    orders
})

const intialStore = {
    product: {
        isCreating: false,
        isLoading: true,
        data: {
            seller: {}
        },
        productId: 1
    },
    products: {
        isLoading: true,
        data: []
    },
    organization: {
        isLoading: true,
        data: [],
        info: {}
    },
    cart: {
        isLoading: true,
        data: []
    },
    user: {
        isLoading: true,
        isLoadingOrder: true,
        isUpdating: false,
        isCreating: false,
        user: {},
        address: '',
        orders: []
    },
    order: {
        isCreating: false,
        isLoading: true,
        data: {}
    },
    orders: {
        isLoading: true,
        data: []
    }
}
export const makeStore = () => {
    return createStore(storeApp, intialStore, composeWithDevTools(applyMiddleware(thunk)))
}