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
                data: action.product.data.data
            }
        default:
            return state
    }
}

export default product