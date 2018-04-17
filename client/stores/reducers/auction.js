const auction = (state = {}, action) => {
    switch (action.type) {
        case 'GETTING_TIME':
            return {
                ...state,
                isTimeLoading: action.isTimeLoading
            }
        case 'BIDDING_AUCTION':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'GET_TIME_SUCCESS':
            return {
                ...state,
                time: action.time.data.time,
                isTimeLoading: action.isTimeLoading
            }
        case 'BID_SUCCESS':
            return {
                ...state,
                isLoading: action.isLoading,
                isSuccess: action.isSuccess
            }
        default:
            return state
    }
}

export default auction