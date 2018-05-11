const orders = (state = {}, action) => {
    switch (action.type) {
        case 'FETCHING_ORDERS':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'FETCH_ORDERS_SUCCESS':
            return {
                ...state,
                isLoading: action.isLoading,
                data: action.orders.data
            }
        default:
            return state
    }
}

export default orders