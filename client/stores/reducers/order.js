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
                isCreated: action.isCreated
            }
        case 'UPLOADING_SLIP':
            return {
                ...state,
                isUploading: action.isUploading
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
        case 'UPLOAD_SLIP_SUCCESS':
            return {
                ...state,
                isUploading: action.isUploading
            }
        default:
            return state
    }
}

export default order