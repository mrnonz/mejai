import Axios from 'axios'

const url = process.env.BACKEND_URL 

export const fetchingProducts = () => {
    return {
        type: 'LOADING_PRODUCTS',
        isLoading: true
    }
}

export const fetchProductsSuccess = (product) => {
    return {
        type: 'SUCCESS_PRODUCTS',
        isLoading: false,
        product
    }
}

export const fetchProductItemSuccess = (product) => {
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
                dispatch(fetchProductsSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const fetchProductItem = (id) => {
    return (dispatch) => {
        dispatch(fetchingProducts())
        const fetchUrl = `${url}/product/${id}/`
        return Axios.get(fetchUrl)
            .then((response) => {
                dispatch(fetchProductItemSuccess(response))
            })
            .catch((error) => {
                throw(error);
            })
    }
}

export const creatingProduct = (product) => {
    return {
        type: 'CREATING_PRODUCT',
        isLoading: true
    }
}

export const createProductSuccess = (product) => {
    return {
        type: 'CREATE_PRODUCT_SUCCESS',
        isLoading: false,
        isCreated: true,
        product
    }
}

export const createBuyProduct = (product) => {
    return (dispatch) => {
        dispatch(creatingProduct())
        const createUrl = `${url}/product/create/`
        return Axios({
            method: 'POST',
            url: createUrl,
            data: product
        })
        .then((response) => {
            dispatch(createProductSuccess(response))
        })
        .catch((error) => {
            throw(error);
        })
    }
}