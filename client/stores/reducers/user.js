const user = (state = {}, action) => {
    switch (action.type) {
        case 'CREATING_USER':
            return {
                ...state,
                isCreating: action.isCreating
            }
        case 'LOADING_SELLER_ORDER':
            return {
                ...state,
                isLoadingOrder: action.isLoadingOrder
            }
        case 'LOADING_USER':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'LOADING_ADDRESS':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                isCreating: action.isCreating,
                user: action.user.data
            }
        case 'CREATE_USER_FAILED':
            return {
                ...state,
                isCreating: action.isCreating
            }
        case 'FETCH_SELLER_ORDER_SUCCESS':
            return {
                ...state,
                isLoadingOrder: action.isLoadingOrder,
                orders: action.orders.data.data
            }
        case 'FETCH_USER_SUCCESS':
            return {
                ...state,
                isLoading: action.isLoading,
                user: action.user.data
            }
        case 'FETCH_ADDRESS_SUCCESS':
            return {
                ...state,
                isLoading: action.isLoading,
                address: action.address.data.address
            }
        default:
            return state
    }
}

export default user
