const products = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING_PRODUCTS':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'SUCCESS_PRODUCTS':
            return {
                ...state,
                isLoading: action.isLoading,
                data: action.product.data.data,
                buying: action.product.data.data
            }
        case 'SUCCESS_AUCTION_PRODUCTS':
            return {
                ...state,
                isLoading: action.isLoading,
                data: action.product.data.data,
                auction: action.product.data.data
            }
        default:
            return state
    }
}

export default products