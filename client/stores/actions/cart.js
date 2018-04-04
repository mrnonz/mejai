import Axios from 'axios'

const url = process.env.BACKEND_URL 

export const fetchingCart = () => {
    return {
        type: 'LOADING_CART',
        isLoading: true
    }
}

export const fetchCartSuccess = (cart) => {
    return {
        type: 'SUCCESS_CART',
        isLoading: false,
        cart
    }
}

export const fetchCart = (customerId) => {
    return (dispatch) => {
        dispatch(fetchingCart())
        const fetchUrl = url + '/customer/' + customerId + '/cart'
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchCartSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const updatingCart = () => {
    return {
        type: 'UPDATING_CART',
        isUpdating: true
    }
}

export const deletingCart = () => {
    return {
        type: 'DELETING_CART'
    }
}

export const updateCartSuccess = () => {
    return {
        type: 'UPDATE_CART_SUCCESS',
        isUpdating: false
    }
}

export const updateCartItem = (customerId, itemId, qty) => {
    return (dispatch) => {
        dispatch(updatingCart())
        const updateUrl = url + '/customer/' + customerId + '/cart/'
        return Axios({
            method: 'POST',
            url: updateUrl,
            data: {
                itemId: itemId,
                quantity: qty
            }
        })
        .then((response) => {
            dispatch(updateCartSuccess())
            dispatch(fetchCart(customerId))
        })
        .catch((error) => {
            throw(error);
        })
    }
}

export const deleteCartItem = (customerId, itemId) => {
    return (dispatch) => {
        dispatch(deletingCart())
        const deleteUrl = url + '/customer/' + customerId + '/cart/'
        return Axios({
            method: 'DELETE',
            url: deleteUrl,
            data: {
                itemId: itemId
            }
        })
        .then((response) => {
            dispatch(fetchCart(customerId))
        })
        .catch((error) => {
            throw(error);
        })
    }
}