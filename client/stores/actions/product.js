import Axios from 'axios'

const url = process.env.BACKEND_URL 

export const fetchingProducts = () => {
    return {
        type: 'LOADING_PRODUCT',
        isLoading: true
    }
}

export const fetchProductSuccess = (product) => {
    return {
        type: 'SUCCESS_PRODUCT',
        isLoading: false,
        product
    }
}

export const fetchBuyProducts = () => {
    return (dispatch) => {
        dispatch(fetchingProducts())
        const fetchUrl = url + '/product/buy/'
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchProductSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}