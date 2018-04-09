import Axios from 'axios'
import { omit, isNil } from 'lodash'
import { updateUserAddress } from 'stores/actions/user'

const url = process.env.BACKEND_URL

export const fetchingOrders = () => ({
    type: 'FECTHING_ORDERS',
    isLoading: true
})

export const fetchingOrder = () => ({
    type: 'FECTHING_ORDER',
    isLoading: true
})

export const creatingOrder = () => ({
    type: 'CREATING_ORDER',
    isCreating: true
})

export const updatingOrderStatus = () => ({
    type: 'UPDATING_ORDER_STATUS'
})

export const uploadingSlip = () => ({
    type: 'UPLOADING_SLIP',
    isUploading: true
})

export const fetchOrdersSuccess = (orders) => ({
    type: 'FETCH_ORDERS_SUCCESS',
    isLoading: false,
    orders
})

export const fetchOrderSuccess = (order) => ({
    type: 'FETCH_ORDER_SUCCESS',
    isLoading: false,
    order
})

export const createOrderSuccess = (createdOrder) => ({
    type: 'CREATE_ORDER_SUCCESS',
    isCreating: false,
    isCreated: true,
    createdOrder
})

export const updateOrderStatusSuccess = () => ({
    type: 'UPDATE_ORDER_STATUS_SUCCESS'
})

export const uploadSlipSuccess = (order) => ({
    type: 'UPLOAD_SLIP_SUCCESS',
    isUploading: false,
    order
})

export const fetchOrders = (customerId) => {
    return (dispatch) => {
        dispatch(fetchingOrders())
        const fetchUrl = `${url}/customer/${customerId}/orders/`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchOrdersSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const fetchOrder = (orderId) => (
    (dispatch) => {
        dispatch(fetchingOrder())
        const fetchUrl = `${url}/order/${orderId}`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchOrderSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
)

export const createOrder = (id, cart, address) => {
    return (dispatch) => {
        dispatch(creatingOrder())
        return dispatch(updateUserAddress(id, address))
            .then((response) => {
                const createUrl = `${url}/order/create/`
                return Axios({
                    method: 'POST',
                    url: createUrl,
                    data: FormCartData(cart, address)
                })
                .then((response) => {
                    dispatch(createOrderSuccess(response))
                })
                .catch((error) => {
                    throw(error);
                })
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const updateOrderStatus = (orderId) => (
    (dispatch) => {
        dispatch(updatingOrderStatus())
        const updateUrl = `${url}/order/${orderId}/status/`
        return Axios({
            method: 'PUT',
            url: updateUrl
        })
        .then(() => {
            dispatch(updateOrderStatusSuccess())
        })
        .catch((error) => {
            throw(error);
        })
    }
)

export const uploadSlip = (file, orderId) => (
    (dispatch) => {
        dispatch(uploadingSlip())
        const uploadUrl = `${url}/order/${orderId}/slip/`
        const data = new FormData();
        data.append('slip', file[0])
        return Axios({
            method: 'POST',
            url: uploadUrl,
            data
        })
        .then((response) => {
            dispatch(uploadSlipSuccess(response))
            return dispatch(updateOrderStatus(orderId))
        })
        .then(() => {
            dispatch(updateOrderStatusSuccess())
        })
        .catch((error) => {
            throw(error);
        })
    }
)

const FormCartData = (cart, address) => {
    const cartItem = cart.items.map((item) => {
        const product = { 
            id: item.product.productId, 
            ...omit(item.product, ['productId']) }
        if(isNil(item.attribute)) product.attribute = { name: '', value: '' }
        return { 
            product,
            ...omit(item, ['product']) 
        }
    })
    return {
        userId: cart.customerId,
        items: cartItem,
        address: address,
        ...omit(cart, ['items', 'customerId'])
    }
} 