const products = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'SUCCESS_PRODUCTS':
            return {
                isLoading: action.isLoading,
                data: action.product.data.data
            }
        default:
            return state
    }
}

export default products