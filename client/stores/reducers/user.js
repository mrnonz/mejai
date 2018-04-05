const user = (state = {}, action) => {
    switch (action.type) {
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
