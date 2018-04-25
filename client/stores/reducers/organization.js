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
        case 'UPDATING_PROMPT_PAY':
            return {
                ...state,
                isUpdating: action.isUpdating
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
                isLoggingError: action.isLoaggingError
            }
        case 'PROMPT_PAY_SUCCESS':
            return {
                ...state,
                isUpdating: action.isUpdating,
                response: action.response.data
            }
        default:
            return state
    }
}

export default organization