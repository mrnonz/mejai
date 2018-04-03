const cart = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING_CART':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'UPDATING_CART':
            return {
                ...state,
                isUpdating: action.isUpdating
            }
        case 'DELETING_CART':
            return {
                ...state
            }
        case 'SUCCESS_CART':
            return {
                isLoading: action.isLoading,
                data: action.cart.data
            }
        default:
            return state
    }
}

export default cart