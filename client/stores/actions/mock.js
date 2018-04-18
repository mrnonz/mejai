import Axios from 'axios'

export const toggleMock = (text) => {
    return {
        type: 'TOGGLE_MOCK',
        text
    }
}

export const loadingRepo = () => {
    return {
        type: 'LOADING_REPO',
        isLoading: true
    }
}

export const fetchRepoSuccess = (repo) => {
    return {
        type: 'SUCCESS_REPO',
        isLoading: false,
        repo
    }
}

export const fetchRepo = () => {
    return (dispatch) => {
        const url = 'https://api.github.com/users/hanam1ni'
        dispatch(loadingRepo())
        
        return Axios.get(url)
            .then((response) => {
                dispatch(fetchRepoSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}