import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import mock from './reducers/mock'
import repository from './reducers/repo'
import product from './reducers/product'
import organization from './reducers/organization'
import cart from './reducers/cart'

const storeApp = combineReducers({
    mock,
    repository,
    product,
    organization,
    cart
})

const intialStore = {
    mock: '', 
    repository: '', 
    product: {
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