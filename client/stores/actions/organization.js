import Axios from 'axios'

const url = process.env.BACKEND_URL 

export const fetchingOrganization = () => {
    return {
        type: 'LOADING_ORGANIZATION',
        isLoading: true
    }
}

export const fetchingOrganizationOrders = () => {
    return {
        type: 'LOADING_ORGANIZATION_ORDERS',
        isLoadingOrder: true
    }
}

export const fetchOrganizationSuccess = (organization) => {
    return {
        type: 'SUCCESS_ORGANIZATION',
        isLoading: false,
        organization
    }
}

export const fetchOrganizationInfoSuccess = (info) => {
    return {
        type: 'SUCCESS_ORGANIZATION_INFO',
        isLoading: false,
        info
    }
}

export const fetchOrganizationOrderSuccess = (orders) => {
    return {
        type: 'SUCCESS_ORGANIZATION_ORDER',
        isLoadingOrder: false,
        orders
    }
}

export const fetchOrganizations = () => {
    return (dispatch) => {
        dispatch(fetchingOrganization())
        const fetchUrl = `${url}/organization`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchOrganizationSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const fetchOrganizationInfo = (id) => {
    return (dispatch) => {
        dispatch(fetchingOrganization())
        const fetchUrl = `${url}/organization/${id}/`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchOrganizationInfoSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const fetchOrganizationOrders = (id) => {
    return (dispatch) => {
        dispatch(fetchingOrganizationOrders())
        const fetchUrl = `${url}/organization/${id}/sell_order/`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchOrganizationOrderSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}