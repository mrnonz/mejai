import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import product from './reducers/product'
import products from './reducers/products'
import organization from './reducers/organization'
import cart from './reducers/cart'

const storeApp = combineReducers({
    product,
    products,
    organization,
    cart
})

const intialStore = {
    product: {
        isLoading: true,
        data: {
            seller: {}
        }
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
    }
}
export const makeStore = () => {
    return createStore(storeApp, intialStore, composeWithDevTools(applyMiddleware(thunk)))
}