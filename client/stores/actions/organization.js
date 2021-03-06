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

export const fetchingOrganizationBank = () => {
    return {
        type: 'LOADING_ORGANIZATION_BANK',
        isLoadingBank: true
    }
}

export const organizationLogging = () => ({
    type: 'ORGANIZATION_LOGGING_IN',
    isLogging: true,
    isLoggingError: false,
})

export const updatingPayment = () => ({
    type: 'UPDATING_PAYMENT',
    isUpdatingPayment: true
})

export const fetchingBanks = () => ({
    type: 'FETCHING_BANKS_LIST',
    isFetching: true
})

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

export const fetchOrganizationBankSuccess = (bank) => {
    return {
        type: 'SUCCESS_ORGANIZATION_BANK',
        isLoadingBank: false,
        bank
    }
}

export const organizationLoginSuccess = (organization) => ({
    type: 'ORGANIZATION_LOGIN_SUCCESS',
    isLogging: false,
    organization
})

export const organizationLoginFailed = () => ({
    type: 'ORGANIZATION_LOGIN_FAILED',
    isLogging: false,
    isLoggingError: true
})

export const updatePaymentSuccess = () => ({
    type: 'PAYMENT_SUCCESS',
    isUpdatingPayment: false
})


export const fetchBankSuccess = (banks) => ({
    type: 'FETCH_BANK_SUCCESS',
    isFetching: false,
    banks
})

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

export const fetchOrganizationBank = (id) => {
    return (dispatch) => {
        dispatch(fetchingOrganizationBank())
        const fetchUrl = `${url}/organization/${id}/bank/`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchOrganizationBankSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const organizationLogin = (data) => (
    (dispatch) => {
        dispatch(organizationLogging())
        const logUrl = `${url}/organization/login/`
        return Axios({
            method: 'POST',
            url: logUrl,
            data
        })
        .then((response) => {
            dispatch(organizationLoginSuccess(response))
        })
        .catch((error) => {
            dispatch(organizationLoginFailed())
        })
    }
)

export const createUpdatePromptPay = (id, data, isCreate) => (
    (dispatch) => {
        dispatch(updatingPayment())
        const updateUrl = `${url}/organization/${id}/bank/promptpay/`
        const method = isCreate ? 'POST' : 'PUT'
        return Axios({
            url: updateUrl,
            method,
            data
        })
        .then(() => {
            dispatch(updatePaymentSuccess())
        })
        .catch((error) => {
            throw(error);
        })
    }
)

export const updateOrganizationBank = (id, data) => (
    (dispatch) => {
        dispatch(updatingPayment())
        const updateUrl = `${url}/organization/${id}/bank/account/`
        return Axios({
            url: updateUrl,
            method: 'POST',
            data
        })
        .then(() => {
            dispatch(updatePaymentSuccess())
        })
        .catch((error) => {
            throw(error);
        })
    }
)

export const fetchBanks = () => (
    (dispatch) => {
        dispatch(fetchingBanks())
        const fetchUrl = `${url}/bank`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchBankSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
)
