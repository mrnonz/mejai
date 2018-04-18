const repository = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING_REPO':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'SUCCESS_REPO':
            return {
                isLoading: action.isLoading,
                data: action.repo.data
            }
        default:
            return state
    }
}

export default repository