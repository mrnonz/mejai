const product = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING_PRODUCT':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'SUCCESS_PRODUCT':
            return {
                isLoading: action.isLoading,
                data: action.product.data
            }
        case 'CREATING_PRODUCT':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'CREATE_PRODUCT_SUCCESS':
            return {
                ...state,
                isLoading: action.isLoading,
                isCreated: action.isCreated,
                data: action.product.data
            }
        default:
            return state
    }
}

export default product