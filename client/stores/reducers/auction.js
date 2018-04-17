const auction = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TIME_SUCCESS':
            return {
                ...state,
                time: action.time.data.time
            }
        default:
            return state
    }
}

export default auction