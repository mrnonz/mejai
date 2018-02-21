import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import mock from './reducers/mock'
import repository from './reducers/repo'

const storeApp = combineReducers({
    mock,
    repository
})

export const makeStore = () => {
    return createStore(storeApp, {mock: '', repository: ''}, composeWithDevTools(applyMiddleware(thunk)))
}