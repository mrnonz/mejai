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

export const uploadingProductImage = () => {
    return {
        type: 'UPLOADING_IMAGE'
    }
}

export const createProductSuccess = (productId) => {
    return {
        type: 'CREATE_PRODUCT_SUCCESS',
        isLoading: false,
        isCreated: true,
        productId
    }
}

export const createBuyProduct = (product, images) => {
    return (dispatch) => {
        dispatch(creatingProduct())
        const createUrl = `${url}/product/create/`
        return Axios({
            method: 'POST',
            url: createUrl,
            data: product
        })
        .then((response) => {
            const { data: { productId } } = response
            Promise.all(images.map((image) => 
                dispatch(uploadProductImages(productId, image))
            ))
            .then((response) => dispatch(createProductSuccess(response[0].data.productId)))
            .catch((error) => {
                throw (error);
            })
        })
        .catch((error) => {
            throw(error);
        })
    }
}

export const createBuyProductAttribute = (product) => {
    return (dispatch) => {
        dispatch(creatingProduct())
        const createUrl = `${url}/product/create_attribute/`
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

export const uploadProductImages = (id, image) => {
    return (dispatch) => {
        dispatch(uploadingProductImage())
        const uploadUrl = `${url}/product/${id}/image/`
        const data = new FormData();
        data.append('image', image)
        return Axios({
            method: 'POST',
            url: uploadUrl,
            data
        }).
        then((response) => {
            return response
        })
        .catch((error) => {
            throw(error);
        })
    }
}