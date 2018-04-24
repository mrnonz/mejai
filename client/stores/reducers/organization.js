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
        default:
            return state
    }
}

export default organization