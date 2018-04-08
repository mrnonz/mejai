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
        default:
            return state
    }
}

export default order