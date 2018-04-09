import Axios from 'axios'

const url = process.env.BACKEND_URL 

export const creatingUser = () => ({
    type: 'CREATING_USER',
    isCreating: true
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
        isLoading: true
    }
}

export const updatingUserAddress = () => {
    return {
        type: 'UPDATING_ADDRESS',
        isUpdating: true
    }
}

export const createUserSuccess = (user) => ({
    type: 'CREATE_USER_SUCCESS',
    isCreating: false,
    user
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
        isLoading: false,
        address
    }
}

export const updatingUserAddressSuccess = () => {
    return {
        type: 'UPDATING_ADDRESS_SUCCESS',
        isUpdating: false
    }
}

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
        .catch((error) => {
            throw(error);
        })
    }
)

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
            throw(error);
        })
    }
}
