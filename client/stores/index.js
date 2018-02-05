import { combineReducers } from 'redux'
import mock from './reducers/mock'

const storeApp = combineReducers({
    mock
})

export default storeApp