const order = (state = {}, action) => {
    switch (action.type) {
        case 'CREATING_ORDER':
            return {
                ...state,
                isCreating: action.isCreating
            }
        case 'CREATE_ORDER_SUCCESS':
            return {
                ...state,
                isCreating: action.isCreating,
                isCreated: action.isCreated,
                data: action.createdOrder.data
            }
        case 'FETCHING_ORDER' :
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'FETCH_ORDER_SUCCESS':
            return {
                ...state,
                isLoading: action.isLoading,
                data: action.order.data
            }
        default:
            return state
    }
}

export default order