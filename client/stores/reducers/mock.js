const mock = (state = [], action) => {
    switch (action.type) {
        case 'TOGGLE_MOCK':
            return action.text
        default:
            return state
    }
}

export default mock