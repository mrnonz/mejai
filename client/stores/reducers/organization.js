const organization = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING_ORGANIZATION':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'LOADING_ORGANIZATION_ORDERS':
            return {
                ...state,
                isLoadingOrder: action.isLoadingOrder
            }
        case 'LOADING_ORGANIZATION_BANK':
            return {
                ...state,
                isLoadingBank: action.isLoadingBank
            }
        case 'ORGANIZATION_LOGGING_IN':
            return {
                ...state,
                isLogging: action.isLogging,
                isLoggingError: action.isLoggingError
            }
        case 'UPDATING_PAYMENT':
            return {
                ...state,
                isUpdatingPayment: action.isUpdatingPayment
            }
        case 'FETCHING_BANKS_LIST':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'SUCCESS_ORGANIZATION':
            return {
                ...state,
                isLoading: action.isLoading,
                data: action.organization.data.data
            }
        case 'SUCCESS_ORGANIZATION_INFO':
            return {
                ...state,
                isLoading: action.isLoading,
                info: action.info.data
            }
        case 'SUCCESS_ORGANIZATION_ORDER':
            return {
                ...state,
                isLoadingOrder: action.isLoadingOrder,
                orders: action.orders.data.data
            }
        case 'SUCCESS_ORGANIZATION_BANK':
            return {
                ...state,
                isLoadingBank: action.isLoadingBank,
                bank: action.bank.data
            }
        case 'ORGANIZATION_LOGIN_SUCCESS':
            return {
                ...state,
                isLogging: action.isLogging,
                organization: action.organization.data
            }
        case 'ORGANIZATION_LOGIN_FAILED':
            return {
                ...state,
                isLogging: action.isLogging,
                isLoggingError: action.isLoggingError
            }
        case 'PAYMENT_SUCCESS':
            return {
                ...state,
                isUpdatingPayment: action.isUpdatingPayment
            }
        case 'FETCH_BANK_SUCCESS':
            return {
                ...state,
                isFetching: action.isFetching,
                banks: action.banks.data
            }
        default:
            return state
    }
}

export default organization