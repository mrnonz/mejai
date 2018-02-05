import { combineReducers } from 'redux'
import mock from './reducers/mock'
import repository from './reducers/repo'

const storeApp = combineReducers({
    mock,
    repository
})

export default storeApp