import Axios from 'axios'

const url = process.env.BACKEND_URL 

export const biddingAuction = () => ({
    type: 'BIDDING_AUCTION',
    isLoading: true
})

export const gettingCurrentTime = () => ({
    type: 'GETTING_TIME',
    isTimeLoading: true
})

export const bidAuctionSuccess = () => ({
    type: 'BID_SUCCESS',
    isLoading: false,
    isSuccess: true
})

export const getCurrentTimeSuccess = (time) => ({
    type: 'GET_TIME_SUCCESS',
    isTimeLoading: false,
    time
})

export const getCurrentTime = () => (
    (dispatch) => {
        dispatch(gettingCurrentTime())
        const getUrl = `${url}/time`
        return Axios.get(getUrl)
            .then((response) => {
                dispatch(getCurrentTimeSuccess(response))
            }) 
            .catch((error) => {
                throw(error);
            })
    }
)

export const bidAuction = (productId, data) => (
    (dispatch) => {
        dispatch(biddingAuction())
        const bidUrl = `${url}/product/${productId}/bid/`
        return Axios({
            method: 'POST',
            url: bidUrl,
            data
        })
        .then(() => {
            dispatch(bidAuctionSuccess())
        })
        .catch((error) => {
            throw(error);
        })
    }
)