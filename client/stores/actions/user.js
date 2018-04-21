import Axios from 'axios'

const url = process.env.BACKEND_URL 

export const creatingUser = () => ({
    type: 'CREATING_USER',
    isCreating: true
})

export const fetchingSellerOrder = () => ({
    type: 'LOADING_SELLER_ORDER',
    isLoadingOrder: true
})

export const fetchingUserDetail = () => {
    return {
        type: 'LOADING_USER',
        isLoading: true
    }
}

export const fetchingUserAddress = () => {
    return {
        type: 'LOADING_ADDRESS',
        isLoadingAddress: true
    }
}

export const updatingUserAddress = () => {
    return {
        type: 'UPDATING_ADDRESS',
        isUpdating: true
    }
}

export const updatingUserDetail = () => {
    return {
        type: 'UPDATING_DETAIL',
        isUpdating: true
    }
}

export const userLogging = () => ({
    type: 'USER_LOGGING_IN',
    isLogging: true,
    isLoggingError: false,
})

export const createUserSuccess = (user) => ({
    type: 'CREATE_USER_SUCCESS',
    isCreating: false,
    user
})

export const createUserFailed = () => ({
    type: 'CREATE_USER_FAILED',
    isLogging: false,
    isCreating: false
})

export const fetchSellerOrderSuccess = (orders) => ({
    type: 'FETCH_SELLER_ORDER_SUCCESS',
    isLoadingOrder: false,
    orders
})

export const fetchUserSuccess = (user) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        isLoading: false,
        user
    }
}

export const fetchAddressSuccess = (address) => {
    return {
        type: 'FETCH_ADDRESS_SUCCESS',
        isLoadingAddress: false,
        address
    }
}

export const updatingUserAddressSuccess = () => {
    return {
        type: 'UPDATING_ADDRESS_SUCCESS',
        isUpdating: false
    }
}

export const updateUserDetailSuccess = () => ({
    type: 'UPDATE_USER_DETAIL_SUCCESS',
    isUpdating: false
})

export const userLoginSuccess = (data) => ({
    type: 'USER_LOGIN_SUCCESS',
    user: data.data,
    isLogging: false
})

export const userLoginFailed = () => ({
    type: 'USER_LOGIN_FAILED',
    isLogging: false,
    isLoggingError: true
})

export const createUser = (userData) => (
    (dispatch) => {
        dispatch(creatingUser())
        const createUrl = `${url}/customer/create/`
        return Axios({
            method: 'POST',
            url: createUrl,
            data: userData
        })
        .then((response) => {
            return dispatch(createUserSuccess(response))
        })
        .catch(error => {
            throw(error);
        })
    }
)

export const fetchSellerOrder = (id) => {
    return (dispatch) => {
        dispatch(fetchingSellerOrder())
        const fetchUrl = `${url}/customer/${id}/sell_order/`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchSellerOrderSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const fetchUserDetail = (id) => {
    return (dispatch) => {
        dispatch(fetchingUserDetail())
        const fetchUrl = `${url}/customer/${id}`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchUserSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const fetchUserAddress = (id) => {
    return (dispatch) => {
        dispatch(fetchingUserAddress())
        const fetchUrl = `${url}/customer/${id}/address/`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchAddressSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const userLogin = (data) => (
    (dispatch) => {
        dispatch(userLogging())
        const logUrl = `${url}/customer/login/`
        return Axios({
            method: 'POST',
            url: logUrl,
            data
        })
        .then((response) => {
            dispatch(userLoginSuccess(response))
        })
        .catch((error) => {
            dispatch(userLoginFailed())
        })
    }
)

export const updateUserAddress = (id, address) => {
    return (dispatch) => {
        dispatch(updatingUserAddress())
        const updateUrl = `${url}/customer/${id}/address/`
        return Axios({
            method: 'PUT',
            url: updateUrl,
            data: address
        })
        .then((response) => {
            dispatch(updatingUserAddressSuccess())
            return dispatch(fetchUserAddress(id))
        })
        .catch((error) => {
            dispatch(userLoginFailed())
            throw(error);
        })
    }
}

export const updateUserDetail = (id, detail) => {
    return (dispatch) => {
        dispatch(updatingUserDetail())
        const updateUrl = `${url}/customer/${id}/`
        return Axios({
            method: 'PUT',
            url: updateUrl,
            data: detail
        })
        .then((response) => {
            dispatch(updateUserDetailSuccess(response))
        })
        .catch((error) => {
            throw(error);
        })
    }
}
