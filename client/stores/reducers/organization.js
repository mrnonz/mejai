const organization = (state = {}, action) => {
    switch (action.type) {
        case 'LOADING_ORGANIZATION':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'SUCCESS_ORGANIZATION':
            return {
                ...state,
                isLoading: action.isLoading,
                data: action.organization.data.data
            }
        case 'SUCCESS_ORGANIZATION_INFO':
            return {
                ...state,
                isLoading: action.isLoading,
                info: action.info.data
            }
        default:
            return state
    }
}

export default organization